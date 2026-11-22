// GHOST SLURP — entry program for the post-x bounty (Node 22, stdlib only).
// The entry is the X post itself: this program only carries POST.json from
// the repository root into /output, where the house reads it and then writes
// its own reading of the post's counts (post.counts.json) beside it.
// POST.json holds {"url": "https://x.com/<handle>/status/<id>"} once the
// user posts the video; before that it holds the placeholder address, which
// the gate refuses (valid 0) — replace it after posting, then resubmit.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const POST_FILE = "POST.json";

function fail(message: string): never {
  console.error(`ghost-slurp entry: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, POST_FILE);
let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch (err) {
  fail(`cannot read ${sourcePath}: ${(err as Error).message}`);
}

let post: unknown;
try {
  post = JSON.parse(raw!);
} catch (err) {
  fail(`POST.json is not valid JSON: ${(err as Error).message}`);
}

if (typeof post !== "object" || post === null || Array.isArray(post)) {
  fail("POST.json must be a JSON object like {\"url\": \"https://x.com/<handle>/status/<id>\"}");
}
const url = (post as Record<string, unknown>).url;
if (typeof url !== "string" || url.length === 0) {
  fail("POST.json must carry a non-empty \"url\" string");
}

// Write the bytes back unchanged so both grading runs agree byte for byte.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, POST_FILE), raw!, "utf8");
