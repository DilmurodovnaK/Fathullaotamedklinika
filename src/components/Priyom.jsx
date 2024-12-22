"use client";
import React, { useEffect, useRef, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ScrollReveal from "scrollreveal";
import { useTranslation } from "react-i18next";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "ОРТОПЕД",
  "ВАКУУМНАЯ ТЕРАПИЯ",
  "НЕВРОПАТОЛОГ",
  "АПИТЕРАПИЯ",
  "ИК-РЕЗОНАНС ТЕРАПИЯ",
  "ДИАГНОСТИКА (Р.ФОЛЛЯ)",
  "ГИРУДОТЕРАПИЯ",
  "СОЛЕНАЯ ПЕШЕРА",
  "ОЗОНОТЕРАПИЯ",
  "ТУБУС-КВАРЦ",
  "ЭЛЕКТРОТЕРАПИЯ",
  "ВСЕ ВИДЫ МАССАЖА",
  "ГИНЕКОЛОГ",
  "ПАРАФИН, ИНГАЛЯЦИЯ",
  "ИГЛОРЕФЛЕКСОТЕРАПИЯ",
  "АНТИГЕЛЬМИНТАЛЬНАЯ ТЕРАПИЯ",
];

const Priyom = () => {
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

  const [personName, setPersonName] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    secondname: "",
    personName: "",
    tel: "",
   
  });
  const [isChecked,  setIsChecked] = useState(false);

  // Handle changes in the Select component
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const handleClick = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/[^\d]/g, ""); // Only allow digits
    setFormData({
      ...formData,
      tel: formattedValue,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isChecked) {
    alert("Пожалуйста, подтвердите согласие на политику конфиденциальности.");
    return;
  }

  const TELEGRAM_TOKEN = "7931505142:AAFxjz1hFQKrmv_OeMhbUn32EYfUMmsFEt4";
  const CHAT_ID = "1334411608"; // Your chat ID

  // Prepare the message with proper formatting
  const message = `Имя: ${formData.name}\nТелефон: ${formData.tel}\nФамилия: ${formData.secondname}\nВыбрано: ${personName.length ? personName.join(", ") : "No tags selected"}`;

  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  // Log the message and URL for debugging
  console.log("Message to be sent:", message);
  console.log("Sending to Telegram API URL:", url);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    const result = await response.json();
    console.log("Telegram API response:", result); // Log the response from Telegram

    if (result.ok) {
      alert("Сообщение успешно отправлено!");
      setFormData({ name: "", secondname: "", personName: "", tel: "" }); // Clear the form
      setPersonName([]); // Clear the selected tags
    } else {
      alert("Ошибка при отправке сообщения! Ошибка API: " + result.description);
    }
  } catch (error) {
    alert("Ошибка при отправке сообщения!");
    console.error("Error:", error);
  }
};
  return (
    <div id="priyom" className="w-full mt-10">
      <div ref={titleRef} className="p-14 mx-20 xl:mx-10 xl:px-5 nb:mx-5 lg:mx-8 priyom md:py-14 rounded-[14px]">
        <div className="flex justify-between items-start gap-10 nb:flex-col nb:items-center nb:gap-3">
          <h2 className="max-w-[536px] font-bold text-[48px] leading-[48px] ms:text-[34px] ms:leading-[34px] ms:text-start text-white nb:text-center">
            {t("button1")}
          </h2>
          <p className="max-w-[355px] font-normal text-xl text-white nb:text-center md:text-lg ms:text-start">
           {t("text2")}
          </p>
        </div>
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-between lg:justify-center gap-5 mt-16 nb:mt-10">
          <div className="flex flex-col space-y-4 min-w-[280px] max-w-[400px]">
            <div>
            
                <input
              type="text"
              className="w-full bg-[#F5F5F5] placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              name="name"
               id="name"
              value={formData.name}
              onChange={handleClick}
              placeholder={t("ism")}
              required
            />
            </div>

            <div>
           
                <input
              type="text"
              id="secondname"
              className="w-full bg-[#F5F5F5] placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder={t("familiya")}
              name="secondname"
              value={formData.secondname}
              onChange={handleClick}
              required
             
            />
              
            </div>
</div>
<div className="flex flex-col space-y-4 min-w-[280px] max-w-[400px]">
            <div>
            
               <input
              type="tel"
               id="tel"
                name="tel"
              className="w-full bg-[#F5F5F5] placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder={t("tel")}
              value={formData.tel}
              onChange={handlePhoneChange}
              required
            />
            </div>

            <div>
              <FormControl fullWidth className="bg-[#F5F5F5] rounded-md text-black">
                  <InputLabel id="select-label" className="text-black">{t("tanla")}</InputLabel>
                  <Select
                    labelId="select-label"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Выберите услуги" /> }
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
               </FormControl>
               
            </div>
</div>
<div className="flex flex-col space-y-4 min-w-[280px] max-w-[400px] justify-evenly">
            {/* Checkbox for privacy policy consent */}
            <div className='flex items-center'>
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
              <span className='text-white'>{t("roziman")}</span>
            </div>

         

          {/* Submit button */}
<button
  type="submit"
  className="w-full bg-[#A594F9] text-black text-sm border border-[#b3a6f2] rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
>
 {t("zayavka")}
</button>
 </div>
        </form>

      </div>
    </div>
  );
};

export default Priyom;
