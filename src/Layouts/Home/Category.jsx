import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/assets/home/slide1.jpg";
import slide2 from "../../assets/assets/home/slide2.jpg";
import slide3 from "../../assets/assets/home/slide3.jpg";
import slide4 from "../../assets/assets/home/slide4.jpg";
import slide5 from "../../assets/assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16 font-bold text-white">
          Salad
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16 font-bold text-white">
          Pizza
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16 font-bold text-white">
          Soup
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16 font-bold text-white">
          Dessert
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16 font-bold text-white">
          Salad
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
