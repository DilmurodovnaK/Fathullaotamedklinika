
import React, { useEffect, useRef} from 'react'
import image from "../image/doctor1.png"
import { motion } from "framer-motion";

import ScrollReveal from "scrollreveal"
import { useTranslation } from 'react-i18next'
 
    
const Header = () => {
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
    // bg-[#90D26D]
  //  bg-[#4caf50]
     <div id="home" className=' w-full pt-14 pb-10   btn3  '>
      <div ref={titlRef} className='flex px-20 items-center max-h-[670px] justify-between xl:gap-x-7 xl:px-12 md:gap-8 lg:px-8 md:flex-col nb:px-5 md:items-center'>
      <div className='flex  flex-col w-[50%] items-start gap-7 xl:gap-4  md:w-[100%]'>
        <h1 className=' font-nunito font-bold text-[60px] xl:text-[48px]  leading-[60px] text-white max-w-[550px] md:text-[40px] md:leading-[40px]'> {t('sarlavha')} <br />{t('sarlavha6')}</h1>
      <p className='font-nunito font-normal text-[20px] text-white  lg:text-[15px]  leading-[30px] max-w-[580px] md:font-light md:text-[16px] md:leading-[22px]'>{t('text1')}</p>
    <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}
   
    onClick={() => scrollToSection("priyom")}
   className='font-nunito rounded-xl font-normal btn2 text-lg px-10 py-3 bg-[#00d2ff] hover:bg-[#2AF598]  transition-all duration-1000 ease-out text-white   lg:rounded-[5px] lg:px-8'>{t('button1')}</motion.button>
    </div>
   
      <img src={image} alt="" className='max-w-[550px] w-[50%]  md:w-[100%] md:max-w-[400px] md:max-h-[420px]' />
   </div>
    </div>
   
  )
}

export default Header