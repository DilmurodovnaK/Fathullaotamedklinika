import React, { useEffect, useRef, } from 'react';

import insta from '../image/instagram.svg';
import tg from '../image/telegram.svg';
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
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

   const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  return (
    <footer id='kontakti' className="w-full mt-14 py-10 px-20 xl:px-10 sm:px-5 bg-[#F0F6F9]">
      <div ref={titlRef} className="flex justify-between items-start gap-x-10 xl:gap-x-7 sm:gap-x-4 md:flex-col md:items-center">
        {/* Left Section */}
        <div className="flex justify-between w-[50%] gap-x-10 md:w-full sm:flex-col sm:items-center">
          <div className="flex flex-col items-start gap-5 sm:items-center">
            <p className="text-3xl font-bold lg:text-xl sm:text-center">{t("sarlavha")}</p>
            <p className="max-w-[350px] lg:text-sm text-center">
             {t("foot1")}
            </p>
            <p className="font-normal max-w-[350px] text-center lg:text-sm text-[#4F4F4F]">
                        {t("foot2")}

            </p>
          </div>
          <div className="flex flex-col gap-3 mt-10">
            <p className="font-semibold text-xl text-center">  {t("foot3")}</p>
            <p className="font-semibold text-xl lg:text-sm text-center text-[#6A0572]">(998) 90 908-70-74</p>
            <p className="font-semibold text-xl lg:text-sm text-center text-[#6A0572]">(998) 55 502-05-76</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-between w-[50%] gap-x-10 md:w-full sm:flex-col sm:items-center">
          <div className="flex flex-col gap-3 mt-10">
            <p className="font-normal lg:text-sm text-base text-center">
              Ташкент, просп. Бунёдкор (дублёр), 1 этаж 1
            </p>
            <p className="font-normal lg:text-sm text-base text-center">  {t("foot4")}</p>
            <p className="font-medium lg:text-sm text-base text-center">  {t("foot5")}</p>
          </div>
          <div className="flex flex-col gap-3 mt-10 text-center">
            <span className="flex items-center gap-x-2 font-semibold">
              <img src={insta} alt="Instagram" width={30} height={30} />
               {t("foot6")}         </span>
            <a href='https://t.me/fomclinic' className="flex items-center gap-x-2 font-semibold">
              <img src={tg} alt="Telegram" width={30} height={30} />
              {t("foot7")}        </a>
            <button   onClick={() => scrollToSection("priyom")}
             className="font-nunito font-semibold mt-2 text-lg px-7 py-3 text-[#4F4F4F] rounded-md bg-[#E3EFF5] lg:rounded-[5px] lg:px-8 hover:bg-[#D0E6F1]">
                {t("foot8")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
