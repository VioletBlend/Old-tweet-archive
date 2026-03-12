import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "posts.txt");
  const raw = fs.readFileSync(filePath, "utf8");

  const urls = raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const ids = urls
    .map((url) => {
      const m = url.match(/status\/(\d+)/);
      return m ? m[1] : null;
    })
    .filter(Boolean);

  const limit = 10;
  const cursor = parseInt(req.query.cursor || "0", 10);

  const slice = ids.slice(cursor, cursor + limit);

  res.status(200).json({
    tweets: slice,
    nextCursor: cursor + slice.length,
    hasMore: cursor + slice.length < ids.length
  });
}
