---
title: "The Dilenma of Friendships Table"
description: "How would you structure your friendships table"
pubDate: 2026-02-12
---

## Learning React Native by Building a Social App (and Rethinking Database Design)

I’m currently learning React Native, guided by the great Jonathan Mazin, and I decided early on that the best way to learn is building an actual application.

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

But then I remembered something a friend mentioned to me a while back: At his company, they don’t have a development server. They ship straight to production. Of course with code review, rollbacks and all that good stuff.

That flipped a switch in my head.

---

## “What If This Was Production?”

Better still, if this were to be a job interview, and someone asks:  

**“How would you structure a friendship table?”**

And this begets the questions:

- If user A adds user B, how do you stop user B from adding user A again as a duplicate row?
- How do you enforce uniqueness without doing expensive checks everywhere?
- Which column do you index?
- How do you query friendships efficiently?
- If you store (A → B), what happens when (B → A) shows up?

---

## So what's the fix?

I asked ChatGPT.

**“How does Facebook store billions of friendships?”**

The answer was graphs. Social graphs. Nodes and edges. Users are nodes, friendships are edges.

This reminded me of all algo assessments — graph traversal. But then, how do you query?

Do you query from user A? From user B? Do you sort first, then query? How do you guarantee consistency?

---

## The “Orderless” Insight

Remember I said Jon was teaching me React Native, he suggested something:

**Make the friendship orderless.**

Instead of storing (inviter, invitee), store (user_low, user_high).

Before inserting into the database:

- Sort the two user IDs
- Always store the smaller ID first
- Store the larger ID second

So:

> Friendship between A and B is always (min(A,B), max(A,B))

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

This part was… frustrating. I went back and forth with ChatGPT trying to get the right SQL and plpgSQL functions. I kept getting close-but-not-quite answers until I finally landed on something that worked.

// Add sql script

At that point, the table design was solid.

Then Supabase entered the chat.

I kept seeing references to RPCs and started wondering:

// Add Supabase rpc call function

- Is RPC a Supabase thing?
- Is it PostgreSQL?
- Is it something else entirely?

Turns out, RPC (Remote Procedure Call) is just an old computing concept. Supabase exposes Postgres functions as RPC endpoints, which suddenly made everything click. Once I understood that, it made a lot of sense.

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

Cheers.
