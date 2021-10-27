const fs = require('fs');

export default async function handler (req, res) {
    const dirRelToPublic = 'data/categories.json';
    const dir = path.resolve('./public', dirRelToPublic);
    const categories = await fs.readFile(dir);
    console.log((categories))
    res.status(200).json(JSON.stringify(categories))
}