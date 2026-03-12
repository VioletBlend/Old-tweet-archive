"use client";

import React, { useState } from "react";

type FxEmbedTweet = {
  url: string;
  html: string;
};

export default function Home() {
  const [listUrl, setListUrl] = useState("");
  const [tweets, setTweets] = useState<FxEmbedTweet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadList = async () => {
    setError(null);
    setLoading(true);
    setTweets([]);

    try {
      // 1. テキストファイルを取得
      const res = await fetch(listUrl);
      if (!res.ok) throw new Error("リストの取得に失敗しました");
      const text = await res.text();

      // 2. 行ごとに URL を抽出（コメント # 対応）
      const urls = text
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#"))
        .map((line) => line.split("#")[0].trim());

      // 3. FxEmbed API で埋め込み HTML を取得
      const results: FxEmbedTweet[] = [];
      for (const url of urls) {
        const apiUrl = `https://api.fxtwitter.com/oembed?url=${encodeURIComponent(
          url
        )}`;
        const r = await fetch(apiUrl);
        if (!r.ok) continue;
        const data = await r.json();
        results.push({ url, html: data.html });
      }

      setTweets(results);
    } catch (e: any) {
      setError(e.message ?? "エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "16px" }}>
      <h1>Mini xfun Viewer</h1>

      <div style={{ marginBottom: 16 }}>
        <input
          type="url"
          value={listUrl}
          onChange={(e) => setListUrl(e.target.value)}
          placeholder="https://raw.githubusercontent.com/.../list.txt"
          style={{ width: "100%", padding: 8 }}
        />
        <button
          onClick={handleLoadList}
          disabled={loading || !listUrl}
          style={{ marginTop: 8, padding: "8px 16px" }}
        >
          {loading ? "読み込み中..." : "読み込む"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>エラー: {error}</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {tweets.map((t) => (
          <article
            key={t.url}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 12,
              background: "#fff",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: t.html }} />
          </article>
        ))}
      </div>
    </main>
  );
}
