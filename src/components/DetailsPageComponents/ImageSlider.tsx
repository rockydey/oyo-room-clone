"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "./ImageSlider.css";

interface Image {
  url: string;
  category: "bedroom" | "washroom";
}

interface Room {
  id: number;
  room_name: string;
  price: number;
  images: Image[];
  image: string[];
  room_type: string;
  tv: string;
  wifi: string;
  kitchen: string;
  elevator: string;
  description: string;
}

export default function ImageSlider({ room }: { room: Room }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const { images } = room;
  const [imageShow, setImageShow] = useState<Image[]>(images);
  const [activeCategory, setActiveCategory] = useState("room");
  const [roomCall, setRoomCall] = useState<boolean>(false);
  const [washroomCall, setWashroomCall] = useState<boolean>(false);
  const roomLength = images?.filter((img) => img.category === "bedroom").length;
  const washroomLength = images?.filter(
    (img) => img.category === "washroom"
  ).length;
  const swiperRef = useRef<SwiperClass | null>(null);
  const swiperRef2 = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (roomCall) {
      handleRoom();
      setRoomCall(false);
    }
    if (washroomCall) {
      handleWashroom();
      setWashroomCall(false);
    }
  }, [roomCall, washroomCall]);

  const handleRoom = () => {
    const roomImage = imageShow.filter((image) => image.category === "bedroom");
    const washroomImage = imageShow.filter(
      (image) => image.category === "washroom"
    );
    const allImage = [...roomImage, ...washroomImage];
    setImageShow(allImage);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0);
    }
    if (swiperRef2.current) {
      swiperRef2.current.slideTo(0, 0);
    }
  };

  const handleWashroom = () => {
    const washroomImage = imageShow.filter(
      (image) => image.category === "washroom"
    );
    const roomImage = imageShow.filter((image) => image.category === "bedroom");
    const allImage = [...washroomImage, ...roomImage];
    setImageShow(allImage);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0);
    }
    if (swiperRef2.current) {
      swiperRef2.current.slideTo(0, 0);
    }
  };

  const handleActiveCategory = (value: string) => {
    setActiveCategory(value);
    if (value === "room") {
      setRoomCall(true);
    } else {
      setWashroomCall(true);
    }
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    const image = imageShow[swiper.realIndex];
    if (!washroomCall && image.category === "bedroom") {
      setActiveCategory("room");
    } else if (!roomCall && image.category === "washroom") {
      setActiveCategory("washroom");
    }
  };

  return (
    <div>
      <div className='mb-10 max-w-screen-xl mx-auto '>
        <div role='tablist' className='font-semibold'>
          <a
            onClick={() => {
              handleActiveCategory("room");
            }}
            role='tab'
            className={`${
              activeCategory === "room" && "border-b-2 border-color4"
            } tab cursor-pointer text-color4 text-lg `}>
            Room ({roomLength})
          </a>
          <a
            onClick={() => {
              handleActiveCategory("washroom");
            }}
            role='tab'
            className={`${
              activeCategory === "washroom" && "border-b-2 border-color4"
            } tab inline-block ml-5 cursor-pointer text-color4 text-lg`}>
            Washroom ({washroomLength})
          </a>
        </div>
      </div>
      <div>
        <div className='max-w-screen-xl mx-auto'>
          <Swiper
            spaceBetween={10}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            navigation={true}
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper mb-10'>
            {imageShow.map((src, index) => (
              <SwiperSlide key={index} className=''>
                <Image
                  src={src?.url}
                  className='block mx-auto'
                  alt={`Image ${index + 1}`}
                  width={620}
                  height={280}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='max-w-screen-xl mx-auto swiper-2'>
          <Swiper
            loop={true}
            onSwiper={(swiper) => {
              setThumbsSwiper(swiper);
              swiperRef2.current = swiper;
            }}
            spaceBetween={0}
            slidesPerView={6}
            freeMode={true}
            navigation={true}
            observeParents={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2'>
            {imageShow.map((src, index) => (
              <SwiperSlide key={index} className=''>
                <Image
                  src={src?.url}
                  className='block mx-auto'
                  alt={`Image ${index + 1}`}
                  width={220}
                  height={200}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
