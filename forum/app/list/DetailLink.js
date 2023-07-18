'use client';

import {useRouter} from 'next/navigation';

export default function DetailLink(props) {
    const router = useRouter();
    const handleButtonClick = () => {
        router.push(`/detail/${props.id}`);
    };

    return <button onClick={handleButtonClick}>버튼</button>;
}
