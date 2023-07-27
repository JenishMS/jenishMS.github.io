'use client';
import { useRef } from "react";
import { Carousel } from 'flowbite-react';

const ProjectCarousal = () => {
    const swiperRef = useRef(null);

    return (<div className="project-carousal h-60">
        <h1>Project Swiper</h1>
        <div>
            <Carousel>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 1
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 2
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 3
                </div>
            </Carousel>
        </div>
    </div>);
}

export default ProjectCarousal;