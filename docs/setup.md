# Setup guide

## Step 1 — Install the flow from UPLIZD Marketplace

1. Open **[Meeting Scheduler Agent](https://uplizd.ai/marketplace/meeting-scheduler-agent)** on the Marketplace.
2. Click **Install** and open the flow in your workspace.
3. Copy **Flow ID** from the browser URL (`…/flow/<FLOW_ID>`).
4. Under **Settings → API Keys**, copy your UPLIZD API key.
5. In the canvas, connect:
   - **Text inputs** → prompt template `{agent} {rules}` → **Agent Instructions**
   - **Chat Input** → Agent **Input**
   - Composio toolkits: **Cal.com**, **Gmail**, **Google Calendar**, **HubSpot**
   - Model: **gpt-4o-mini**
6. Enable Gmail actions such as send / draft and Calendar create / list / update as in your template.

## Step 2 — `.env`

```bash
cp .env.example .env
```

```bash
UPLIZD_API_KEY=your_actual_api_key
UPLIZD_FLOW_ID=your_actual_flow_id
```

## Step 3 — Run

```bash
npm run install:all
npm run dev
```

## Step 4 — Verify proxy

```bash
curl http://localhost:3001/health
```

## Step 5 — App

**http://localhost:5173**

---

## Production

- `cd web && npm run build` → deploy `web/dist/`
- Deploy `server/` with the same environment variables.

Do not expose `UPLIZD_API_KEY` in static frontends.
