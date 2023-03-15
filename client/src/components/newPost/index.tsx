import React, { useEffect, useState } from 'react';
import { createImage } from '~/services/apis/openAI';

export default function NewPost() {
    const [image, setImage] = useState<string>('');

    // useEffect(() => {
    //     const createImg = async () => {
    //         const data = await createImage('astronout in the space');
    //         setImage(data.data);
    //     };
    //     createImg();
    // }, []);
    return (
        <div>
            NewPost
            <img src={image} />
        </div>
    );
}
