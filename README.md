# Naruto Extractor (Render Deployment)

An anime streaming platform for Naruto content.

## Deployment on Render

1. Create a new **Web Service** on Render
2. Connect your GitHub repository
3. Set these configuration values:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Add any required environment variables
5. Deploy!

## Local Development

1. Clone this repo
2. Install dependencies: `npm install`
3. Start server: `npm run dev`
4. Access at `http://localhost:3000`

## Environment Variables

None required by default, but you may need to add:
- `PORT` (optional)