
import React, { useEffect, useRef } from 'react'
import stars from "../image/stars.png"
import ScrollReveal from 'scrollreveal'
import { useTranslation } from 'react-i18next';
const Otziv = () => {
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
  return (
    <div id='otziv' className="w-full mt-20 nb:mt-16">
      <div ref={titleRef} className="px-20 xl:px-12 lg:px-8 md:px-5 flex flex-col items-center gap-8">
        <div className=" w-full text-start">
          <h3 className="font-nunito font-bold text-[44px] xl:text-[38px] text-start md:text-[34px] leading-tight text-black max-w-[550px]">
         <span className='text-[#6A0572]'>{t("otzivi1")}</span> {t("otzivi2")}
          </h3>
          </div>
<div className='flex justify-between gap-x-10 sm:flex-col sm:gap-12'>
<div className='w-[50%] flex flex-col items-start gap-5 sm:w-[100%] sm:gap-3'>
    <div className='flex flex-col'>
          <span className='font-semibold text-base'>Shukurillayeva Munisa  </span>
          <span className='font-normal text-base'>18 апрел 2023</span>
    </div>
  
   <img src={stars} alt="" />
   <p className='otzivip font-semibold text-lg lg:text-base nb:text-sm '>{t("otziv1")}</p>

<span className='font-semibold text-xl lg:text-base'> {t("vrachs")} <span className='text-[#20C997] font-semibold text-xl lg:text-base'>{t("dok1")}</span></span>
</div>

<div className='w-[50%] flex flex-col items-start gap-5 sm:w-[100%] sm:gap-3'>
    <div className='flex flex-col '>
          <span className='font-semibold text-base'>Abdullayeva Samira</span>
          <span className='font-normal text-base'>19 март 2024</span>
    </div>
  
   <img src={stars} alt="" />
   <p className='otzivip font-semibold text-lg lg:text-base nb:text-sm'>{t("otziv2")}</p>

<span className='font-semibold text-xl lg:text-base'> {t("vrachs")} <span className='text-[#20C997] font-semibold text-xl lg:text-base'>{t("dok3")}</span></span>
</div>



</div>

          </div>

          </div>
  )
}

export default Otziv