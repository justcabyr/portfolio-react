---
title: "The Dilenma of Friendships Table"
description: "How would you structure your friendships table"
pubDate: 2026-02-12
---

# Learning React Native by Building a Useless Social App (and Accidentally Rethinking Database Design)

I’m currently learning React Native, guided by the great Jason, and I decided early on that the best way to learn is building an actual application.

So I picked something intentionally simple: a tiny social app with exactly one feature.

Two users.  
They’re friends.  
They poke each other.

No feeds. No likes. No timelines. Just a notification in an insulting tone that says “Hey, Summy poked you”. The other person can poke back. That's it.

---

## The App Was Simple. The Data Was Not.

Once you get past authentication and basic setup, the next question:

**How do you model friendships in a database?**

It had been a while since I’d done any serious database structuring, so my first instinct was to keep it dead simple. I thought:

> Just create a table with id, inviter, invitee, and created_at.

Done. Ship it. It works.

And honestly? For a learning project, that approach is usually fine. You can always modify things later.

But then a friend casually mentioned something that stuck with me:  
At his company, they don’t even have a development server. They ship straight to production.

That flipped a switch in my head.

---

## “What If This Was Production?”

I started reframing the problem as if I were in a job interview.

Someone asks:  
**“How would you structure a friendship table?”**

Suddenly, the simple solution didn’t feel so simple anymore.

Questions start piling up:

- How do you prevent adding the same friend twice?
- If user A adds user B, how do you stop user B from adding user A again as a duplicate row?
- How do you enforce uniqueness without doing expensive checks everywhere?
- Which column do you index?
- Which one is the primary key?
- How do you query friendships efficiently?
- If you store (A → B), what happens when (B → A) shows up?

That’s when things get messy.

---

## From Tables to Graphs

So I did what everyone does: I asked ChatGPT.

**“How does Facebook store billions of friendships?”**

The answer, unsurprisingly, was graphs.

Social graphs. Nodes and edges. Users are nodes, friendships are edges.

That immediately reminded me of all those algorithm assessments—graph traversal, bidirectional edges, adjacency lists. Conceptually clean. Practically… still tricky when you’re working inside a relational database.

The biggest issue wasn’t storage. It was querying.

Do you query from user A?

From user B?

Do you sort first, then query?

How do you guarantee consistency?

---

## The “Orderless” Insight

Then a friend (John) suggested something deceptively simple:

**Make the friendship orderless.**

Instead of storing (inviter, invitee), store (user_low, user_high).

Before inserting into the database:

- Sort the two user IDs
- Always store the smaller ID first
- Store the larger ID second

So:

> Friendship between A and B is always (min(A,B), max(A,B))

There is exactly one valid representation of that relationship.

That one constraint solves a lot:

- No duplicate friendships
- No (A,B) vs (B,A) confusion
- Easy uniqueness constraints
- Predictable queries

Every check follows the same rule:  
**small ID first, big ID second.**

---

## Wrestling with SQL (and RPCs)

Implementing this meant writing proper SQL—sorting IDs before insertion, enforcing uniqueness, and querying correctly.

This part was… frustrating.

I went back and forth with ChatGPT trying to get the right SQL and PL/pgSQL functions. I kept getting close-but-not-quite answers until I finally landed on something that worked.

At that point, the table design was solid.

Then Supabase entered the chat.

I kept seeing references to RPCs and started wondering:

- Is RPC a Supabase thing?
- Is it PostgreSQL?
- Is it something else entirely?

Turns out, RPC (Remote Procedure Call) is just an old computing concept. Supabase exposes Postgres functions as RPC endpoints, which suddenly made everything click.

Once I understood that, the whole system snapped into place.

---

## What I Learned

By the end of this “simple” poking app, I had:

- A clean, orderless friendship table
- Strong uniqueness guarantees
- Predictable queries
- A better understanding of Postgres functions
- A clearer mental model of how social relationships are stored at scale

All from an app that does almost nothing.

---

## So… How Would You Do It?

If you were designing a friendship table for a social app—big or small—how would you structure it?

Sometimes the most useful projects aren’t the ambitious ones. They’re the tiny, slightly pointless ones that force you to think deeply about fundamentals.

Cheers.
