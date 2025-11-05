import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

const Why = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <div className="relative max-w-[664px] px-4 md:px-0 flex flex-col justify-center items-center mb-20 z-1">
        <div className="flex font-bold text-xl text-text gap-1">
          <span className="font-black text-xl text-primary">نظام فَنام؟</span>
          چرا پژوهشکده
        </div>
        <div dir="rtl" className="text-center mt-10">
          در دنیای پیچیده امروز، تصمیم‌گیری‌های فنی و اجرایی در پروژه‌های عمرانی
          و زیرساختی نیازمند پشتوانه علمی، تخصصی و تجربی است. پژوهشکده نظام فنی
          اجرایی و مهندسی کشور با بهره‌مندی از ظرفیت علمی دانشگاه صنعتی امیرکبیر
          (پلی‌تکنیک تهران) و تعامل مستمر با نهادهای اجرایی و بخش خصوصی،
          به‌عنوان حلقه اتصال میان دانش و صنعت، انتخابی مطمئن برای سازمان‌ها و
          نهادهای تصمیم‌ساز کشور است.
        </div>
        <div className="text-xl font-bold w-full text-right mt-20 mb-30">
          دلایل انتخاب ما
          <ul dir="rtl">
            <li className="flex gap-1 text-base font-normal mt-8">
              <p className="text-primary">1.</p>
              اعتبار علمی و ملی: وابستگی مستقیم به دانشگاه صنعتی امیرکبیر،
              به‌عنوان یکی از معتبرترین مراکز علمی کشور، پشتوانه‌ای قوی برای صحت
              علمی و فنی فعالیت‌هاست.
            </li>
            <li className="flex gap-1 text-base font-normal mt-2">
              <p className="text-primary">2.</p>
              رویکرد مسئله‌محور: تمرکز بر پژوهش‌ها و پروژه‌هایی که مستقیماً از
              چالش‌های واقعی صنعت و دستگاه‌های اجرایی کشور نشأت می‌گیرند.
            </li>
            <li className="flex gap-1 text-base font-normal mt-2">
              <p className="text-primary">3.</p>
              تجربه در تدوین مقررات و آیین‌نامه‌ها: سابقه همکاری با وزارتخانه‌ها
              و سازمان‌های ملی در بازنگری و تدوین اسناد بالادستی نظام فنی و
              اجرایی کشور.
            </li>
            <li className="flex gap-1 text-base font-normal mt-2">
              <p className="text-primary">4.</p>
              توان فناورانه: توسعه نرم‌افزارها و سامانه‌های مدیریتی تخصصی برای
              ارتقاء بهره‌وری، شفافیت و کنترل در پروژه‌های عمرانی و صنعتی.
            </li>
            <li className="flex gap-1 text-base font-normal mt-2">
              <p className="text-primary">5.</p>
              تیم بین‌رشته‌ای متخصص: حضور اعضای هیأت علمی، پژوهشگران و متخصصان
              با تجربه در حوزه‌های فنی، مدیریتی، حقوقی و اقتصادی.
            </li>
            <li className="flex gap-1 text-base font-normal mt-2">
              <p className="text-primary">6.</p>
              تعامل مؤثر با صنعت: همکاری گسترده با پیمانکاران، مشاوران و نهادهای
              حاکمیتی جهت تعریف و اجرای پروژه‌های مشترک.
            </li>
            <li className="flex gap-1 text-base font-normal mt-2">
              <p className="text-primary">7.</p>
              نگاه ملی و آینده‌نگر: تمرکز بر توسعه پایدار، استفاده از فناوری‌های
              نوین (BIM، AI، IoT و...) و انطباق با استانداردهای بین‌المللی.
            </li>
          </ul>
        </div>
        <div dir="rtl" className="text-[16px] text-right w-full mb-10">
          <p className="mb-2">پژوهشکده نظام فنی اجرایی و مهندسی کشور،</p>
          <p className="mb-2">
            با مأموریت{" "}
            <span className="font-bold">
              «ارتقاء نظام فنی اجرایی و مهندسی کشور از مسیر دانش، فناوری و
              تجربه»
            </span>
            ،
          </p>
          <p>همراه مطمئن شما در مسیر تحول صنعت احداث و زیرساخت ایران است.</p>
        </div>
        <Link to="/">
          <button className="group font-bold h-[40px] flex items-center relative overflow-hidden cursor-pointer transition-all duration-500 translate-x-5 gap-1 hover:-translate-x-3 hover:text-primary">
            بازگشت
            <span className="pr-1 transition-transform duration-500 group-hover:translate-x-0 translate-x-7 flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12L20.7071 12.7071L21.4142 12L20.7071 11.2929L20 12ZM5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13L5 12L5 11ZM14 18L14.7071 18.7071L20.7071 12.7071L20 12L19.2929 11.2929L13.2929 17.2929L14 18ZM20 12L20.7071 11.2929L14.7071 5.29289L14 6L13.2929 6.70711L19.2929 12.7071L20 12ZM20 12L20 11L5 11L5 12L5 13L20 13L20 12Z"
                  fill="#2C2CA9"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
      <div className="absolute left-0 top-9/10 bg-secondary h-60 w-12 z-0"></div>
    </div>
  );
};

export default Why;
