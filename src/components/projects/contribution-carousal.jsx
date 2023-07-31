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
      breakpoints={{
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
      {experienceData.map((data, index) => (<SwiperSlide key={index}>
        <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-2'>
          <div className='grow'>
            <img src={data.poster} alt="Jenish MS | Software Engineer" className="avatar-img w-full h-[100px]" />
          </div>
          <a href={data.link} target='__blank'><h3 className='font-bold text-lg hover:text-primary hover:underline'><span className='mr-2 inline-block'><svg className='w-4 h-4 fill-gray-200' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.75 0A2.75 2.75 0 003 2.75v1a.75.75 0 001.5 0v-1c0-.69.56-1.25 1.25-1.25h1a.75.75 0 000-1.5h-1zm4 0a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm7.5 0a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75h-3zM4.5 6.5a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V6.5zm16.5 0a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V6.5zM4.5 13.25a.75.75 0 00-1.5 0v5.5a3.25 3.25 0 001.95 2.98.75.75 0 10.6-1.375A1.75 1.75 0 014.5 18.75V18A1.5 1.5 0 016 16.5h.75a.75.75 0 000-1.5H6c-.546 0-1.059.146-1.5.401V13.25zm16.5 0a.75.75 0 00-1.5 0V15h-2.25a.75.75 0 000 1.5h2.25v4h-5.25a.75.75 0 000 1.5h6a.75.75 0 00.75-.75v-8zM9.75 15a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm-2.353 8.461A.25.25 0 017 23.26v-5.01a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46z"></path></g></svg></span>{data.title}</h3></a>
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