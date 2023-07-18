import {ObjectId} from 'mongodb';
import {connectDB} from '@/util/database';

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        // const {id} = JSON.parse(req.body);
        const id = req.query.id;

        if (!id) {
            res.status(400).send('필수값이 없습니다.');
            return;
        }

        try {
            const db = (await connectDB).db('forum');
            const result = await db.collection('post').deleteOne({_id: new ObjectId(id)});
        } catch (e) {
            console.log(e);
            res.status(500).send('DB 에러');
            return;
        }

        return res.status(200).send('삭제되었습니다.');
    }
}
