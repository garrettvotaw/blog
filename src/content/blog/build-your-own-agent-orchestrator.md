---
title: 'Stop shopping for agent orchestration tools. Build your own.'
description: 'Why I skip off-the-shelf agent orchestration tools and built my own on the Claude Agent SDK, with plain app logic deciding when to wake an LLM.'
pubDate: 2026-11-12
tags: ['agent orchestration', 'claude agent sdk', 'multi-agent systems', 'agentic workflows']
draft: true
---

Agent orchestration is all the rage right now. It's like every week someone sends me a new tool. [Copilot has their own](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/), [Herdr](https://herdr.dev) is a thing, and of course [Claude has their version](https://code.claude.com/docs/en/agents). And they're fine... if you want to spend your day babysitting a bunch of agents, chatting back and forth and reading transcripts. I don't. There's a better way. Build your own.

Here's the thing. I have a very specific workflow. It's how I work, and I want a tool that's custom fitted to it. So I built [my own agent orchestration tool](../my-ai-development-workflow/).

I don't care what my lowest-rung agent is doing. I just talk to my top-level orchestrator, and decisions bubble up to me through it.

But I also don't want to go transcript diving all day to find out when something needs me. So I built tools the Agent SDK can call to escalate a question to me (think Claude Code's AskUserQuestion tool). Except mine is better, because the question shows up in my own custom UI, where I can copy the output and send it straight to the PO.

When I run a PR review, I get a nice little checkbox UI where I pick which of the comments my agents found actually get posted, and with what status. The post itself just uses the GitHub API instead of asking Claude to do it.

## Making some of it less AI-ey

Having my own orchestrator also lets me make some parts more deterministic. (I'll need to write another post about how AI doesn't replace a computer, it uses one.)

For instance, I have a PR monitor (because who wants to monitor 80 PRs by hand?). Its sole job is to monitor each PR. Bet you didn't see that coming. It checks for conflicts, review comments, CI failures, etc. When it finds one, it responds in some agentic way.

The problem is that 90% of the ticks are just "nothing to see here," and I don't need to burn tokens checking something that hasn't changed. So I built app logic around that, and it only wakes an LLM when something has actually changed and needs attention.

## "Isn't building your own a ton of work?"

It took me a couple of days to get mine fully usable (but is software ever really "done"?).

Just don't tap into Claude sessions via hooks and crap. I tried that and it sucks. You end up slowing your agents down with a pile of hooks, and I found I was limited to having the app read session transcripts. Use the Agent SDK under the hood instead.

All these tools are cool or whatever, but don't use them. And don't ask for mine, either, because it was built for me. Build your own and make it something you like.

Happy coding!
