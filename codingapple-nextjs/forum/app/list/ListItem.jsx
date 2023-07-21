'use client';

import Link from 'next/link';

export default function ListItem({items = []}) {
    const handleDeletePost = async (e, id) => {
        const response = await fetch(`/api/post/delete?id=${id}`, {
            method: 'DELETE',
            // body: JSON.stringify({id}),
        });
        if (response.ok) {
            console.log(response);
            e.target.parentElement.style.opacity = 0;
            setTimeout(() => {
                e.target.parentElement.style.display = 'none';
            }, 1000);
        } else {
            alert('삭제 실패');
        }
    };

    return items.map((item) => {
        const {_id: id, title, content} = item;

        return (
            <div className="list-item" key={id}>
                <Link href={`/detail/${id}`}>
                    <h4>{title}</h4>
                </Link>
                {/*<DetailLink id={id} />*/}
                <Link href={`/edit/${id}`}>✏️️</Link>
                <span style={{cursor: 'pointer'}} onClick={(e) => handleDeletePost(e, id)}>
                    🗑
                </span>
                <p>{content}</p>
            </div>
        );
    });
}
