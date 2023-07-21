'use client';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';

export default function DarkMode() {
    let router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(('; ' + document.cookie).split(`; mode=`).pop().split(';')[0] === 'dark');

    useEffect(() => {
        const darkModeCookie = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0];
        if (darkModeCookie === '') {
            document.cookie = 'mode=light; max-age=' + 3600 * 24 * 400;
        }
    }, []);

    const handleSwitchDarkMode = () => {
        document.cookie = `mode=${isDarkMode ? 'light' : 'dark'}; max-age=${3600 * 24 * 400}`;
        setIsDarkMode(!isDarkMode);
        router.refresh();
    };

    return <span onClick={handleSwitchDarkMode}>{` ${isDarkMode ? '🌙' : '☀️'} `}</span>;
}
