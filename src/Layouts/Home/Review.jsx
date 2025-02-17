import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center px-28">
              <div className="flex flex-col justify-center items-center gap-6">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <div className="w-full flex justify-center font-bold text-6xl">
                  <FaQuoteLeft></FaQuoteLeft>
                </div>
              </div>

              <p className="pt-8 pb-2 text-[20px]">{review.details}</p>
              <h3 className="font-medium text-[32px] text-[#CD9003]">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
