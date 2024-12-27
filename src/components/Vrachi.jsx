import React, { useEffect, useRef, useState } from "react";
import vrach1 from "../image/photo_2024-10-13_01-14-13.jpg";
import vrach2 from "../image/vrach11.jpg";
import vrach3 from "../image/photo_2024-10-13_01-13-26.jpg";
import vrach4 from "../image/vrach1.jpg";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import { useTranslation } from "react-i18next";
const Vrachi = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Stores the currently selected doctor
const { t } = useTranslation();
  const doctors = [
    {
      id: 1,
      name: t("dok1"),
      image: vrach1,
      text:t("dok1text"),
      description: [
  `
    Выявление, определение, оценка, обнаружение, диагностика, лечение, профилактика: `,
   `• Врожденных аномалий (дисплазия тазобедренного сустава, вывихи, подвывихи, косолапость, кривошея).`,
    `• Искривлений позвоночника (сколиоз, кифоз, лордоз).`,
   ` • Плоскостопия и других деформаций стоп.`,
    `• Последствий травм (переломы, растяжения, вывихи).`,
    `• Боли и ограничения в суставах и т. п.`,
    `• Устойчивой хронической боли в конечностях, позвоночнике, суставах при артрозе, остеохондрозе и т. д.
  `,
  `Электропунктурная диагностика по методу Фолля:`,
    `• Выявление патологий сердечно-сосудистой, дыхательной, эндокринной, нервной, пищеварительной, мочеполовой систем и т. п.`,
    `• Определение наследственной предрасположенности к заболеваниям.`,
    `• Оценка иммунной реактивности.`,
    `• Подбор и тестирование лекарственных препаратов.`,
    `• Диагностирование онкологических заболеваний.`,
    `• Определение степени «загрязнения» организма вредными веществами.`,
    `• Выявление скрытых аллергических реакций.`,
    `• Проведение анализа эффективности лечения и многое другое.
  `,
  ` Инфракрасная керамическая резонансная терапия:`,
    `• Являясь совершенно безвредной для организма, инфракрасные керамические излучатели обладают избирательным воздействием только на патологически измененные органы и ткани.`,
    `• Нормализуя обменные процессы на молекулярном уровне, устраняют причину болезни, а не только её симптомы.`,
    `• Применяются для лечения и профилактики иммунных, эндокринных, острых и хронических соматических, инфекционных, вирусных, онкологических и многих других заболеваний.`,
    `• Реабилитация после травм и операций (ускорение восстановления).`,
    `• Снятие мышечных спазмов и улучшение подвижности.`,
   ` • Расслабляющие процедуры для снятия усталости и стресса.`,
   `• Уход за кожей и борьба с целлюлитом (улучшение обменных процессов).`,
    `• Профилактика хронических заболеваний опорно-двигательного аппарата.
  `
],
    },
      {
      id: 2,
      name: t("dok3"),
      image: vrach3,
       text:t("dok2text"),
       description: [
  `
    Выявление, определение, оценка, обнаружение, диагностика, лечение, профилактика: `,
   `• Врожденных аномалий (дисплазия тазобедренного сустава, вывихи, подвывихи, косолапость, кривошея).`,
    `• Искривлений позвоночника (сколиоз, кифоз, лордоз).`,
   ` • Плоскостопия и других деформаций стоп.`,
    `• Последствий травм (переломы, растяжения, вывихи).`,
    `• Боли и ограничения в суставах и т. п.`,
    `• Устойчивой хронической боли в конечностях, позвоночнике, суставах при артрозе, остеохондрозе и т. д.
  `,
  `Электропунктурная диагностика по методу Фолля:`,
    `• Выявление патологий сердечно-сосудистой, дыхательной, эндокринной, нервной, пищеварительной, мочеполовой систем и т. п.`,
    `• Определение наследственной предрасположенности к заболеваниям.`,
    `• Оценка иммунной реактивности.`,
    `• Подбор и тестирование лекарственных препаратов.`,
    `• Диагностирование онкологических заболеваний.`,
    `• Определение степени «загрязнения» организма вредными веществами.`,
    `• Выявление скрытых аллергических реакций.`,
    `• Проведение анализа эффективности лечения и многое другое.
  `,
  ` Инфракрасная керамическая резонансная терапия:`,
    `• Являясь совершенно безвредной для организма, инфракрасные керамические излучатели обладают избирательным воздействием только на патологически измененные органы и ткани.`,
    `• Нормализуя обменные процессы на молекулярном уровне, устраняют причину болезни, а не только её симптомы.`,
    `• Применяются для лечения и профилактики иммунных, эндокринных, острых и хронических соматических, инфекционных, вирусных, онкологических и многих других заболеваний.`,
    `• Реабилитация после травм и операций (ускорение восстановления).`,
    `• Снятие мышечных спазмов и улучшение подвижности.`,
   ` • Расслабляющие процедуры для снятия усталости и стресса.`,
   `• Уход за кожей и борьба с целлюлитом (улучшение обменных процессов).`,
    `• Профилактика хронических заболеваний опорно-двигательного аппарата.
  `
],
    },
    {
      id: 3,
      name: t("dok2"),
      image: vrach2, 
      text:t("dok3text"),
      description:t("info2")
    },
   {
      id: 4,
      name: t("dok5"),
      image: vrach4, 
      text:t("dok4text"),
      description: t("info5")
    },
    // {
    //   id: 4,
    //   name: t("dok4"),
    //   image: vrach4,
    //   description: t("info3")
    // },
  ];

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };
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
    <div id="vrachi" className="w-full mt-24 flex flex-col items-center">
      <div ref={titlRef} className="px-20 xl:px-12 lg:px-8 md:px-5 flex flex-col items-center gap-8">
        <div className="w-full">
          <h3 className="font-nunito mb-5 text-start font-bold text-[44px] xl:text-[38px] md:text-[34px] leading-tight text-black">
            <span className="text-[#6A0572]">{t("vrach")}</span> {t("vrach2")}
          </h3>
        </div>

        <div className="w-full grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-10">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="max-w-[300px] w-full card rounded-lg "
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[350px] rounded-t-lg object-cover"
              />
              <div className="p-5 items-center text-center bg-[#F5F5F5]">
                <h4 className="font-semibold text-[#6A0572] px-2 text-lg mb-1 text-center">
                  {doctor.name}
                </h4>
                <motion.button
                whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}
                  onClick={() => openModal(doctor)}
                  className="font-nunito font-normal mt-3 btn2 text-lg px-3 py-3 bg-[#20C997] text-white rounded-md lg:rounded-[5px] hover:bg-[#6A0572] transition-all duration-1000 ease-out lg:px-8"
                >
                {t("button2")}
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
    {selectedDoctor && (
  <div className="modal-overlay" onClick={closeModal}>
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
    >
      <h2 className="modal-title">{selectedDoctor.name}</h2>
      <p className="modal-text">{selectedDoctor.text}</p>
      {/* Description as a list if it's an array */}
      {Array.isArray(selectedDoctor.description) ? (
        <ul>
          {selectedDoctor.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="modal-description">{selectedDoctor.description}</p>
      )}
      <motion.button
      whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}
        className="close-button bg-[#20C997] text-white px-4 py-2 rounded "
        onClick={closeModal}
      >
          {t("button3")}
      </motion.button>
    </div>
  </div>
)}

      
    </div>
  );
};

export default Vrachi;
