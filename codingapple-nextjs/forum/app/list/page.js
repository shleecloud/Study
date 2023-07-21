import {connectDB} from '@/util/database';
import ListItem from '@/app/list/ListItem';

export const dynamic = 'force-dynamic';

export default async function List() {
    const db = (await connectDB).db('forum');
    const result = await db.collection('post').find().toArray();

    const items = result.map((item) => {
        return {...item, _id: item._id.toString()};
    });

    return (
        <div className="list-bg">
            <ListItem items={items} />
        </div>
    );
}
