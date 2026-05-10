# Zip

Zip is a LinkedIn-Zip-inspired puzzle game built with Expo and React Native. The player draws one continuous path across the entire grid, hits numbered checkpoints in order, avoids illegal wall crossings, and tries to finish with no backtracks.

## Gameplay

- Start on checkpoint `1`.
- Drag through orthogonally adjacent cells only.
- Visit every cell exactly once.
- Hit checkpoints in strict order: `1 → 2 → 3 ...`.
- Dragging back onto your existing path trims it and counts as a backtrack.
- `Reset` clears the board but keeps the same run timer alive.
- Completed puzzles reopen in a locked solved state.

## Features

- Practice puzzles and deterministic daily puzzles.
- Backtrack tracking and flawless-run sharing.
- First-run tutorial plus a manual `How to play` entry point.
- Persisted completion records, best scores, and daily streaks.
- Locked solved boards for already-completed zips.
- Static web routing support for Vercel.

## Stack

- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- React Native
- AsyncStorage for local persistence
- Jest with `jest-expo` for unit tests

## Project Structure

```text
app/                  Screens and routing
components/zip/       Game UI layers and modal components
game/                 Generator, logic, puzzle data, persistence, tests
hooks/                Game session state
.github/workflows/    CI
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the Expo dev server:

```bash
npm run start
```

Useful targets:

```bash
npm run ios
npm run android
npm run web
```

## Testing

Run the unit test suite:

```bash
npm test -- --runInBand
```

Watch mode:

```bash
npm run test:watch
```

Typecheck:

```bash
npm run typecheck
```

Lint:

```bash
npm run lint
```

## What The Tests Cover

The current test suite focuses on the pure game layer in [`game/`](/Users/tum/programming/personal/zip/game):

- deterministic puzzle generation
- generated puzzle solvability
- solution validity against walls and checkpoints
- checkpoint spacing and ordering
- hint legality
- next-checkpoint progression
- basic “fun” heuristics so generated boards are not too flat or repetitive

Relevant files:

- [game/generator.test.ts](/Users/tum/programming/personal/zip/game/generator.test.ts:1)
- [game/logic.test.ts](/Users/tum/programming/personal/zip/game/logic.test.ts:1)

## CI

GitHub Actions runs on pushes to `main` and on pull requests via [`.github/workflows/ci.yml`](/Users/tum/programming/personal/zip/.github/workflows/ci.yml:1).

It executes:

- `npm ci`
- `npm run typecheck`
- `npm run lint`
- `npm test -- --runInBand`

## Web Deployment

The app is configured for Expo static web output in [app.json](/Users/tum/programming/personal/zip/app.json:1), and [vercel.json](/Users/tum/programming/personal/zip/vercel.json:1) adds:

- redirects from `/index` and `/index.html` to `/`
- a catch-all rewrite to `/index.html` for Expo Router routes

## Core Files

- [app/index.tsx](/Users/tum/programming/personal/zip/app/index.tsx:1): home screen and puzzle entry points
- [app/game.tsx](/Users/tum/programming/personal/zip/app/game.tsx:1): active puzzle screen
- [hooks/useZipGame.ts](/Users/tum/programming/personal/zip/hooks/useZipGame.ts:1): session state, timer, win detection, backtracks
- [game/generator.ts](/Users/tum/programming/personal/zip/game/generator.ts:1): deterministic puzzle generation
- [game/logic.ts](/Users/tum/programming/personal/zip/game/logic.ts:1): pure rule validation
- [game/storage.ts](/Users/tum/programming/personal/zip/game/storage.ts:1): persisted progress and tutorial state

## Notes

- Daily puzzles are deterministic by date.
- Practice puzzles are deterministic by seed.
- The canonical solved path is stored on each generated puzzle and is used to reopen completed puzzles in a locked solved state.
