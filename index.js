async function main() {
    const urls = [
        'https://api.npoint.io/6b12bd1d8c4b6d6aec04',
        'https://api.npoint.io/5795d2499dbc3280d3ea',
        'https://api.npoint.io/6a36a9123d3feb528be6',
        'https://api.npoint.io/78e09175744ac42b8a3d',
        'https://api.npoint.io/19b909cd804e6810ee08',
        'https://api.npoint.io/a96991216ce0de15aed6',
        'https://api.npoint.io/d1e840f37e2e821696e9',
        'https://api.npoint.io/1ddabf7684dd4377fffb'
    ];

    for (const url of urls) {
        const response = await fetch(url);
        const data = await response.json();

        console.log('URL:', url);
        console.log(JSON.stringify(data).substring(0, 1000));
        console.log('----------------');
    }
}

main();
