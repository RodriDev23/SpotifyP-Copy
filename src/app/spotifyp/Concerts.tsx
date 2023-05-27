import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

const ConcertsP = () => {
  return (
    <div className="flex justify-center items-center w-full ml-24 mt-6 mb-10">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
     
        pagination={{
          clickable: true,
          dynamicBullets: true
          
        }}
        modules={[Keyboard, Scrollbar, Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 gap-4">
      <div className='flex justify-center items-center gap-5'>
        <h2 className="text-2xl font-bold "> Artist:Feid</h2>
        <Image
          src="https://i.scdn.co/image/ab67616d00001e027cc7b0d6a82846cd8b158f99"
          alt="artist"
          className='w-[30%] h-[10%] rounded-full object-cover mb-4 mt-1'
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://vid.alarabiya.net/images/2021/11/17/4c04b599-5537-4af8-bea2-8ad119051f6f/4c04b599-5537-4af8-bea2-8ad119051f6f.JPG?crop=4:3&width=1200"
          alt=""
          className="w-[100%] h-[40%] object-cover flex justify-center items-center rounded-md"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold">Concert In: Crypyo Arena</h2>
        <h2 className='mt-3'>Date: 10/10/2023</h2>
        <p className="mt-2 text-lg">LA, USA</p>
        <button className="mt-4 px-4 py-2 border text-green-500 border-green-500 rounded-full text-2xl font-bold cursor-pointer hover:bg-green-500 hover:text-white">
          Get Tickets
        </button>
      </div>
    </div>
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 gap-4">
      <div className='flex justify-center items-center gap-5'>
          <h2 className="text-2xl font-bold ml-4">Artist:Drake
          </h2>
        <Image
          src="https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b"
          alt="artist"
          className='w-[30%] h-[10%] rounded-full object-cover mb-4 mt-1'
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://ww3.hdnux.com/photos/36/00/25/7865690/9/rawImage.jpg"
          alt="stadiums"
          className="w-[100%] h-[40%] object-cover flex justify-center items-center rounded-md"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold">Concert In: NRG Stadium</h2>
        <h2 className='mt-3'>Date: 23/12/2023</h2>
        <p className="mt-2 text-lg">Houston, USA</p>
        <button className="mt-4 px-4 py-2 border text-green-500 border-green-500 rounded-full text-2xl font-bold cursor-pointer hover:bg-green-500 hover:text-white">
          Get Tickets
        </button>
      </div>
    </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 gap-4 ml-7">
      <div className='flex justify-center items-center gap-5'>
          <h2 className="text-2xl font-bold ml-4">Artist:Lil Baby
          </h2>
        <Image
          src="https://i.scdn.co/image/ab6761610000e5eb6cad3eff5adc29e20f189a6c"
          alt="artist"
          className='w-[30%] h-[10%] rounded-full object-cover mb-4 mt-1'
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppU_ZicLBIZI8_gaxzQu-5CHNixSfvPezrLUYGG4bSt-ZHYrwE40NNgXcCX8YDDm5CIo&usqp=CAU"
          alt="stadiums"
          className="w-[100%] h-[40%] object-cover flex justify-center items-center rounded-md"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold">Concert In: Farm Arena</h2>
        <h2 className='mt-3'>Date: 23/12/2023</h2>
        <p className="mt-2 text-lg">Atlanta, USA</p>
        <button className="mt-4 px-4 py-2 border text-green-500 border-green-500 rounded-full text-lg font-bold cursor-pointer hover:bg-green-500 hover:text-white">
          Get Tickets
        </button>
      </div>
    </div>
          </SwiperSlide>


 

        </Swiper>
      
    </div>
  );
};

export default ConcertsP;
