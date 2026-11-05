import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve(process.env.PREVIEW_DIRECTORY || "out");
const port = Number(process.env.PORT || 4173);
const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const types = {".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".json":"application/json",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".pdf":"application/pdf",".txt":"text/plain; charset=utf-8",".woff2":"font/woff2"};
createServer(async (req,res) => {
  try {
    let path = decodeURIComponent(new URL(req.url,"http://localhost").pathname);
    if (prefix && path !== prefix && !path.startsWith(prefix + "/")) { res.writeHead(404); res.end("Not found"); return; }
    path = path.slice(prefix.length) || "/";
    let file = resolve(root, "." + path);
    if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403); res.end(); return; }
    if ((await stat(file)).isDirectory()) file = resolve(file,"index.html");
    const data = await readFile(file);
    res.writeHead(200, {"Content-Type":types[extname(file)] || "application/octet-stream"}); res.end(data);
  } catch {
    res.writeHead(404, {"Content-Type":"text/html; charset=utf-8"});
    res.end(await readFile(resolve(root,"404.html")).catch(() => "Not found"));
  }
}).listen(port, "127.0.0.1", () => console.log(`Local: http://localhost:${port}${prefix}/`));
