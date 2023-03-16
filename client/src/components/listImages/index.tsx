import React from 'react';
import { IPost } from '~/interfaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

interface ListImagesProps {
    posts: Array<IPost>;
    className?: string;
}
export default function ListImages({ posts, className }: ListImagesProps) {
    return (
        <div className={className}>
            <Swiper
                slidesPerView={2.6}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {posts &&
                    posts.map((item) => (
                        <SwiperSlide key={item._id}>
                            <img src={item.url} className="h-80 w-80" />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}
