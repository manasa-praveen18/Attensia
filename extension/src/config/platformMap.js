// productive: true = focus/learning oriented, false = addictive/passive, null = context-dependent
// productive is not yet used in v1 scoring — reserved for v2 intent-aware agency calculation
export const platformMap = {
  // Video
  "youtube.com": { type: "video", interaction: "algorithmic", productive: null },
  "youtu.be": { type: "video", interaction: "algorithmic", productive: null },
  "twitch.tv": { type: "video", interaction: "algorithmic", productive: false },
  "netflix.com": { type: "video", interaction: "curated", productive: false },
  "vimeo.com": { type: "video", interaction: "intent", productive: null },
  "disneyplus.com": { type: "video", interaction: "curated", productive: false },
  "primevideo.com": { type: "video", interaction: "curated", productive: false },

  // Search
  "google.com": { type: "search", interaction: "intent", productive: true },
  "bing.com": { type: "search", interaction: "intent", productive: true },
  "duckduckgo.com": { type: "search", interaction: "intent", productive: true },
  "yahoo.com": { type: "search", interaction: "intent", productive: null },
  "search.yahoo.com": { type: "search", interaction: "intent", productive: null },
  "perplexity.ai": { type: "search", interaction: "intent", productive: true },

  // Social
  "twitter.com": { type: "social", interaction: "algorithmic", productive: false },
  "x.com": { type: "social", interaction: "algorithmic", productive: false },
  "instagram.com": { type: "social", interaction: "algorithmic", productive: false },
  "facebook.com": { type: "social", interaction: "algorithmic", productive: false },
  "tiktok.com": { type: "social", interaction: "algorithmic", productive: false },
  "snapchat.com": { type: "social", interaction: "algorithmic", productive: false },
  "pinterest.com": { type: "social", interaction: "algorithmic", productive: false },
  "threads.net": { type: "social", interaction: "algorithmic", productive: false },
  "tumblr.com": { type: "social", interaction: "algorithmic", productive: false },
  "reddit.com": { type: "social", interaction: "algorithmic", productive: null },

  // Knowledge & Reference
  "wikipedia.org": { type: "knowledge", interaction: "reference", productive: true },
  "britannica.com": { type: "knowledge", interaction: "reference", productive: true },
  "wolframalpha.com": { type: "knowledge", interaction: "intent", productive: true },
  "quora.com": { type: "knowledge", interaction: "community", productive: null },
  "coursera.org": { type: "knowledge", interaction: "structured", productive: true },
  "udemy.com": { type: "knowledge", interaction: "structured", productive: true },
  "khanacademy.org": { type: "knowledge", interaction: "structured", productive: true },
  "edx.org": { type: "knowledge", interaction: "structured", productive: true },
  "medium.com": { type: "knowledge", interaction: "editorial", productive: null },
  "substack.com": { type: "knowledge", interaction: "editorial", productive: null },

  // Development
  "github.com": { type: "development", interaction: "documentation", productive: true },
  "gitlab.com": { type: "development", interaction: "documentation", productive: true },
  "stackoverflow.com": { type: "development", interaction: "community", productive: true },
  "developer.mozilla.org": { type: "development", interaction: "reference", productive: true },
  "docs.google.com": { type: "development", interaction: "reference", productive: true },
  "vercel.com": { type: "development", interaction: "intent", productive: true },
  "netlify.com": { type: "development", interaction: "intent", productive: true },
  "replit.com": { type: "development", interaction: "practice", productive: true },
  "codepen.io": { type: "development", interaction: "practice", productive: true },
  "leetcode.com": { type: "development", interaction: "practice", productive: true },
  "hackerrank.com": { type: "development", interaction: "practice", productive: true },
  "codeforces.com": { type: "development", interaction: "practice", productive: true },
  "geeksforgeeks.org": { type: "development", interaction: "reference", productive: true },
  "w3schools.com": { type: "development", interaction: "reference", productive: true },

  // News - International
  "khaleejtimes.com": { type: "news", interaction: "editorial", productive: null },
  "bbc.com": { type: "news", interaction: "editorial", productive: null },
  "cnn.com": { type: "news", interaction: "editorial", productive: null },
  "nytimes.com": { type: "news", interaction: "editorial", productive: null },
  "theguardian.com": { type: "news", interaction: "editorial", productive: null },
  "reuters.com": { type: "news", interaction: "editorial", productive: null },
  "techcrunch.com": { type: "news", interaction: "editorial", productive: null },
  "theverge.com": { type: "news", interaction: "editorial", productive: null },
  "hackernews.com": { type: "news", interaction: "community", productive: null },
  "news.ycombinator.com": { type: "news", interaction: "community", productive: null },
  "npr.org": { type: "news", interaction: "editorial", productive: null },

  // News - Singapore
  "straitstimes.com": { type: "news", interaction: "editorial", productive: null },
  "channelnewsasia.com": { type: "news", interaction: "editorial", productive: null },
  "todayonline.com": { type: "news", interaction: "editorial", productive: null },
  "businesstimes.com.sg": { type: "news", interaction: "editorial", productive: null },
  "mothership.sg": { type: "news", interaction: "editorial", productive: null },
  "asiaone.com": { type: "news", interaction: "editorial", productive: null },
  "zaobao.com.sg": { type: "news", interaction: "editorial", productive: null },

  // Professional
  "linkedin.com": { type: "professional", interaction: "network", productive: true },
  "glassdoor.com": { type: "professional", interaction: "intent", productive: true },
  "indeed.com": { type: "professional", interaction: "intent", productive: true },
  "notion.so": { type: "professional", interaction: "intent", productive: true },
  "sheets.google.com": { type: "professional", interaction: "intent", productive: true },
  "slides.google.com": { type: "professional", interaction: "intent", productive: true },

  // AI Tools
  "chat.openai.com": { type: "ai", interaction: "intent", productive: true },
  "chatgpt.com": { type: "ai", interaction: "intent", productive: true },
  "claude.ai": { type: "ai", interaction: "intent", productive: true },
  "gemini.google.com": { type: "ai", interaction: "intent", productive: true },
  "copilot.microsoft.com": { type: "ai", interaction: "intent", productive: true },

  // Shopping - International
  "amazon.com": { type: "shopping", interaction: "algorithmic", productive: false },
  "ebay.com": { type: "shopping", interaction: "intent", productive: null },
  "etsy.com": { type: "shopping", interaction: "algorithmic", productive: null },

  // Shopping - Singapore & Southeast Asia
  "shopee.sg": { type: "shopping", interaction: "algorithmic", productive: false },
  "shopee.com": { type: "shopping", interaction: "algorithmic", productive: false },
  "lazada.sg": { type: "shopping", interaction: "algorithmic", productive: false },
  "lazada.com": { type: "shopping", interaction: "algorithmic", productive: false },
  "qoo10.sg": { type: "shopping", interaction: "algorithmic", productive: false },
  "carousell.sg": { type: "shopping", interaction: "intent", productive: null },
  "amazon.sg": { type: "shopping", interaction: "algorithmic", productive: false },
  "zalora.com.sg": { type: "shopping", interaction: "algorithmic", productive: false },
  "taobao.com": { type: "shopping", interaction: "algorithmic", productive: false },
  "aliexpress.com": { type: "shopping", interaction: "algorithmic", productive: false },

  // Music & Podcasts
  "spotify.com": { type: "audio", interaction: "algorithmic", productive: null },
  "soundcloud.com": { type: "audio", interaction: "algorithmic", productive: null },
  "podcasts.apple.com": { type: "audio", interaction: "intent", productive: null },
  "music.apple.com": { type: "audio", interaction: "algorithmic", productive: null },
  "tidal.com": { type: "audio", interaction: "intent", productive: null },
  "deezer.com": { type: "audio", interaction: "algorithmic", productive: null },

  // Communication
  "mail.google.com": { type: "communication", interaction: "intent", productive: true },
  "outlook.com": { type: "communication", interaction: "intent", productive: true },
  "accounts.google.com": { type: "communication", interaction: "intent", productive: null },
  "slack.com": { type: "communication", interaction: "intent", productive: true },
  "discord.com": { type: "communication", interaction: "community", productive: null },
  "web.whatsapp.com": { type: "communication", interaction: "intent", productive: null },
  "telegram.org": { type: "communication", interaction: "intent", productive: null },
  "web.telegram.org": { type: "communication", interaction: "intent", productive: null },
  "teams.microsoft.com": { type: "communication", interaction: "intent", productive: true },
  "zoom.us": { type: "communication", interaction: "intent", productive: true },

  // Gaming - Productive
  "chess.com": { type: "gaming", interaction: "intent", productive: true },
  "lichess.org": { type: "gaming", interaction: "intent", productive: true },
  "sudoku.com": { type: "gaming", interaction: "intent", productive: true },
  "web.sudoku.com": { type: "gaming", interaction: "intent", productive: true },
  "crosswordnexus.com": { type: "gaming", interaction: "intent", productive: true },
  "thewordsearch.com": { type: "gaming", interaction: "intent", productive: true },
  "sporcle.com": { type: "gaming", interaction: "intent", productive: true },
  "typeracer.com": { type: "gaming", interaction: "practice", productive: true },
  "monkeytype.com": { type: "gaming", interaction: "practice", productive: true },
  "duolingo.com": { type: "gaming", interaction: "structured", productive: true },
  "brilliant.org": { type: "gaming", interaction: "structured", productive: true },

  // Gaming - Non-Productive
  "store.steampowered.com": { type: "gaming", interaction: "algorithmic", productive: false },
  "miniclip.com": { type: "gaming", interaction: "algorithmic", productive: false },
  "poki.com": { type: "gaming", interaction: "algorithmic", productive: false },
  "addictinggames.com": { type: "gaming", interaction: "algorithmic", productive: false },
  "coolmathgames.com": { type: "gaming", interaction: "intent", productive: null },
  "roblox.com": { type: "gaming", interaction: "algorithmic", productive: false },
  "kongregate.com": { type: "gaming", interaction: "algorithmic", productive: false },
  "friv.com": { type: "gaming", interaction: "algorithmic", productive: false },

  // Singapore - Education
  "ntu.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "nus.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "smu.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "sutd.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "sit.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "suss.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "np.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "sp.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "tp.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "nyp.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "rp.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "e-learning.ntu.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "ntulearn.ntu.edu.sg": { type: "knowledge", interaction: "structured", productive: true },
  "canvas.nus.edu.sg": { type: "knowledge", interaction: "structured", productive: true },

  // Singapore - Government
  "gov.sg": { type: "professional", interaction: "intent", productive: true },
  "singpass.gov.sg": { type: "professional", interaction: "intent", productive: true },
  "cpf.gov.sg": { type: "professional", interaction: "intent", productive: true },
  "iras.gov.sg": { type: "professional", interaction: "intent", productive: true },
  "mom.gov.sg": { type: "professional", interaction: "intent", productive: true },
  "moe.gov.sg": { type: "professional", interaction: "intent", productive: true },
  "hdb.gov.sg": { type: "professional", interaction: "intent", productive: true },
  "lta.gov.sg": { type: "professional", interaction: "intent", productive: true },
  "nparks.gov.sg": { type: "professional", interaction: "intent", productive: null },
  "ica.gov.sg": { type: "professional", interaction: "intent", productive: true },
  "police.gov.sg": { type: "professional", interaction: "intent", productive: true },
  "healthhub.sg": { type: "knowledge", interaction: "reference", productive: true },
  "moh.gov.sg": { type: "knowledge", interaction: "reference", productive: true },

  // Singapore - Finance
  "sgx.com": { type: "professional", interaction: "intent", productive: true },
  "dbs.com.sg": { type: "professional", interaction: "intent", productive: true },
  "ocbc.com": { type: "professional", interaction: "intent", productive: true },
  "uob.com.sg": { type: "professional", interaction: "intent", productive: true },
  "maybank.com.sg": { type: "professional", interaction: "intent", productive: true },
  "citibank.com.sg": { type: "professional", interaction: "intent", productive: true },

  // Singapore - Transport & Local
  "grab.com": { type: "professional", interaction: "intent", productive: null },
  "gothere.sg": { type: "professional", interaction: "intent", productive: true },
  "transitlink.com.sg": { type: "professional", interaction: "intent", productive: true },
  "smrt.com.sg": { type: "professional", interaction: "intent", productive: true },
  "singaporeair.com": { type: "professional", interaction: "intent", productive: null },
  "foodpanda.sg": { type: "shopping", interaction: "intent", productive: null },
  "deliveroo.com.sg": { type: "shopping", interaction: "intent", productive: null },
};