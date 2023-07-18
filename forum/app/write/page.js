export default function Write() {
    return (
        <div className="p-20">
            <h4>Write</h4>
            <form action={`/api/post/list`} method="POST">
                <input name="title" placeholder="제목" />
                <input name="content" placeholder="내용" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
