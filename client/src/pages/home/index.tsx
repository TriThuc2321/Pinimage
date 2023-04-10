import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Header, NewPost } from '~/components';

export default function Home() {
    const [showNewPost, setShowNewPost] = useState(false);
    const [searchParams] = useSearchParams();
    const popup = searchParams.get('popup');

    useEffect(() => {
        if (popup === 'new-post') {
            console.log(true);
            setShowNewPost(true);
        } else {
            setShowNewPost(false);
        }
    }, [popup]);

    return (
        <div>
            <Header />
            <Outlet />
            {showNewPost && <NewPost />}
        </div>
    );
}
