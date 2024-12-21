import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

const Karta = () => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const titlRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(titleRef.current, {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
    ScrollReveal().reveal(titlRef.current, {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
  }, []);

  return (
    <div className="w-full mt-14 mb-5">
      <div ref={titlRef} className="px-20 xl:px-12 lg:px-8 md:px-5 flex flex-col items-center gap-8">
        <div className="w-full text-start">
          <h3 className="font-nunito font-bold text-[44px] xl:text-[38px] text-start md:text-[34px] leading-tight text-black max-w-[550px]">
            <span className="text-[#6A0572]">{t('karta1')}</span> {t('karta2')}
          </h3>
        </div>
        <div className="w-full" style={{ position: 'relative', overflow: 'hidden' }}>
          <iframe
            title="Unique Title"
            src="https://yandex.uz/map-widget/v1/?ll=69.224724%2C41.293760&z=16&text=Fathulla%20Ota%20Med%2C%20%D0%BC%D0%B5%D0%B4%D1%86%D0%B5%D0%BD%D1%82%D1%80%2C%20%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0%2C%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF.%20%D0%91%D1%83%D0%BD%D1%91%D0%B4%D0%BA%D0%BE%D1%80%20(%D0%B4%D1%83%D0%B1%D0%BB%D1%91%D1%80)"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            style={{ position: 'relative', borderRadius: '10px' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Karta;
