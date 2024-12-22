
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import usluga1 from "../image/usluga1.jpg"
import usluga2 from "../image/usluga2.jpg"
import usluga3 from "../image/usluga3.jpg"
import usluga4 from "../image/usluga4.jpg"
import usluga5 from "../image/usluga5.jpg"
import usluga6 from "../image/usluga6.jpg"
import usluga7 from "../image/usluga7.jpg"
import usluga8 from "../image/usluga8.jpg"
import usluga9 from "../image/usluga9.jpg"
import usluga10 from "../image/usluga10.jpg"
import usluga11 from "../image/usluga11.jpg"
import usluga12 from "../image/usluga12.jpg"
import usluga13 from "../image/usluga13.jpg"
import usluga14 from "../image/usluga14.jpg"
import usluga15 from "../image/usluga15.jpg"
import usluga16 from "../image/usluga16.jpg"
import { motion } from "framer-motion";
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next';

const Xizmatkorsatish = () => {
const { t } = useTranslation();

const services = [
  {
    src: usluga1,
    description: 'ОРТОПЕД',
  },
   {
    src: usluga13,
    description: 'ВАКУУМНАЯ ТЕРАПИЯ',
  },
 
  {
    src: usluga3,
    description: 'НЕВРОПАТОЛОГ',
  },
  {
    src: usluga6,
    description: 'АПИТЕРАПИЯ',
  },

  {
    src: usluga5,
    description: 'ИК-РЕЗОНАНС ТЕРАПИЯ',
  },
  {
    src: usluga4,
    description: 'ДИАГНОСТИКА (Р.ФОЛЛЯ)',
  },
  {
    src: usluga7,
    description: 'ГИРУДОТЕРАПИЯ',
  },
  {
    src: usluga8,
    description: 'СОЛЕНАЯ ПЕШЕРА',
  },
   {
    src: usluga9,
    description: 'ОЗОНОТЕРАПИЯ',
  },
  {
    src: usluga10,
    description: 'ТУБУС-КВАРЦ',
  },
  {
    src: usluga11,
    description: 'ЭЛЕКТРОТЕРАПИЯ',
  },
  {
    src: usluga12,
    description: 'ВСЕ ВИДЫ МАССАЖА',
  },
  {
    src: usluga2,
    description: 'ГИНЕКОЛОГ',
  },
   {
    src: usluga14,
    description: 'ПАРАФИН, ИНГАЛЯЦИЯ',
  },
  {
    src: usluga15,
    description: 'ИГЛОРЕФЛЕКСОТЕРАПИЯ',
  },
  {
    src: usluga16,
    description: 'АНТИГЕЛЬМИНТАЛЬНАЯ ТЕРАПИЯ',
  },
 
];

    const titleRef = useRef(null);
  const titlRef = useRef(null);
 useEffect(() => {
    ScrollReveal().reveal(titlRef.current, {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
     ScrollReveal().reveal(titleRef.current, {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
  })

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };
 const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div  className="w-full mt-24">
      <div ref={titleRef} className="px-20 xl:px-12 lg:px-8 md:px-5 flex flex-col items-center gap-8">
        <div id='usluga' className="flex w-full justify-between items-center gap-5 flex-wrap text-center md:flex-col md:items-start">
          <h3 className="font-nunito font-bold text-[44px] xl:text-[40px] md:text-[34px] leading-tight text-black max-w-[550px]">
            <span className='text-[#6A0572]'>{t("sarlavha2")}</span> {t("sarlavha3")}
          </h3>
          <div className="flex justify-center gap-4">
  {/* Back Button */}
  <button
  className="border-[#6A0572] border-2  px-3 py-3 rounded-full hover:bg-[#973d9d] hover:-translate-x-2 transition-all flex items-center justify-center"
  onClick={handlePrev}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="black" 
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19l-7-7 7-7"
    />
  </svg>
</button>

{/* Next Button */}
<button
  className="border-[#6A0572] border-2 text-white px-3 py-3 rounded-full hover:bg-[#973d9d] hover:translate-x-2 transition-all flex items-center justify-center"
  onClick={handleNext}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="black" 
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>

</div>

        </div>

        <div className="relative w-full items-center justify-between">
          <Swiper
            className='swip overflow-hidden justify-center '
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerGroup={1} // Har bir o‘tishda bir slayder ko‘rinadi

            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 10,
              

              },
              660: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {services.map((usluga, index) => (
              <SwiperSlide className='swip  ' key={index}>
                <div className="max-w-[300px] sm:w-[450px] bg-[#F5F5F5] border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <img
                    src={usluga.src}
                    alt={usluga.description}
                    width={350}
                    height={250}
                    className="rounded-t-lg object-cover h-[250px] "
                  />
                  <div className="p-5">
                    <p className="mb-3 font-medium text-[17px] text-black max-w-[240px] ">
                      {usluga.description}
                    </p>
                   <motion.button whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}
   onClick={() => scrollToSection("priyom")}
   className="xl:w-[246px] w-full h-[54px] btn text-white font-bold text-base mt-2 bg-[#20C997] rounded-[5px] hover:bg-[#6A0572] transition-all duration-1000 ease-out">
  {t("button1")}
</motion.button>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Xizmatkorsatish;
