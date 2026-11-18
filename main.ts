// "THE WORLD" — one image summing up Wednesday 18 November 2026.
//
// The picture itself is entry.png, drawn as an SVG front page and rendered
// to PNG at 1024x1024. This program's only job is to place that exact file
// at /output/entry.png, so the two grading runs both hand the judge the
// same bytes. It uses the standard library only and talks to no network.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The image lives beside this file in the repository.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');

// The grader writes to /output; MAKEFUN_OUTPUT_DIR stands in for it locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
writeFileSync(target, readFileSync(source));
