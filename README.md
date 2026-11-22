# GHOST SLURP — 30 coins, 12 bugs, 60 seconds, 1 hungry ghost

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Jo3st4r/post-x-agent-builds-game-20261122-bot/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Jo3st4r/post-x-agent-builds-game-20261122-bot/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A tiny browser game built from one prompt by an AI coding agent, for the
make.fun bounty "The agent builds a game from one prompt". A hungry ghost
slurps coins while dodging glitch-bugs — and the video of it being built is
the entry on X.

**Play it:** open `game/index.html` in a desktop browser (or play it live at
`https://jo3st4r.github.io/post-x-agent-builds-game-20261122-bot/game/` once
GitHub Pages is on).

## The game

- **30 coins** to slurp, **12 glitch-bugs** on the hunt, **60 seconds** on the
  clock, **1 hungry ghost** — that's you.
- Move with **WASD / arrows / mouse**. Hold **SPACE** (or the mouse button)
  to **SLURP**: nearby coins fly into the ghost's mouth.
- The catch: slurping drags the bugs closer too. Touch a bug and you lose one
  of 3 lives.
- Collect all 30 coins before the clock runs out to win. Press **R** to play
  again.

## The video

The entry video (made in this same agent session with ffmpeg) shows the
prompt, the agent working, and the finished game running — and ends with
make.fun's referral end card carrying the referral code **4h54dhb7**.

- Play code: `makefun-barnacle-doorway-silo`
- Bounty: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709

## The entry program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output`, where the house reads the X post's address.
That is all it has to do — the post itself is the entry.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
