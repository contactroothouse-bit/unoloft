# GA4 Setup

## 1) Add environment variable
Create or update `.env.local` with:

`NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

Use your real GA4 Measurement ID from Google Analytics.

## 2) Restart the app
After adding the env variable, restart the Next.js server:

`npm run dev`

## 3) Verify tracking
- Open your website in browser.
- Open GA4 `Realtime` report.
- Navigate between multiple pages (for example `/`, `/rooms`, `/contact`).
- Confirm realtime page views are visible.

## Notes
- GA loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is present.
- Integration is wired for App Router route-change pageview tracking.
