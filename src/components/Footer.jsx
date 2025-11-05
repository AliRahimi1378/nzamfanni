import { Link, BrowserRouter } from "react-router-dom";

import Logo from "../assets/Images/Footer/Logo.svg";
import Amir from "../assets/Images/Footer/Amir.svg";

const Footer = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Optional: Add a brief visual feedback here if desired (e.g., toast notification)
        console.log("Copied to clipboard:", text);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-between bg-text text-white
      px-4 py-8 md:px-20 lg:px-40"
    >
      <div className="flex flex-col justify-between space-y-2 w-auto min-w-48">
        <div className="flex flex-row md:flex-col h-full justify-between items-center md:items-start mb-4 md:mb-0">
          <div className="flex flex-col items-start space-y-1">
            <p className="text-xs">تماس</p>
            <p
              className="text-base font-bold hover:text-secondary cursor-pointer transition-colors duration-200"
              onClick={() => copyToClipboard("0912 199 1758")}
            >
              0912 199 1758
            </p>
            <p
              className="text-base font-bold hover:text-secondary cursor-pointer transition-colors duration-200"
              onClick={() => copyToClipboard("021 64545831")}
            >
              021 64545831
            </p>
          </div>
          <a href="https://www.linkedin.com/company/109380054/admin/dashboard/" target="_blank">
            <button className="group flex flex-row-reverse font-bold transition duration-300 ease-out hover:text-primary cursor-pointer">
              لینکدین پژوهشکده
              <div className="rounded rounded-sm text-text bg-white h-6 w-6 flex items-end justify-center font-bold mr-2 transition duration-300 ease-out group-hover:text-white group-hover:bg-primary">
                <p className="m-0 -mb-0.5">in</p>
              </div>
            </button>
          </a>
        </div>
        <div className="text-center visible md:invisible text-xs mb-2">
          طراحی توسط تیم نرم‌افزاری پژوهشکده
        </div>
        <div className="visible md:invisible bg-white text-[10px] text-text text-center">
          تمام حقوق محفوظ است ©
        </div>
      </div>
      <div className="flex flex-col justify-between items-center -mb-10 mt-8 md:mb-0 md:mt-0">
        <div className="text-center mb-4">
          <p className="text-sm">آدرس</p>
          <p className="font-medium max-w-[380px]">
            خیابان حافظ - روبروی خیابان سمیه - دانشگاه صنعتی امیرکبیر - ساختمان
            فارابی - طبقه سوم
          </p>
        </div>
        <div className="text-center mb-10">
          <p className="text-sm">ایمیل</p>
          <p className="font-medium max-w-[380px]">nezamfanni@aut.ac.ir</p>
        </div>
        <div className="invisible md:visible text-xs mb-2">
          طراحی توسط تیم نرم‌افزاری پژوهشکده
        </div>
        <div className="invisible md:visible min-w-[240px] bg-white text-[10px] text-text text-center">
          تمام حقوق محفوظ است ©
        </div>
      </div>
      <div className="w-full md:w-44 flex items-center flex-row-reverse md:flex-col justify-between w-44 md:items-end">
        <img src={Logo} className="w-[90px] md:w-[69px]" />
        <a href="https://aut.ac.ir/" target="_blank">
          <img src={Amir} className="w-[69px]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
