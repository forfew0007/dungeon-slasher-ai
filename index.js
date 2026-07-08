// Fetches all game-data endpoints and combines them into a single JSON file
// (game-data.json). That file is what you upload/paste to an AI assistant
// so it has full context on your game's data when helping you out.

const sources = [
    { name: 'source_1', url: 'https://api.npoint.io/6b12bd1d8c4b6d6aec04' },
    { name: 'source_2', url: 'https://api.npoint.io/5795d2499dbc3280d3ea' },
    { name: 'source_3', url: 'https://api.npoint.io/6a36a9123d3feb528be6' },
    { name: 'source_4', url: 'https://api.npoint.io/78e09175744ac42b8a3d' },
    { name: 'source_5', url: 'https://api.npoint.io/19b909cd804e6810ee08' },
    { name: 'source_6', url: 'https://api.npoint.io/a96991216ce0de15aed6' },
    { name: 'source_7', url: 'https://api.npoint.io/d1e840f37e2e821696e9' },
    { name: 'source_8', url: 'https://api.npoint.io/1ddabf7684dd4377fffb' }
];

const fs = require('fs');

async function main() {
    const combined = {};

    for (const { name, url } of sources) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            const data = await response.json();
            combined[name] = data;
            console.log(`✔ ${name} (${url}) — fetched OK`);
        } catch (err) {
            console.error(`✘ ${name} (${url}) — failed: ${err.message}`);
            combined[name] = { error: err.message, url };
        }
    }

    // NOTE: rename the "source_N" keys above to something descriptive
    // (e.g. "monsters", "items", "skills") once you know what each
    // endpoint actually contains — makes the output much easier for
    // an AI (or you) to read later.

    fs.writeFileSync('game-data.json', JSON.stringify(combined, null, 2));
    console.log('\nSaved combined data to game-data.json');
}

main();
