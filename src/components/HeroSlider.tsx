"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "../styles/heroSlider.module.css";
import { heroSlides } from "@/constants/slides";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop
      className={styles.swiper}
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id} className={styles.slide}>
          <Image
            src={slide.image}
            alt={`Слайд з курсом англійської мови`}
            fill
            className={styles.image}
            priority
          />
          {slide.showButton && (
            <div className={styles.button_wrapper}>
              <button className={styles.button}>
                Ознайомитися з програмою
              </button>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
