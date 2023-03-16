import { ListImages } from '~/components';
import { posts } from '~/services/mock';

export default function Discover() {
    return (
        <div className="top-0 bottom-0 left-0 right-0">
            <img
                className="h-screen w-screen absolute -z-10"
                src="https://res.cloudinary.com/dpz16u0pa/image/upload/v1678937548/c1fb18f9a6ae217916932d522029a2a5_1_jjoyyx.jpg"
            />

            <div className="flex items-center w-screen h-screen">
                <div className="ml-24 max-w-xl text-white bg-blear rounded-xl shadow-lg px-12 py-8">
                    <p className="text-5xl  font-mono">
                        Create your <span className="text-primary">Pinimage</span>
                    </p>
                    <p className="text-5xl font-mono">by your way</p>

                    <p className="mt-6 text-lg">
                        The Pinimage allows you to create an original image given a text prompt. The more detailed the
                        description, the more likely you are to get the result that you or your end user want.
                    </p>
                </div>

                <ListImages posts={posts} className="absolute right-0 w-1/2 bg-transparent" />
            </div>
        </div>
    );
}
