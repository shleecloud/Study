'use client';

import {useEffect, useState} from 'react';

export default function Comment({parent}) {
    const [inputComment, setInputComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('/api/comment/list?parent=' + parent, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setComments(res));
    }, []);

    const handleCommentInput = (e) => {
        setInputComment(e.target.value);
    };
    const handleCommentSubmit = () => {
        fetch('/api/comment/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                parent,
                content: inputComment,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                setInputComment('');
                setComments([...comments, {content: inputComment, author: 'me', _id: res.insertedId}]);
            });
    };

    return (
        <div>
            <div>
                <hr />
                <h1>Comments</h1>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment._id}>
                            <span>
                                {comment.author} : {comment.content}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <input value={inputComment} onChange={(e) => handleCommentInput(e)} />
            <button onClick={handleCommentSubmit}>댓글 등록</button>
        </div>
    );
}
