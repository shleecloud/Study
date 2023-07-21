import {connectDB} from '@/util/database';
import {ObjectId} from 'mongodb';

export default async function Edit(props) {
    const db = (await connectDB).db('forum');
    const result = await db.collection('post').findOne({_id: new ObjectId(props.params?.id)});

    return (
        <div className="p-20">
            <h4>Edit</h4>
            <form action={`/api/post/edit`} method="POST">
                <input name="title" placeholder="제목" defaultValue={result?.title} />
                <input name="content" placeholder="내용" defaultValue={result?.content} />
                <input name="id" value={props.params?.id} type="hidden" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
