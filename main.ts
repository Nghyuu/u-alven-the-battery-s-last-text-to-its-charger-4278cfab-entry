import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line = "waited all day next to the outlet while you watched videos ON me. 1% left. i'm breaking up with you. there's another charger now. he's 65W.";

if (line.length === 0 || line.length > 200 || line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry line must be a single non-empty line of at most 200 characters");
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
