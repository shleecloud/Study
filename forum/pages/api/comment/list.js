import {ObjectId} from 'mongodb';
import {connectDB} from '@/util/database';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const parent = new ObjectId(req.query.parent);
        const db = (await connectDB).db('forum');
        const result = await db.collection('comment').find({parent}).toArray();
        return res.status(200).json(result);
    }
}
