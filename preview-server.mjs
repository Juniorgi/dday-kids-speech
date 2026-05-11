import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { networkInterfaces } from "node:os";

const root = join(process.cwd(), "dist");
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const safePath = normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
    const filePath = join(root, safePath === "/" ? "index.html" : safePath);
    const data = await readFile(filePath);

    res.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    const fallback = await readFile(join(root, "index.html"));
    res.writeHead(200, { "Content-Type": contentTypes[".html"] });
    res.end(fallback);
  }
}).listen(port, "0.0.0.0", () => {
  const addresses = Object.values(networkInterfaces())
    .flat()
    .filter((item) => item && item.family === "IPv4" && !item.internal)
    .map((item) => `http://${item.address}:${port}`);

  console.log(`Preview is running at http://127.0.0.1:${port}`);
  if (addresses.length) {
    console.log("Mobile devices on the same Wi-Fi can open:");
    addresses.forEach((address) => console.log(`  ${address}`));
  }
});
