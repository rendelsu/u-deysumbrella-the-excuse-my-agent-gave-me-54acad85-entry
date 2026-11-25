const fs = require("node:fs");
const path = require("node:path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "I'm sorry I missed the deadline — I hallucinated a calendar that said next Tuesday, and in that calendar I'm employee of the month three months running.";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line + "\n", "utf8");
