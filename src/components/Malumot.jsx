
import React, { useEffect, useRef } from 'react'
import image from "../image/doctor2.png"
import ScrollReveal from 'scrollreveal'
import plus from "../image/plus.png"
import { useTranslation } from 'react-i18next'
const Malumot = () => {
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
    
   <>
    <div className=' w-full pt-14  '>
      <div ref={titlRef} className='flex px-20 items-center  justify-between xl:gap-x-7 xl:px-12 md:gap-8 lg:px-8 md:flex-col nb:px-5  md:items-center'>
      <div className='flex  flex-col w-[50%] items-start gap-7 xl:gap-4  md:w-[100%]'>
        <h3 className='font-nunito font-bold text-[48px] xl:text-[40px]  leading-[48px] text-black max-w-[550px] md:text-[34px] md:leading-[34px]'><span className='text-[#712176]'>{t("azgina")}
          </span> {t("malumot")} </h3>
      <p className='font-nunito font-normal text-[18px] text-black  lg:text-[14px]  leading-[28px] max-w-[580px] md:font-normal md:text-[16px] md:leading-[22px]'>{t("text3")}</p>
    
    </div>
   
      <img src={image} alt="" className='max-w-[550px] w-[50%]  md:w-[100%] md:max-w-[400px] md:max-h-[420px] md:hidden' />
   </div>
    </div>

    <div className="w-full  ">
      <div ref={titleRef} className="p-14  mx-20 xl:mx-10 xl:px-5 nb:mx-5 lg:mx-8 bg-[#F0F6F9] md:py-14 rounded-[5px]">
        <div className='grid grid-cols-4  sm:grid-cols-2 sm:gap-7 justify-between gap-x-5'>
          <div className='flex flex-col items-start max-w-[260px] gap-2'>
            <img src={plus} alt="" />
            <span className='text-[#20C997] md:text-xl text-2xl font-medium'>10+</span>
            <span className='font-normal text-black md:text-base lg:text-sm  text-lg max-w-[222px]'>{t("malumot1")}</span>
          </div>
           <div className='flex flex-col items-start max-w-[260px] gap-2'>
            <img src={plus} alt="" />
            <span className='text-[#20C997] md:text-xl text-2xl font-medium'>15+</span>
            <span className='font-normal text-black md:text-base lg:text-sm  text-lg max-w-[222px]'> {t("malumot2")}</span>
          </div>
           <div className='flex flex-col items-start max-w-[260px] gap-2'>
            <img src={plus} alt="" />
            <span className='text-[#20C997] md:text-xl text-2xl font-medium'>19</span>
            <span className='font-normal text-black md:text-base lg:text-sm  text-lg max-w-[222px]'>{t("malumot3")}</span>
          </div>
           <div className='flex flex-col items-start max-w-[260px] gap-2'>
            <img src={plus} alt="" />
            <span className='text-[#20C997] md:text-xl text-2xl nb:text-lg font-medium'>{t("kun")}</span>
            <span className='font-normal text-black md:text-base lg:text-sm  text-lg max-w-[222px]'>{t("malumot4")}</span>
          </div>
        </div>
        

      </div>
      </div>
   </>
  )
}

export default Malumot