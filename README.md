# dungeon-slasher-ai

Fetches Dungeon Slasher game data from its data endpoints and combines
everything into a single `game-data.json` file. Upload that file to an
AI assistant (like Claude) to get help with builds, strategy, item
lookups, etc. — the AI can read the whole game database at once
instead of you copy-pasting info manually.

## Usage

```bash
npm install   # no dependencies needed currently, but keeps things future-proof
node index.js
```

This creates `game-data.json` in the project root.

## Running via GitHub Actions

Go to the **Actions** tab → **Dungeon Slasher AI - Fetch Data** →
**Run workflow**. Once it finishes, download the `game-data` artifact
from the run summary page.

## TODO

- Rename the `source_1`, `source_2`, ... keys in `index.js` to
  descriptive names (e.g. `monsters`, `items`, `skills`) once you know
  what each endpoint contains.
