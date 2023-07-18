import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function Detail(props) {
    const isValidId = ObjectId.isValid(props.params?.id)
    const db = (await connectDB).db('forum');
    const result = isValidId ? await db.collection('post').findOne({_id: new ObjectId(props.params?.id)}) : {}


    return (
        <div className="detail-bg">
            <h4>Detail</h4>
            <h4>{result?.title}</h4>
            <p>{result?.content}</p>
        </div>
    );
}
