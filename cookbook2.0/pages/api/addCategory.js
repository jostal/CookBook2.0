const fs = require('fs');
const filepath = '../../data/categories.json'

export default async function handler (req, res) {
    console.log(req);
    if (req.method === 'POST') {
        fs.appendFileSync(filepath, JSON.stringify(req.body))
        return res.status(200).json({});
    }
}