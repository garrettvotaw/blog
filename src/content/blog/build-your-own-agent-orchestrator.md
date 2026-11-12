---
title: 'Stop shopping for agent orchestration tools. Build your own.'
description: 'Why I skip off-the-shelf agent orchestration tools and built my own on the Claude Agent SDK, with plain app logic deciding when to wake an LLM.'
pubDate: 2026-11-12
tags: ['agent orchestration', 'claude agent sdk', 'multi-agent systems', 'agentic workflows']
draft: true
---

Agent orchestration is all the rage right now. It's like every week someone sends me a new tool. [Copilot has their own](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/), [Herdr](https://herdr.dev) is a thing, and of course [Claude has their version](https://code.claude.com/docs/en/agents).

And they're fine... if you want to spend your day babysitting a bunch of agents, chatting back and forth and reading transcripts. I don't. There's a better way.

Build your own.

Here's the thing. I have a very specific workflow. It's how I work, and I want a tool that's custom fitted to it. So I built [my own agent orchestration tool](../my-ai-development-workflow/).

I don't care what my lowest-rung agent is doing. I don't want to manage a dozen agents. I want to manage one agent that manages the agents. I talk to my top-level orchestrator, and decisions bubble up to me through it.

But I also don't want to go transcript diving all day to find out when something needs me. So I built tools the Agent SDK can call to escalate a question to me (think Claude Code's AskUserQuestion tool). Except mine is better, because the question shows up in my own custom UI, where I can copy the output and send it straight to the PO.

It's not just questions, either. When I run a PR review, I get a nice little checkbox UI where I pick which of the comments my agents found actually get posted, and with what status. The posting itself is just the GitHub API. No need to ask Claude to do it.

## AI doesn't replace a computer. It uses one.

That's a whole other post I need to write. But here's the short version: owning the orchestrator means I get to decide which parts are AI and which parts are just code. Deterministic, boring, cheap code. Less AI-ey.

For instance, I have a PR monitor (because who wants to monitor 80 PRs by hand?). Its sole job is to monitor each PR. Bet you didn't see that coming. It checks for conflicts, review comments, CI failures, etc. When it finds one, it responds in some agentic way.

The problem is that 90% of the ticks are just "nothing to see here." Why burn tokens having an LLM check a PR that hasn't changed since the last time it checked?

So I don't. The app does the checking with plain old app logic, and only wakes an LLM when something has actually changed and needs attention. The agent does agent work. The computer does computer work.

That's the kind of call you only get to make when you own the loop.

## "Isn't building your own a ton of work?"

Less than you'd think. It took me a couple of days to get mine fully usable. (Then again, is software ever really "done"?) The Agent SDK gives you the agent loop and tool calling out of the box. What you write is the stuff that's specific to you, which is the whole point.

One warning: don't just tap into Claude sessions via hooks and crap. I tried that and it sucks. You end up slowing your agents down with a pile of hooks, and I found the app was limited to reading session transcripts, which is the exact thing I built this to get away from. Use the Agent SDK under the hood and own the whole thing.

## So no, you can't have mine.

All these tools are cool or whatever. Don't use them. And don't ask for mine, either. Not because it's a secret, but because it was built for me. It'd fit you about as well as theirs fits me.

Build your own, and make it something you actually like.

Happy coding!
