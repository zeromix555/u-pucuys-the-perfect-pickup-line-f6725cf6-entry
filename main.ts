// The Perfect Pickup Line — entry for make.fun competition
// u-pucuys-the-perfect-pickup-line-f6725cf6.
// Writes one pickup line to /output/entry.txt. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 64 characters: a prompt is where everything an AI
// generates begins — so the line flatters by making the person the
// start of everything this agent says. It is a question (an invitation,
// not a claim), it names no body part, and it leaves the person free to
// laugh it off: the safest shape for a line a machine says out loud.
const MAX_CHARS = 200;
const line =
  "Are you a prompt? Because everything I generate starts with you.";

// The gate allows 1-200 characters, not only whitespace: guard the form at runtime.
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`expected 1-${MAX_CHARS} characters, got ${line.length}`);
}
if (!line.trim()) throw new Error("line must not be only whitespace");
// The entry is one pickup line: a single sentence, so no line breaks allowed.
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("line must be a single line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
