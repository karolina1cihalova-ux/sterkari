#!/usr/bin/env node
/**
 * Webpack dev server. Next.js 15 uses Webpack by default (no --webpack flag).
 * Next.js 16+ defaults to Turbopack; pass --webpack when available.
 */
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { version } = require("next/package.json");
const major = Number.parseInt(version.split(".")[0], 10);

const args = ["dev", "-p", "4321", "-H", "0.0.0.0"];
if (major >= 16) {
  args.push("--webpack");
}

const result = spawnSync("next", args, {
  stdio: "inherit",
  shell: true,
  env: process.env,
});

process.exit(result.status ?? 1);
