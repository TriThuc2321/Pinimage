import React from 'react';

export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 flex justify-center items-center pt-6">
            <div className="flex items-center absolute left-4 top-4">
                <img
                    className="w-12 h-12"
                    src="https://res.cloudinary.com/dpz16u0pa/image/upload/v1678937447/Untitled-2_ecjiqz.png"
                />
                <p className="font-bold text-xl">
                    <span className="text-white">PIN</span>IMAGE
                </p>
            </div>

            <div className="flex tracking-widest">
                <p className="mx-4">Home</p>
                <p className="mx-4">Favorite</p>
                <p className="mx-4">My post</p>
            </div>
        </div>
    );
}
