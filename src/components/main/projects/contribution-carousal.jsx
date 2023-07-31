'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import experienceData from './contributions.json';
import './carousal.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const ContributionCarousal = (props) => {
  return <>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={30}
        breakpoints = {{
          640: {
            slidesPerView: 2.3,
            spaceBetween: 40
          },
          1200: {
            slidesPerView: 2.3,
            spaceBetween: 40
          },
        }}
        className="mySwiper relative"
      >
        {experienceData.map((data, index) =>(<SwiperSlide key={index}>
          <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-2'>
            <div className='grow'>
              <img src={data.poster} alt="Jenish MS | Software Engineer" className="avatar-img w-full h-[100px]" />
            </div>
            <a href={data.link} target='__blank'><h3 className='font-bold text-lg hover:text-primary hover:underline'>{data.title}</h3></a>
            {/* <p className='line-clamp-2 text-ellipsis'>{data.description}</p> */}
            <div>
              {data.tags.map((tag, tagIndex) => (<span key={tagIndex} className='text-primary mx-2'>{tag}</span>))}
            </div>
          </div>
        </SwiperSlide>))}
      </Swiper>
    </>
}

export default ContributionCarousal;