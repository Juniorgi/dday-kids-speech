import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const outFile = join(root, "share", "dday-kids-speech-mobile-preview.html");

let html = await readFile(join(dist, "index.html"), "utf8");

const cssMatches = [...html.matchAll(/<link rel="stylesheet" crossorigin href="([^"]+)">/g)];
for (const match of cssMatches) {
  const href = match[1].replace(/^\.\//, "");
  const css = await readFile(join(dist, href), "utf8");
  html = html.replace(match[0], `<style>\n${css}\n</style>`);
}

const jsMatches = [...html.matchAll(/<script type="module" crossorigin src="([^"]+)"><\/script>/g)];
for (const match of jsMatches) {
  const src = match[1].replace(/^\.\//, "");
  const js = await readFile(join(dist, src), "utf8");
  html = html.replace(match[0], `<script type="module">\n${js}\n</script>`);
}

await mkdir(dirname(outFile), { recursive: true });
await writeFile(outFile, html, "utf8");

console.log(`Created ${outFile}`);
