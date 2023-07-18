import {connectDB} from '@/util/database';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (!req.body.title && !req.body.content) {
            return res.status(400).json({message: 'No title or content'});
        }

        try {
            const db = (await connectDB).db('forum');
            const result = await db.collection('post').insertOne({title: req.body.title, content: req.body.content});

            return res.redirect(302, '/list');
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DB error', e});
        }
    } else if (req.method === 'GET') {
        const db = (await connectDB).db('forum');
        const result = await db.collection('post').find().toArray();

        return res.json(result);
    }
}
