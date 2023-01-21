import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

class Carousel extends React.Component {
	render() {
		const { images } = this.props;
		return (
			<Swiper
				className="projectSwiper"
				spaceBetween={50}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{images.map((image, index) => (
					<SwiperSlide key={image} >
						<img src={image} />
					</SwiperSlide>
				))}
			</Swiper>
		);
	}
}

export default Carousel;
