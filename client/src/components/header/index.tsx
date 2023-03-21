import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Button from '../button';
import { useState, useEffect } from 'react';

export default function Header() {
    const { pathname } = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => setShowMenu(false), [pathname]);

    const menus = [
        {
            id: '0',
            title: 'Home',
            pathname: '/',
        },
        {
            id: '1',
            title: 'Favorite',
            pathname: '/favorite',
        },
        {
            id: '2',
            title: 'My post',
            pathname: '/my-post',
        },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 z-50">
            <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
                <img
                    className="w-12 h-12"
                    src="https://res.cloudinary.com/dpz16u0pa/image/upload/v1678937447/Untitled-2_ecjiqz.png"
                />
                <p className="font-bold text-xl">
                    <span className="text-white">PIN</span>IMAGE
                </p>
            </div>

            <div className="hidden tablet:flex tracking-widest text-white">
                {menus.map((item) => (
                    <Link to={item.pathname} key={item.id}>
                        <p className={clsx({ ['text-primary font-bold']: pathname === item.pathname }, 'mx-4')}>
                            {item.title}
                        </p>
                    </Link>
                ))}
            </div>

            <div className="hidden tablet:flex">
                <Button className="mx-2" text="Create post" />
                <Button className="mx-2" outline text="Login" />
            </div>

            <div className="flex tablet:hidden">
                <Bars3Icon width={32} height={32} onClick={() => setShowMenu(!showMenu)} />
                {showMenu && (
                    <div className="bg-blear08 z-50 fixed top-20 left-0 right-0 bottom-0 text-white px-4">
                        {[...menus, { id: '3', title: 'New post', pathname: '/new-post' }].map((item) => (
                            <Link to={item.pathname} key={item.id}>
                                <p
                                    className={clsx(
                                        { ['text-primary font-bold']: pathname === item.pathname },
                                        'my-5 mx-5 text-4xl justify-end text-center',
                                    )}
                                >
                                    {item.title}
                                </p>
                            </Link>
                        ))}

                        <div className=" w-full h-0.5 bg-primary" />
                        <Link to="/login">
                            <p className="my-5 mx-5 text-4xl justify-end text-center">Login</p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
