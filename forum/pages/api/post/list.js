import {connectDB} from '@/util/database';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/pages/api/auth/[...nextauth]';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (!req.body.title && !req.body.content) {
            return res.status(400).json({message: 'No title or content'});
        }

        // login
        const session = await getServerSession(req, res, authOptions);
        if (session) {
            req.body.author = session?.user.email;
        } else {
            return res.status(401).json({message: 'Unauthorized'});
        }

        // write to db
        try {
            const db = (await connectDB).db('forum');
            const result = await db.collection('post').insertOne(req.body);

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
