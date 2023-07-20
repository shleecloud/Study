import {connectDB} from '@/util/database';
import {ObjectId} from 'mongodb';
import Comment from '@/app/detail/[id]/Comment';

export default async function Detail(props) {
    const postId = props.params?.id;
    const isValidId = ObjectId.isValid(postId);

    const db = (await connectDB).db('forum');
    const postContent = isValidId ? await db.collection('post').findOne({_id: new ObjectId(postId)}) : {};

    return (
        <div className="detail-bg">
            <h4>Detail</h4>
            <h4>{postContent?.title}</h4>
            <p>{postContent?.content}</p>
            <Comment parent={postId} />
        </div>
    );
}
