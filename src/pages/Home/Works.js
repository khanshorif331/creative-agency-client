import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import './styles.css'
import './styles.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'

const Works = () => {
	return (
		<div>
			<h1 className='text-white font-bold text-3xl text-center'>
				Here are some of <span className='text-red-600'>Our Works</span>
			</h1>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[Autoplay, EffectCoverflow, Pagination]}
				className='mySwiper'
			>
				<SwiperSlide>
					<img src='https://swiperjs.com/demos/images/nature-1.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='https://swiperjs.com/demos/images/nature-2.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='https://swiperjs.com/demos/images/nature-3.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='https://swiperjs.com/demos/images/nature-4.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='https://swiperjs.com/demos/images/nature-5.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='https://swiperjs.com/demos/images/nature-6.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='https://swiperjs.com/demos/images/nature-7.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='https://swiperjs.com/demos/images/nature-8.jpg' />
				</SwiperSlide>
				
			</Swiper>
		</div>
	)
}

export default Works
