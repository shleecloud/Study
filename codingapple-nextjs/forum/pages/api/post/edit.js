import {connectDB} from '@/util/database';
import {ObjectId} from 'mongodb';
import {authOptions} from '@/pages/api/auth/[...nextauth]';
import {getServerSession} from 'next-auth';

// 함수 이름은 handler 여야만 한다. 다르면 안됨! (Next.js의 규칙)
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {title, content, id} = req.body;
        if (!title || !content) {
            res.status(400).send('필수값이 없습니다.');
            return;
        }

        // login check
        const session = await getServerSession(req, res, authOptions);
        if (!session) {
            return res.status(401).send('로그인이 필요합니다.');
        }

        // update
        const db = (await connectDB).db('forum');
        const result = await db
            .collection('post')
            .updateOne({$and: [{_id: new ObjectId(id)}, {author: session?.user.email}]}, {$set: {title, content}});

        // 완료되면 list 페이지로 이동
        /**
         export type NextApiResponse<Data = any> = ServerResponse & {
         * Send data `any` data in response
        send: Send<Data>;
        json: Send<Data>;
        status: (statusCode: number) => NextApiResponse<Data>;
        redirect(url: string): NextApiResponse<Data>;
        redirect(status: number, url: string): NextApiResponse<Data>;
         */
        return res.redirect(302, '/list');
    }
}
