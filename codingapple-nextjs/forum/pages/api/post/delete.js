import {ObjectId} from 'mongodb';
import {connectDB} from '@/util/database';
import {authOptions} from '@/pages/api/auth/[...nextauth]';
import {getServerSession} from 'next-auth';

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const id = req.query.id;
        if (!id) {
            res.status(400).send('필수값이 없습니다.');
            return;
        }

        // login check
        const session = await getServerSession(req, res, authOptions);
        if (!session) {
            return res.status(401).send('로그인이 필요합니다.');
        }

        // delete
        try {
            const db = (await connectDB).db('forum');
            const result = await db.collection('post').deleteOne({
                $and: [{author: session?.user.email}, {_id: new ObjectId(id)}],
            });
        } catch (e) {
            console.log(e);
            res.status(500).send('DB 에러');
            return;
        }

        return res.status(200).send('삭제되었습니다.');
    }
}
