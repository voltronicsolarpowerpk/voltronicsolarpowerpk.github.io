import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import hero1 from "../../assets/images/hero-1.jpg";
import hero2 from "../../assets/images/hero-2.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "Since 1991",
    title: "Powering Pakistan with clean solar energy",
    subtitle: "Residential, commercial, and industrial solar solutions.",
  },
  {
    image: hero2,
    eyebrow: "Certified installers",
    title: "Premium solar panels & lithium batteries",
    subtitle: "High-efficiency systems designed for every kind of building.",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        loop
        className="w-full h-[calc(100vh-80px)] min-h-450px max-h-800px [&_.swiper-pagination]:hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div
              className="relative w-full h-full bg-cover bg-center lg:bg-right"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-text/90 via-text/60 to-text/30 lg:bg-linear-to-r lg:from-text/95 lg:via-text/60 lg:to-text/20" />

              {/* Diagonal accent */}
              <div
                className="hidden lg:block absolute top-0 right-0 h-full w-1/3 bg-primary/25 pointer-events-none"
                style={{
                  clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center h-full py-8 lg:py-12">
                <div className="container-custom w-full">
                  <div className="max-w-xl lg:max-w-2xl">
                    <p className="inline-flex items-center gap-2 text-primary-light font-semibold text-xs sm:text-sm md:text-base">
                      <span className="w-5 sm:w-6 h-px bg-primary-light" />
                      {slide.eyebrow}
                    </p>

                    <h1 className="mt-2 sm:mt-3 text-surface font-bold leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading">
                      {slide.title}
                    </h1>

                    <p className="mt-2 sm:mt-4 text-surface/90 text-sm sm:text-base lg:text-lg max-w-lg">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
