import {connectDB} from '@/util/database';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/pages/api/auth/[...nextauth]';
import {ObjectId} from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // check body
        if (
            !req.body.title && //
            !req.body.content &&
            !req.body.parent &&
            !ObjectId.isValid(req.body.parent)
        ) {
            return res.status(400).json({message: 'Invalid request body'});
        }

        // login check & add author
        const session = await getServerSession(req, res, authOptions);
        if (session) {
            req.body.author = session?.user.email;
        } else {
            return res.status(401).json({message: 'Unauthorized'});
        }

        const db = (await connectDB).db('forum');
        // check parent
        req.body.parent = new ObjectId(req.body.parent);
        const parent = await db.collection('post').findOne({_id: req.body.parent});
        if (!parent) {
            return res.status(400).json({message: 'Invalid parent'});
        }

        // write to db
        try {
            const result = await db.collection('comment').insertOne(req.body);

            return res.status(201).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DB error', e});
        }
    }
}
