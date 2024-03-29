import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Spots.css";
import { Pagination, Navigation } from "swiper";

const Spots = () => {
  const { data: spots, isLoading } = useQuery("spots", () =>
    fetch("http://localhost:5000/spots").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto my-10">
      <div>
        <div className="text-3xl text-center font-bold text-primary">SPOTS</div>
        <div className="flex justify-center">
          <div className="w-10 h-1 bg-primary rounded-lg mr-1"></div>
          <div className="w-7 h-1 bg-primary rounded-lg mr-1"></div>
          <div className="w-4 h-1 bg-primary rounded-lg mr-1"></div>
        </div>
      </div>
      <div className="mt-10 mb-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {spots?.map((spot) => (
            <SwiperSlide key={spot._id}>
              <img src={spot.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Spots;
