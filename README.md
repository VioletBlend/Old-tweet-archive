<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:
=======
# X Fun - Clean X/Twitter and YouTube Viewer

## The Story

As a parent, I often discover fascinating posts on X (formerly Twitter) that I bookmark to share with my child. However, sharing these posts through my phone presents a challenge: the X app is cluttered with distracting content and interface elements that detract from the core content I want to share.

This led me to create a dedicated X/Twitter List Viewer. Instead of navigating the busy X interface, I can now curate interesting posts by collecting their URLs in a simple text file, then display them through this clean, focused website. The result is a distraction-free viewing experience that's actually better than browsing X.com directly — perfect for sharing educational, entertaining, or inspiring content with children without the noise of a full social media platform.

You can also join the discussion about this project on [reddit](https://www.reddit.com/r/selfhosted/comments/1mc8od3/xtwitter_list_viewer_clean_way_to_share_curated/).

## Features

- **Clean Interface**: Displays X/Twitter posts and YouTube videos without distracting elements
- **Multi-platform Support**: Handles content from both X/Twitter and YouTube.
- **Multi-format Support**: Handles text, images, videos, and mixed content from X/Twitter.
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Direct Media Playback**: Videos play directly without redirects to X.com or YouTube.
- **Expandable Images**: Click any photo to view it full-size
- **URL Flexibility**: Supports `twitter.com`, `x.com`, and `youtube.com` URLs.
- **Kid-friendly**: Designed for young viewers, fostering curiosity without distractions
- **Progressive Web App (PWA)**: Install as an app on your device for native-like experience
- **Offline Support**: View previously loaded posts even without internet connection
- **Self-hosting Friendly**: Easy to deploy on your own server or hosting platform
- **Privacy-focused**: All requests are sent from your browser — the hosting server never sees your lists

## How to Use

### Quick Start

1. Visit [xfun.p0n1.xyz](https://xfun.p0n1.xyz) and try the default demo posts
2. Click "Try Examples" to explore curated demo lists

### Custom Lists

1. Create a plain text file with X/Twitter or YouTube URLs (one per line)
2. Upload to a publicly accessible location:
   - **GitHub**: Create public repo → Upload .txt file → Copy raw URL
   - **GitHub Gist**: Create public gist → Copy raw URL
   - **Pastebin**: Create public paste → Use paste URL
3. Click the "Custom List" button on the website
4. Paste your URL and click "Load List"

### Troubleshooting CORS Issues

Some hosting services may block cross-origin requests (CORS). If your list fails to load:

1. **Test CORS support** at [cors-test.codehappy.dev](https://cors-test.codehappy.dev) with your URL
2. **Use GitHub** (recommended) — always supports CORS for raw URLs
3. **Pastebin URLs** are automatically handled with a CORS proxy

### Supported URL Formats

The viewer supports both X/Twitter and YouTube URLs.

**X/Twitter URLs**
```
https://x.com/username/status/1234567890
https://twitter.com/username/status/1234567890 # Comments are allowed after URLs
https://x.com/SpaceX/status/1949680387330027593
https://x.com/SpaceX/status/1949993416604951017 #starship
https://x.com/SpaceX/status/1949605880863047750 #falcon9
```
The viewer automatically handles both `twitter.com` and `x.com` URLs and fetches content using the [FxEmbed API](https://api.fxtwitter.com).

**YouTube URLs**
```
https://www.youtube.com/watch?v=AZ7AcvbebKo
https://youtu.be/2R8V68viXqk # Comments are also allowed
```

## Local Development

To run the project locally:
>>>>>>> 6d8c2a5b4716c4e1ec28fd841fb832a75ffd5ae6

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<<<<<<< HEAD
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
## Technical Details

- **Framework**: Built with [Next.js](https://nextjs.org) for optimal performance
- **PWA**: Progressive Web App support with [Serwist](https://serwist.pages.dev) for offline functionality and app installation
- **API**: Uses [FxEmbed API](https://api.fxtwitter.com) for X/Twitter content — no API keys required
- **Styling**: System font stack for consistent, fast-loading typography
- **Architecture**: Client-side only (server serves static files for simplicity)
- **Self-hosting**: Can be easily deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.)
>>>>>>> 6d8c2a5b4716c4e1ec28fd841fb832a75ffd5ae6
