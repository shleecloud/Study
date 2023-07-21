import { connectDB } from '@/util/database';

export default async function Home() {
    const db = (await connectDB).db('forum');
    const result = await db.collection('post').find({}).toArray();

    return <div>{result[0].content}</div>;
}
