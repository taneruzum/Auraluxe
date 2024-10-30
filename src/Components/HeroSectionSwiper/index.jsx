import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imagePaths = [
    'SwiperImages/1920x1080.png',
    'SwiperImages/1920x1080v2.png',
]

export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            className='w-full h-fit'
        >
            {imagePaths.map((img, index) => (
                <SwiperSlide key={index} className='w-full h-full'>
                    <figure className='relative w-full h-full flex items-center justify-center'>
                        <img
                            src={img}
                            alt={`Swiper Image ${index}`}
                            className='max-w-[1920px] max-h-[1080px] aspect-video'
                        />
                    </figure>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}