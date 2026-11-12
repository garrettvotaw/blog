---
title: 'My AI development workflow, end to end'
description: 'How I ship production software with a team of AI agents: a PM agent, story owners that claim files, a QA team on Playwright, and where I stay in charge.'
pubDate: 2026-11-10
tags: ['agentic workflows', 'multi-agent systems', 'ai-assisted development', 'claude code']
draft: false
---

My AI development workflow isn't "an assistant in my editor." It's a small software team made of agents. A PM agent holds the whole project in its head. Story owners claim the files they'll touch before they start. Specialists ask product questions and dig up undocumented APIs. A coder writes the code, and a QA team of agents runs every story in a real dev environment before I ever look at it. I make two calls myself: what we're building, and what gets merged.

Most "how I code with AI" posts stop at autocomplete and chat. This one covers the whole loop.

## The short version

- **Plan before anything writes code.** Ambiguity is the enemy; most of the work is removing it.
- **A PM agent runs the project.** It knows the scope, the traps, and which stories can safely start.
- **Story owners claim files.** No two agents edit the same file at the same time.
- **Specialists feed the coder.** A product questioner removes ambiguity; an API researcher documents what nobody documented.
- **Code has to pass gates.** Acceptance-criteria checks, tests, end-to-end tests, then an agent QA team that exercises the feature in dev.
- **I keep merges and product calls.** Everything else is delegated.

## The tools

Claude does almost all of the work. Sonnet 5.5 and Opus 5.5 are the primary drivers. I reach for Fable only for heavy architectural decisions, where slower and deeper thinking is worth it.

I don't use VS Code anymore. :aside[Who even does?] I work in a desktop app I wrote myself that runs the Claude Agent SDK under the hood. Owning the harness is what makes everything below possible: the roles, the hand-offs, and the gates are all mine to shape.

## 1. Planning: turning a ticket into something an agent can't misread

Most of my work is legacy migration, which is the hardest possible environment for AI: old code, undocumented behavior, and integrations nobody fully remembers. So the first thing I built was a legacy code reader, a tool whose job is to understand the existing system before anyone changes it.

It's an agent that answers questions about the old code by parsing the binary file directly. Instead of me spelunking through a legacy system, every other agent in the pipeline can just ask it how something works.

The rule underneath all of this: an agent should never have to guess. Every question it would otherwise guess at gets answered up front, either by the reader, by a specialist agent, or by me.

## 2. Splitting work across agents

The structure looks like a real software org, because that's what it is:

- **PM agents** hold everything about the project as a whole: the scope, the history, and the traps. A PM decides which stories can start and when. On a big project I run several PMs at once.
- **Story owners** each own one story from start to finish. Before a story starts, its owner claims the files it will touch. The PM only green-lights stories whose claims don't overlap. That one rule is how multiple agents work in parallel without trampling each other.
- **A product questioner** reads the story and asks the follow-up questions a sharp engineer would ask in a planning meeting. Its whole job is reducing ambiguity before code exists.
- **An API researcher** goes and finds out how the internal APIs actually behave, because the docs, if they exist, are wrong or missing. The coder starts with real details instead of assumptions.
- **The coder** writes the code, against a story that has already been questioned, researched, and scoped to a set of files.

Several PMs, each with several story owners in flight, is how one developer moves at team speed. The file-ownership rule is the thing that keeps it from turning into chaos.

## 3. Review gates: where AI code gets caught

Nothing gets to me on vibes. Every story passes through gates:

1. **Acceptance-criteria verification.** Did the story actually do what it said it would? Each criterion gets checked explicitly.
2. **Tests.** Unit and integration tests have to pass.
3. **End-to-end tests.**
4. **The QA team.** This is the biggest thing I've added. A team of QA agents runs each story in the dev environment, the way a person would click through it, using Playwright scripts on a custom Playwright harness I built.

The QA agents use Playwright *scripts*, not the Playwright MCP server. The MCP server drives a browser UI one step at a time; scripts just run, and they're *way* faster. When QA runs on every story, that speed is the difference between a gate you keep and a gate you skip.

By the time a story reaches me, it has been specified, questioned, researched, built, verified against its criteria, tested, and used.

## 4. Where I stay in the loop

Two things never get handed off:

- **Product calls.** What we build, and what "right" means for the business. Agents can raise the question; I answer it.
- **Merges.** Nothing reaches the main branch without me.

Everything else, from breaking down work to writing, testing, and QA, is delegated.

## What it takes

Honestly, once it's running, it's smooth. Stories move through the pipeline and arrive verified. The cost is up front. You have to invest in the structure: the planning, the roles, the gates, and tools like the code reader and the QA harness. You're building the team before the team builds the software.

## Try it yourself

If you try one thing this week, try a PM agent. Before you ask an agent to write any code, give one agent the job of holding the whole project: the scope, the constraints, the traps, and the order things should happen in. Have it hand out work one well-defined story at a time. Even with a single coder underneath it, you'll notice the difference immediately.

I write about agentic development, multi-agent architecture, and shipping real software with AI. If you want to work together, [get in touch](../../work-with-me/).
