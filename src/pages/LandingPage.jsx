import { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import BackGroundHero from "../assets/Images/HeroSection/BG.svg";
import ArrowLeft from "../assets/Images/HeroSection/Arrow_left.svg";
import Member from "../components/Members";
import Records from "../components/Records";
import Works from "../components/Works";

import Shakeri from "../assets/Images/Members/Shakeri.png";
import Rahaei from "../assets/Images/Members/Rahaei.png";
import Kabir from "../assets/Images/Members/Kabir.png";
import Tahooni from "../assets/Images/Members/Tahooni.png";
import Moqadas from "../assets/Images/Members/Moqadas.png";
import Qoshooni from "../assets/Images/Members/Qoshooni.png";
import Shah from "../assets/Images/Members/Shah.png";
import Khosro from "../assets/Images/Members/Khosro.png";

import Iran from "../assets/Images/Partners/Iran.png";
import Gharar from "../assets/Images/Partners/Gharar.png";
import Azad from "../assets/Images/Partners/Azad.png";
import Park from "../assets/Images/Partners/Park.png";

import Concerete from "../assets/Images/Works/Concerete.png";

const LandingPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const members = [
    {
      name: "دکتر اقبال شاکری",
      role: "(رئیس پژوهشکده)",
      slogan:
        "“صنعت احداث، شریان اصلی تپش اقتصاد و بستر ساز توسعه همهجانبه یک کشور است”",
      image: Shakeri,
      records: {
        r1: "نماینده دوره هشتم مجلس شورای اسلامی",
        r2: "نماینده دوره هشتم مجلس شورای اسلامی",
        r3: "سوابق اضافی 1",
        r4: "سوابق اضافی 2",
      },
    },
    {
      name: "دکتر علیرضا رهایی",
      slogan:
        "“صنعت احداث، شریان اصلی تپش اقتصاد و بستر ساز توسعه همهجانبه یک کشور است”",
      image: Rahaei,
      records: {
        r1: "سوابق نمونه برای دکتر رهایی 1",
        r2: "سوابق نمونه برای دکتر رهایی 2",
        r3: "سوابق نمونه برای دکتر رهایی 3",
        r4: "سوابق نمونه برای دکتر رهایی 4",
      },
    },
    {
      name: "دکتر محمدزمان کبیر",
      slogan:
        "“صنعت احداث، شریان اصلی تپش اقتصاد و بستر ساز توسعه همهجانبه یک کشور است”",
      image: Kabir,
      records: {
        r1: "سوابق نمونه برای دکتر کبیر 1",
        r2: "سوابق نمونه برای دکتر کبیر 2",
        r3: "سوابق نمونه برای دکتر کبیر 3",
        r4: "سوابق نمونه برای دکتر کبیر 4",
      },
    },
    {
      name: "مهندس شاپور طاحونی",
      slogan:
        "“صنعت احداث، شریان اصلی تپش اقتصاد و بستر ساز توسعه همهجانبه یک کشور است”",
      image: Tahooni,
      records: {
        r1: "سوابق نمونه برای مهندس طاحونی 1",
        r2: "سوابق نمونه برای مهندس طاحونی 2",
        r3: "سوابق نمونه برای مهندس طاحونی 3",
        r4: "سوابق نمونه برای مهندس طاحونی 4",
      },
    },
    {
      name: "دکتر فریدون مقدس‌نژاد",
      slogan:
        "“صنعت احداث، شریان اصلی تپش اقتصاد و بستر ساز توسعه همهجانبه یک کشور است”",
      image: Moqadas,
      records: {
        r1: "سوابق نمونه برای دکتر مقدس‌نژاد 1",
        r2: "سوابق نمونه برای دکتر مقدس‌نژاد 2",
        r3: "سوابق نمونه برای دکتر مقدس‌نژاد 3",
        r4: "سوابق نمونه برای دکتر مقدس‌نژاد 4",
      },
    },
    {
      name: "دکتر انوار فارِس قشونی",
      slogan:
        "“صنعت احداث، شریان اصلی تپش اقتصاد و بستر ساز توسعه همهجانبه یک کشور است”",
      role: "(معاون پژوهشکده)",
      image: Qoshooni,
      records: {
        r1: "سوابق نمونه برای دکتر قشونی 1",
        r2: "سوابق نمونه برای دکتر قشونی 2",
        r3: "سوابق نمونه برای دکتر قشونی 3",
        r4: "سوابق نمونه برای دکتر قشونی 4",
      },
    },
    {
      name: "دکتر وحید شاه‌حسینی",
      slogan:
        "“صنعت احداث، شریان اصلی تپش اقتصاد و بستر ساز توسعه همهجانبه یک کشور است”",
      image: Shah,
      records: {
        r1: "سوابق نمونه برای دکتر شاه‌حسینی 1",
        r2: "سوابق نمونه برای دکتر شاه‌حسینی 2",
        r3: "سوابق نمونه برای دکتر شاه‌حسینی 3",
        r4: "سوابق نمونه برای دکتر شاه‌حسینی 4",
      },
    },
    {
      name: "مهندس مهدی رضی خسروشاهی",
      slogan:
        "“صنعت احداث، شریان اصلی تپش اقتصاد و بستر ساز توسعه همهجانبه یک کشور است”",
      image: Khosro,
      records: {
        r1: "سوابق نمونه برای مهندس خسروشاهی 1",
      },
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(false); // initial state: closed برای allow transition
    // بعد از render شدن، به open تغییر بده (microtask)
    requestAnimationFrame(() => {
      setIsModalOpen(true);
    });
  };

  const closeModal = () => {
    setIsModalOpen(false); // شروع animation بستن
    setTimeout(() => {
      setSelectedMember(null); // بعد از animation، حذف از DOM
    }, 300);
  };

  return (
    <div className="flex flex-col space-y-40 relative">
      {/*Main Div*/}
      <div className="relative">
        {/*Hero Section Div*/}
        <img
          src={BackGroundHero}
          className="z-0 h-[745px] w-full object-cover "
        />
        <Link to="/why-us">
          <button className="z-10 cursor-pointer absolute bottom-25 left-15/100 md:left-50/100 group overflow-hidden w-[220px] hover:w-[250px] transition-all duration-300 ease-out flex flex-col items-end bg-accent text-white hover:text-secondary">
            <span className="pt-2 pr-2">چرا</span>
            <span className="pb-2 pr-7 font-black text-base">
              پژوهشکده نظام فنام؟
            </span>
            <img
              src={ArrowLeft}
              alt="Arrow"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full group-hover:translate-x-4 transition-transform duration-300"
            />
          </button>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center space-x-4 pr-4 md:pr-30">
          <div className="h-2 flex-1 bg-primary" />
          <h1 className="w-fit font-black text-base xs:text-xl">
            اعضای شورای مرکزی پژوهشکده
          </h1>
        </div>
        <div className="flex flex-col items-center py-12 px-4">
          {members.map((member, index) => (
            <Member
              key={index}
              name={member.name}
              role={member.role || ""}
              slogan={member.slogan}
              image={member.image}
              onOpen={() => openModal(member)}
            />
          ))}
        </div>
      </div>

      {selectedMember && (
        <div
          className={`fixed h-screen inset-0 z-50 flex items-center justify-center p-4 transition-all duration-400 ease-out ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={closeModal}
        >
          {/* Modal Content - Slide up from bottom */}
          <div
            className={`relative w-full max-w-md bg-white transition-all duration-400 ease-out ${
              isModalOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-full scale-100 opacity-100 pointer-events-none"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Records
              name={selectedMember.name}
              role={selectedMember.role || ""}
              r1={selectedMember.records.r1}
              r2={selectedMember.records.r2}
              r3={selectedMember.records.r3}
              r4={selectedMember.records.r4}
              image={selectedMember.image}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
      {/* <div className="pb-0 mb-16">
        <div className="flex items-center space-x-4 pr-4 md:pr-30">
          <div className="h-2 flex-1 bg-primary" />
          <h1 className="w-fit font-black text-base xs:text-xl">
            طرح‌های اجرا شده
          </h1>
        </div>
        <div className="relative flex flex-col items-center my-6">
          <Works
            image={Concerete}
            title="بتن الیافی در سگمنتهای تونل"
            employer="قرارگاه سازندگی خاتم الأنبیاء"
          />
          <Works
            image={Concerete}
            title="بتن الیافی در سگمنتهای تونل"
            employer="قرارگاه سازندگی خاتم الأنبیاء"
          />
          <Works
            image={Concerete}
            title="بتن الیافی در سگمنتهای تونل"
            employer="قرارگاه سازندگی خاتم الأنبیاء"
          />
          <div className="z-0 absolute left-0 top-1/2 bg-secondary w-20 h-40" />
        </div>
      </div> */}
      <div className="relative flex flex-col items-center mb-20">
        <div className="flex items-center space-x-4 mb-10 w-full">
          <div className="h-2 flex-1 bg-primary" />
          <h1 className="w-fit font-black text-base xs:text-xl">
            شرح خدمات پژوهشکده
          </h1>
          <div className="h-2 flex-1 bg-white" />
        </div>
        <div className="flex flex-col justify-center max-w-[664px] items-end py-10 z-1">
          {/* first item */}
          <div dir="rtl" className="px-8 mb-12">
            <div className="flex items-center -space-x-6">
              <p className="font-bold text-[60px] text-secondary">1</p>
              <p className="font-bold text-xl z-0">
                نظام فنی اجرایی و مدیریت پروژه‌های عمرانی
              </p>
            </div>
            <ul>
              <li>
                . تدوین و بهبود استانداردهای اجرایی پروژه‌های عمرانی و زیربنایی
              </li>
              <li>
                . بررسی تأثیر روش‌های نوین مدیریت پروژه (PMBOK، PRINCE2 و BIM)
                در بهینه‌سازی پروژه‌های ساختمانی
              </li>
              <li>
                . ارزیابی و اصلاح فرآیندهای مناقصه، قراردادها، و مدیریت
                پیمانکاران در پروژه‌های دولتی و خصوصی
              </li>
              <li>
                . بررسی علل تأخیر و افزایش هزینه‌ها در پروژه‌های عمرانی و ارائه
                راهکارهای کاهش آن
              </li>
              <li>
                . تحقیق در زمینه مدل‌های نوین مشارکت بخش خصوصی و دولتی (PPP) در
                پروژه‌های زیربنایی
              </li>
            </ul>
          </div>
          {/* second item */}
          <div dir="rtl" className="px-8 mb-10">
            <div className="flex items-center -space-x-8">
              <p className="font-bold text-[60px] text-secondary">2</p>
              <p className="font-bold text-xl z-0">
                نظام مهندسی و استانداردسازی در صنعت ساختمان
              </p>
            </div>
            <ul>
              <li>
                . بررسی چالش‌های موجود در نظام مهندسی و ارائه راهکارهایی برای
                بهبود نظارت و اجرای مقررات ملی ساختمان
              </li>
              <li>
                . تدوین استانداردهای نوین برای کنترل کیفیت در مراحل طراحی، اجرا،
                و بهره‌برداری از ساختمان‌ها
              </li>
              <li>
                . پژوهش در زمینه ارزیابی عملکرد مهندسان ناظر و تأثیر آن بر کیفیت
                ساخت‌وساز
              </li>
              <li>
                . بهینه‌سازی مقررات ایمنی و مدیریت ریسک در پروژه‌های ساختمانی
              </li>
              <li>
                . بررسی تطبیقی مقررات نظام مهندسی ایران با سایر کشورها و پیشنهاد
                بهبود مقررات موجود
              </li>
            </ul>
          </div>
          {/* third item */}
          <div dir="rtl" className="px-8 mb-10">
            <div className="flex items-center -space-x-6">
              <p className="font-bold text-[60px] text-secondary">3</p>
              <p className="font-bold text-xl z-0">
                فناوری‌های نوین در ساختمان و مهندسی عمران
              </p>
            </div>
            <ul>
              <li>
                . کاربرد هوش مصنوعی و یادگیری ماشین در مدیریت پروژه‌های
                ساختمانی، کنترل کیفیت، و پیش‌بینی خرابی‌ها
              </li>
              <li>
                . استفاده از مدل‌سازی اطلاعات ساختمان (BIM) برای بهینه‌سازی
                طراحی، اجرا، و نگهداری پروژه‌ها
              </li>
              <li>
                . تحقیق درباره چاپ سه‌بعدی ساختمان‌ها و فناوری‌های نوین
                ساخت‌وساز
              </li>
              <li>
                . بررسی مصالح ساختمانی نوین و پایدار برای کاهش هزینه و افزایش
                بهره‌وری انرژی
              </li>
              <li>
                . طراحی و توسعه سیستم‌های ساختمانی مدولار و پیش‌ساخته برای
                افزایش سرعت و کیفیت اجرا
              </li>
            </ul>
          </div>
          {/* fourth item */}
          <div dir="rtl" className="px-8 mb-10">
            <div className="flex items-center -space-x-6">
              <p className="font-bold text-[60px] text-secondary">4</p>
              <p className="font-bold text-xl z-0">
                بهسازی، مقاوم‌سازی و مدیریت بحران در زیرساخت‌های شهری
              </p>
            </div>
            <ul>
              <li>
                . مطالعه روش‌های مقاوم‌سازی ساختمان‌های موجود در برابر زلزله و
                سایر مخاطرات طبیعی
              </li>
              <li>
                . پژوهش درباره پایداری و بهسازی خاک در پروژه‌های شهری و زیربنایی
              </li>
              <li>
                . طراحی سیستم‌های نوین مدیریت بحران در شهرهای هوشمند و
                زیرساخت‌های حیاتی
              </li>
              <li>
                . ارزیابی عملکرد سازه‌های مقاوم در برابر تغییرات اقلیمی و بلایای
                طبیعی
              </li>
              <li>
                . توسعه فناوری‌های نوین در زمینه ترمیم و نگهداری سازه‌های بتنی و
                فلزی
              </li>
            </ul>
          </div>
        </div>
        <Link to="/services">
          <button
            dir="ltr"
            className="group font-bold h-[40px] flex items-center relative overflow-hidden cursor-pointer transition-all duration-300 hover:translate-x-3 hover:text-primary"
          >
            <span className="pr-1 transition-transform duration-300 group-hover:translate-x-0 -translate-x-5 flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L3.29289 11.2929L2.58579 12L3.29289 12.7071L4 12ZM19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11V12V13ZM10 6L9.29289 5.29289L3.29289 11.2929L4 12L4.70711 12.7071L10.7071 6.70711L10 6ZM4 12L3.29289 12.7071L9.29289 18.7071L10 18L10.7071 17.2929L4.70711 11.2929L4 12ZM4 12V13H19V12V11H4V12Z"
                  fill="#2C2CA9"
                />
              </svg>
            </span>
            مشاهده سایر خدمات
          </button>
        </Link>
        <div className="absolute w-8 md:w-16 h-48 bg-primary right-0 top-1/2 z-0"></div>
      </div>
      <div className="my-20">
        <div className="flex items-center space-x-4 mb-10 w-full">
          <div className="h-2 flex-1 bg-white" />
          <h1 className="w-fit font-black text-base xs:text-xl">
            برندهای همکار پژوهشکده
          </h1>
          <div className="h-2 flex-1 bg-primary" />
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 place-items-center md:p-0 md:flex md:justify-around md:items-center my-20">
          <img src={Azad} className="max-h-40" />
          <img src={Gharar} className="max-h-40" />
          <img src={Park} className="max-h-40" />
          <img src={Iran} className="max-h-40" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-2">
          <div className="bg-secondary h-40 w-3/4 text-right font-bold text-xl pt-4 pr-4">
            <p>دلیل</p>
            <p>شکل‌گیری</p>
            <p>پژوهشکده؟</p>
          </div>
        </div>
        <div
          dir="rtl"
          className="flex-3 text-right mb- px-8 pt-8 md:pr-20 md:pt-40"
        >
          <p className="text-justify">
            با توجه به تحولات گسترده در صنعت احداث کشور و توسعه زیرساخت‌ها و
            پیچیده‌تر شدن نیازهای فنی، اجرایی و حقوقی این سرمایه‌گذاری‌ها،
            پژوهشکده نظام فنی اجرایی و مهندسی کشور به‌عنوان نهاد پژوهشی/تخصصی در
            دانشگاه صنعتی امیرکبیر (پلی تکنیک تهران) با تمرکز بر ارتقاء نظام فنی
            اجرائی و مهندسی کشور و با راهبرد تدوین، بازنگری و اصلاح مقررات،
            آیین‌نامه‌ها و دستورالعمل‌های نظام فنی اجرایی و مهندسی، اجرای
            پژوهش‌های مسئله‌محور، توسعه نرم‌افزارهای مدیریتی و طراحی راهکارهای
            فناورانه در پروژه‌های عمرانی و زیرساخت های کشور در ابتدای سال 1404
            تاسیس گردید. این پژوهشکده با اتکا به توان علمی و تخصصی دانشگاهیان
            (اساتید و دانشجویان) و با بهره‌مندی از امکانات و تجهیزات «دانشگاه
            صنعتی امیرکبیر»  و با مشارکت «چهره‌های شاخص ملی» در شورای پژوهشی
            پژوهشکده، در تلاش است تا پلی بین دانش و اجرا و تعاملی بین دانشگاه،
            صنعت، بخش خصوصی و نهادهای حاکمیتی ایجاد نموده و از طریق توسعه دانش
            فنی و ارائه راه‌حل‌های نوآورانه، در ارتقای کارآمدی و به‌روزرسانی
            نظام فنی اجرایی و مهندسی کشور نقش‌آفرینی نماید.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row mb-30">
        <div
          dir="rtl"
          className="flex-3 text-right px-8 pt-8 md:pr-20 md:pl-30 "
        >
          <ul className="text-justify">
            <li className="flex">
              <p className="text-primary font-bold">1.</p>
              <p className="text-white">0</p>
              پیاده سازی نظام فنی اجرایی یکپارچه کشور با تأکید بر بهره‌گیری از
              فناوری‌های نوین، تجربیات جهانی و بومی‌سازی استانداردها. ایجاد بانک
              اطلاعاتی یکپارچه از مقررات، استانداردها، فناوری‌ها، و ظرفیت‌های
              فنی کشور در حوزه ساخت‌وساز.
            </li>
            <li className="flex">
              <p className="text-primary font-bold">2.</p>
              <p className="text-white">0</p>
              ایجاد ارتباط مؤثر با دانشگاه‌ها، نظام مهندسی ساختمان، وزارت راه و
              شهرسازی و سایر نهادهای فنی و اجرایی.
            </li>
            <li className="flex">
              <p className="text-primary font-bold">3.</p>
              <p className="text-white">0</p>
              همکاری در تدوین و اصلاح آیین‌نامه‌ها، دستورالعمل‌ها و مقررات ملی
              در صنعت احداث.
            </li>
            <li className="flex">
              <p className="text-primary font-bold">4.</p>
              <p className="text-white">0</p>
              توانمندسازی سرمایه انسانی صنعت احداث از طریق برگزاری دوره‌های
              تخصصی، نشست‌های علمی و پروژه‌های پژوهشی.
            </li>
            <li className="flex">
              <p className="text-primary font-bold">5.</p>
              <p className="text-white">0</p>
              پشتیبانی از برنامه‌ریزی‌های کلان کشور در حوزه زیرساخت با تحلیل‌های
              فنی-اقتصادی، آینده‌پژوهی و پایش شاخص‌های توسعه.
            </li>
            <li className="flex">
              <p className="text-primary font-bold">6.</p>
              <p className="text-white">0</p>
              تمرکز بر حل چالش‌های ملموس صنعت با خروجی‌های کاربردی (نظیر کاهش
              زمان احداث، بهینه‌سازی هزینه‌ها و بهبود کیفیت).
            </li>
            <li className="flex">
              <p className="text-primary font-bold">7.</p>
              <p className="text-white">0</p>
              همکاری با هلدینگ‌های بزرگ، نهادهای سیاست‌گذار و مجموعه‌های اجرایی.
            </li>
          </ul>
        </div>
        <div className="md:flex-2 md:mt-40 ">
          <div className="bg-primary h-40 md:h-60 ml-20 md:ml-0 text-left text-white font-bold text-xl pt-8 pl-4">
            <p>دستیافتنی</p>
            <p>های</p>
            <p>پژوهشکده؟</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
