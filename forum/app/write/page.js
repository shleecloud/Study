import {useState} from 'react';

export default function Write() {
    let [src, setSrc] = useState('');
    const handleUploadImageToS3 = async (e) => {
        let file = e.target.files[0];
        let filename = encodeURIComponent(file.name);
        let res = await fetch('/api/post/image?file=' + filename);
        res = await res.json();

        //S3 업로드
        const formData = new FormData();
        Object.entries({...res.fields, file}).forEach(([key, value]) => {
            formData.append(key, value);
        });
        let 업로드결과 = await fetch(res.url, {
            method: 'POST',
            body: formData,
        });
        console.log(업로드결과);

        if (업로드결과.ok) {
            setSrc(업로드결과.url + '/' + filename);
        } else {
            console.log('실패');
        }
    };

    return (
        <div className="p-20">
            <h4>Write</h4>
            <form action={`/api/post/list`} method="POST">
                <input name="title" placeholder="제목" />
                <input name="content" placeholder="내용" />
                <input name="image" type="file" accept="image/*" onChange={handleUploadImageToS3} />
                <img alt="image" src={src} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
