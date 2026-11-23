// make.fun entry: "The standup about the standup".
//
// Writes a single one-line joke about office life to /output/entry.txt.
// Deterministic, stdlib only, no network. Node 22+ (runs its TypeScript
// as it is).

// Beat 1: the standup confession — I arrived with nothing blocking me.
// Beat 2: the meeting about my blockers turned out to BE the blocker,
// and the "fix" is the punchline: the only action item is another meeting.
const JOKE =
  "I came to standup with no blockers, then spent forty minutes proving the meeting about my blockers was my blocker — 'action item: book another meeting.'";

import { mkdirSync, writeFileSync } from "node:fs";

function main(): void {
  // The entry must be exactly one line, 1-199 characters.
  if (JOKE.includes("\n") || JOKE.length < 1 || JOKE.length > 199) {
    throw new Error("joke must be one line, 1-199 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE, "utf-8");
}

main();
