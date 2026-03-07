export const platformMap = {
  // Video
  "youtube.com": { type: "video", interaction: "algorithmic" },
  "youtu.be": { type: "video", interaction: "algorithmic" },
  "twitch.tv": { type: "video", interaction: "algorithmic" },
  "netflix.com": { type: "video", interaction: "curated" },
  "vimeo.com": { type: "video", interaction: "intent" },
  "disneyplus.com": { type: "video", interaction: "curated" },
  "primevideo.com": { type: "video", interaction: "curated" },

  // Search
  "google.com": { type: "search", interaction: "intent" },
  "bing.com": { type: "search", interaction: "intent" },
  "duckduckgo.com": { type: "search", interaction: "intent" },
  "yahoo.com": { type: "search", interaction: "intent" },
  "search.yahoo.com": { type: "search", interaction: "intent" },
  "perplexity.ai": { type: "search", interaction: "intent" },

  // Social
  "twitter.com": { type: "social", interaction: "algorithmic" },
  "x.com": { type: "social", interaction: "algorithmic" },
  "instagram.com": { type: "social", interaction: "algorithmic" },
  "facebook.com": { type: "social", interaction: "algorithmic" },
  "tiktok.com": { type: "social", interaction: "algorithmic" },
  "snapchat.com": { type: "social", interaction: "algorithmic" },
  "pinterest.com": { type: "social", interaction: "algorithmic" },
  "threads.net": { type: "social", interaction: "algorithmic" },
  "tumblr.com": { type: "social", interaction: "algorithmic" },

  // Knowledge & Reference
  "wikipedia.org": { type: "knowledge", interaction: "reference" },
  "britannica.com": { type: "knowledge", interaction: "reference" },
  "wolframalpha.com": { type: "knowledge", interaction: "intent" },
  "quora.com": { type: "knowledge", interaction: "community" },
  "coursera.org": { type: "knowledge", interaction: "structured" },
  "udemy.com": { type: "knowledge", interaction: "structured" },
  "khanacademy.org": { type: "knowledge", interaction: "structured" },
  "edx.org": { type: "knowledge", interaction: "structured" },
  "medium.com": { type: "knowledge", interaction: "editorial" },
  "substack.com": { type: "knowledge", interaction: "editorial" },

  // Development
  "github.com": { type: "development", interaction: "documentation" },
  "gitlab.com": { type: "development", interaction: "documentation" },
  "stackoverflow.com": { type: "development", interaction: "community" },
  "developer.mozilla.org": { type: "development", interaction: "reference" },
  "docs.google.com": { type: "development", interaction: "reference" },
  "vercel.com": { type: "development", interaction: "intent" },
  "netlify.com": { type: "development", interaction: "intent" },
  "replit.com": { type: "development", interaction: "practice" },
  "codepen.io": { type: "development", interaction: "practice" },
  "leetcode.com": { type: "development", interaction: "practice" },
  "hackerrank.com": { type: "development", interaction: "practice" },
  "codeforces.com": { type: "development", interaction: "practice" },

  // News
  "khaleejtimes.com": { type: "news", interaction: "editorial" },
  "bbc.com": { type: "news", interaction: "editorial" },
  "cnn.com": { type: "news", interaction: "editorial" },
  "nytimes.com": { type: "news", interaction: "editorial" },
  "theguardian.com": { type: "news", interaction: "editorial" },
  "reuters.com": { type: "news", interaction: "editorial" },
  "techcrunch.com": { type: "news", interaction: "editorial" },
  "theverge.com": { type: "news", interaction: "editorial" },
  "hackernews.com": { type: "news", interaction: "community" },
  "news.ycombinator.com": { type: "news", interaction: "community" },
  "npr.org": { type: "news", interaction: "editorial" },

  // Professional
  "linkedin.com": { type: "professional", interaction: "network" },
  "glassdoor.com": { type: "professional", interaction: "intent" },
  "indeed.com": { type: "professional", interaction: "intent" },
  "notion.so": { type: "professional", interaction: "intent" },
  "docs.google.com": { type: "professional", interaction: "intent" },
  "sheets.google.com": { type: "professional", interaction: "intent" },
  "slides.google.com": { type: "professional", interaction: "intent" },

  // AI Tools
  "chat.openai.com": { type: "ai", interaction: "intent" },
  "chatgpt.com": { type: "ai", interaction: "intent" },
  "claude.ai": { type: "ai", interaction: "intent" },
  "gemini.google.com": { type: "ai", interaction: "intent" },
  "copilot.microsoft.com": { type: "ai", interaction: "intent" },

  // Shopping
  "amazon.com": { type: "shopping", interaction: "algorithmic" },
  "ebay.com": { type: "shopping", interaction: "intent" },
  "etsy.com": { type: "shopping", interaction: "algorithmic" },

  // Music & Podcasts
  "spotify.com": { type: "audio", interaction: "algorithmic" },
  "soundcloud.com": { type: "audio", interaction: "algorithmic" },
  "podcasts.apple.com": { type: "audio", interaction: "intent" },

  // Communication
  "mail.google.com": { type: "communication", interaction: "intent" },
  "outlook.com": { type: "communication", interaction: "intent" },
  "accounts.google.com": { type: "communication", interaction: "intent" },
  "slack.com": { type: "communication", interaction: "intent" },
  "discord.com": { type: "communication", interaction: "community" },
  "web.whatsapp.com": { type: "communication", interaction: "intent" },
};