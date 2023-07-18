import {connectDB} from '@/util/database';

// export default async function handler(req, res) {

//     res.json(result);
// }

export default async function handler(req, res) {
    const db = (await connectDB).db('forum');
    const result = await db.collection('post').find().toArray();

    if (req.method === 'POST') {
        res.status(200).json({message: 'Hello from the API2222222'});
    } else {
        res.status(200).json({message: new Date().toLocaleString()});
    }
}
