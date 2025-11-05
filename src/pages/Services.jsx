import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="relative flex flex-col items-center mb-20">
      <div
        dir="rtl"
        className="w-full flex flex-col items-center justify-center mt-40 mb-12 z-1"
      >
        <div className="max-w-[680px]">
          <div className="text-center font-black text-xl text-primary mb-10">
            خدمات پژوهشکده
          </div>
          {/* 1 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-6">
              <p className="font-bold text-[60px] text-secondary">1</p>
              <p className="font-bold text-xl z-0">
                نظام فنی اجرایی و مدیریت پروژه‌های عمرانی
              </p>
            </div>
            <ul className="mt-4">
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
          {/* 2 */}
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
          {/* 3 */}
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
          {/* 4 */}
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
          {/* 5 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-6">
              <p className="font-bold text-[60px] text-secondary">5</p>
              <p className="font-bold text-xl z-0">
                ساختمان‌های هوشمند، مدیریت انرژی و توسعه پایدار
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . تحقیق در زمینه بهینه‌سازی مصرف انرژی در ساختمان‌ها از طریق
                فناوری‌های هوشمند
              </li>
              <li>
                . بررسی و توسعه سیستم‌های کنترل خودکار و اینترنت اشیا (IoT) در
                ساختمان‌ها
              </li>
              <li>
                . مطالعه در مورد توسعه انرژی‌های تجدیدپذیر در بخش ساختمان
                (پنل‌های خورشیدی، سیستم‌های تهویه طبیعی و...)
              </li>
              <li>
                . ارزیابی عملکرد ساختمان‌های سبز و پایدار در کاهش مصرف منابع و
                افزایش بهره‌وری انرژی
              </li>
              <li>
                . توسعه مدل‌های اقتصادی و تشویقی برای ترویج فناوری‌های سبز در
                صنعت ساختمان
              </li>
            </ul>
          </div>
          {/* 6 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-6">
              <p className="font-bold text-[60px] text-secondary">6</p>
              <p className="font-bold text-xl z-0">
                آموزش، ترویج و ارتباط صنعت و دانشگاه
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . طراحی دوره‌های آموزشی حرفه‌ای برای ارتقای سطح مهندسان و مدیران
                پروژه
              </li>
              <li>
                . راه‌اندازی پایگاه‌های داده و بانک‌های اطلاعاتی پژوهشی برای
                دسترسی به اطلاعات به‌روز مهندسی و اجرایی
              </li>
              <li>
                . ایجاد بسترهای همکاری میان دانشگاه، پژوهشکده و صنعت برای حل
                مسائل واقعی صنعت ساختمان
              </li>
              <li>
                . توسعه رویدادهای تخصصی، کنفرانس‌ها و نشست‌های علمی برای انتقال
                دانش و تجارب عملی
              </li>
              <li>
                . تدوین راهنماها و استانداردهای آموزشی برای مهندسان تازه‌کار و
                ارتقای مهارت‌های حرفه‌ای
              </li>
            </ul>
          </div>
          {/* 7 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-6">
              <p className="font-bold text-[60px] text-secondary">7</p>
              <p className="font-bold text-xl z-0">
                ارتباط نیازهای صنعت به دانشگاه (پایان‌نامه، رساله، پژوهشکده‌ها)
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . ایجاد شبکه‌های همکاری مؤثر میان دانشگاه‌ها و صنعت برای هدایت
                پایان‌نامه‌ها و رساله‌های دکتری به سمت حل مسائل واقعی صنعت
              </li>
              <li>
                . تعریف پروژه‌های پژوهشی مشترک با پژوهشکده‌های تخصصی برای ارتقای
                فناوری‌های نوین در صنعت ساختمان
              </li>
              <li>
                . برگزاری نشست‌های دوره‌ای میان صنعت و دانشگاه به‌منظور همگرایی
                اهداف پژوهشی و صنعتی
              </li>
              <li>
                . ایجاد بستر همکاری‌های کاربردی برای انتقال فناوری و دانش فنی
              </li>
              <li>
                . طراحی پروژه‌های پژوهشی مشترک میان صنعت و دانشگاه
                (پایان‌نامه‌ها، رساله‌ها و پژوهشکده‌ها)
              </li>
              <li>. توسعه شبکه‌های پژوهشی میان دانشگاه‌ها و صنایع بزرگ</li>
            </ul>
          </div>
          {/* 8 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-6">
              <p className="font-bold text-[60px] text-secondary">8</p>
              <p className="font-bold text-xl z-0">
                ساختمان‌های هوشمند، مدیریت انرژی و توسعه پایدار
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . تحقیق در زمینه بهینه‌سازی مصرف انرژی در ساختمان‌ها از طریق
                فناوری‌های هوشمند
              </li>
              <li>
                . بررسی و توسعه سیستم‌های کنترل خودکار و اینترنت اشیا (IoT) در
                ساختمان‌ها
              </li>
              <li>
                . مطالعه در مورد توسعه انرژی‌های تجدیدپذیر در بخش ساختمان
                (پنل‌های خورشیدی، سیستم‌های تهویه طبیعی و...)
              </li>
              <li>
                . ارزیابی عملکرد ساختمان‌های سبز و پایدار در کاهش مصرف منابع و
                افزایش بهره‌وری انرژی
              </li>
              <li>
                . توسعه مدل‌های اقتصادی و تشویقی برای ترویج فناوری‌های سبز در
                صنعت ساختمان
              </li>
            </ul>
          </div>
          {/* 9 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-6">
              <p className="font-bold text-[60px] text-secondary">9</p>
              <p className="font-bold text-xl z-0">
                معماری‌های نوین ساختمان و مسکن
              </p>
            </div>
            <ul className="mt-4">
              <li>. پژوهش در زمینه طراحی ساختمان‌های هوشمند و سبز</li>
              <li>
                . توسعه فناوری‌های مدولار و پیش‌ساخته برای افزایش سرعت اجرا.
              </li>
              <li>
                . بهره‌گیری از سیستم‌های کنترل خودکار و اینترنت اشیا (IoT) در
                ساختمان‌ها
              </li>
              <li>
                . طراحی مفاهیم معماری هوشمند و انعطاف‌پذیر برای افزایش بهره‌وری
                انرژی
              </li>
              <li>. پژوهش در حوزه معماری پایدار و سازگار با محیط زیست</li>
              <li>
                . معرفی فناوری‌های مدرن در طراحی و اجرای ساختمان‌های مسکونی
                مقرون‌به‌صرفه
              </li>
            </ul>
          </div>
          {/* 10 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-10">
              <p className="font-bold text-[60px] text-secondary">10</p>
              <p className="font-bold text-xl z-0">
                حضور بخش خصوصی در ارکان نظام فنی اجرایی
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . تحلیل موانع مشارکت بخش خصوصی و ارائه راهکارهای عملی برای رفع
                آنها
              </li>
              <li>
                . ترویج مدل‌های تأمین مالی مشارکتی (PPP) برای پروژه‌های زیربنایی
              </li>
              <li>
                . طراحی سازوکارهای تشویقی برای جذب سرمایه‌گذاری بخش خصوصی در
                پروژه‌های کلان
              </li>
              <li>
                . بررسی مدل‌های مشارکت بخش خصوصی و دولتی (PPP) در پروژه‌های
                زیربنایی
              </li>
              <li>. تدوین سیاست‌های جذب سرمایه‌های خصوصی در بخش عمرانی</li>
            </ul>
          </div>
          {/* 11 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-10">
              <p className="font-bold text-[60px] text-secondary">11</p>
              <p className="font-bold text-xl z-0">
                اسناد و مدارک پیمان و قراردادهای همسان
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . تحلیل و به‌روزرسانی قراردادهای همسان بر اساس تجربیات
                بین‌المللی
              </li>
              <li>
                . تدوین استانداردهای جدید برای کاهش اختلافات حقوقی در پروژه‌های
                عمرانی
              </li>
              <li>
                . برگزاری کارگاه‌های تخصصی برای آموزش تنظیم و مدیریت قراردادها
              </li>
            </ul>
          </div>
          {/* 12 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-10">
              <p className="font-bold text-[60px] text-secondary">12</p>
              <p className="font-bold text-xl z-0">تأمین مالی پروژه‌ها</p>
            </div>
            <ul className="mt-4">
              <li>
                . بررسی روش‌های نوین تأمین مالی پروژه‌ها شامل اوراق بهادارسازی و
                بازار سرمایه
              </li>
              <li>
                . تحلیل نقش بازارهای غیررسمی و تأثیر آنها بر توسعه پروژه‌های
                عمرانی
              </li>
              <li>
                . پیشنهاد سیاست‌های مالی پایدار برای تأمین بودجه پروژه‌های
                زیرساختی
              </li>
              <li>
                . تحلیل روش‌های تامین مالی رسمی و غیررسمی در بازار پروژه‌های
                عمرانی
              </li>
              <li>. توسعه ابزارهای نوین مالی برای پروژه‌های زیرساختی</li>
            </ul>
          </div>
          {/* 13 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-12">
              <p className="font-bold text-[60px] text-secondary">13</p>
              <p className="font-bold text-xl z-0">
                کارآموزی و کسب مهارت دانشجویان در صنعت
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . طراحی برنامه‌های کارآموزی تخصصی در پروژه‌های عمرانی و صنعتی
              </li>
              <li>. ایجاد دوره‌های مهارتی مبتنی بر نیازهای بازار کار</li>
              <li>
                . همکاری با شرکت‌های پیشرو برای فراهم‌سازی فرصت‌های یادگیری عملی
                برای دانشجویان
              </li>
            </ul>
          </div>
          {/* 14 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-12">
              <p className="font-bold text-[60px] text-secondary">14</p>
              <p className="font-bold text-xl z-0">
                بازآفرینی مناطق فرسوده و غیررسمی
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . مطالعه و تدوین راهکارهای بازآفرینی شهری با رویکرد توسعه پایدار
              </li>
              <li>
                . ارائه مدل‌های مالی و اجرایی برای بازسازی بافت‌های فرسوده
              </li>
              <li>
                . استفاده از فناوری‌های نوین در فرآیند بازسازی و مقاوم‌سازی
                مناطق آسیب‌پذیر
              </li>
              <li>. پژوهش درباره راهکارهای نوین بازآفرینی مناطق شهری فرسوده</li>
              <li>
                . ارائه طرح‌های اجرایی برای ارتقاء کیفیت زندگی در مناطق غیررسمی
              </li>
            </ul>
          </div>
          {/* 15 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-12">
              <p className="font-bold text-[60px] text-secondary">15</p>
              <p className="font-bold text-xl z-0">
                بررسی دروس دانشگاهی مرتبط (مدیریت ساخت، مدیریت پروژه)
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . بازنگری و به‌روزرسانی محتوای دروس دانشگاهی بر اساس نیازهای
                صنعت
              </li>
              <li>
                . ادغام فناوری‌های جدید مانند BIM و هوش مصنوعی در محتوای درسی
              </li>
              <li>
                . طراحی دوره‌های تخصصی و میان‌رشته‌ای برای پر کردن خلأهای مهارتی
              </li>
              <li>
                . تحلیل اثربخشی دروس مدیریت ساخت و مدیریت پروژه در تربیت نیروی
                انسانی متخصص
              </li>
              <li>. ارائه پیشنهادهای اصلاحی برای بهبود برنامه‌های آموزشی</li>
            </ul>
          </div>
          {/* 16 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-12">
              <p className="font-bold text-[60px] text-secondary">16</p>
              <p className="font-bold text-xl z-0">
                پروژه‌های زیرساختی (سد، معدن، تونل، دریایی و بندری، نفت و گاز)
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . ارائه راهکارهای نوآورانه برای افزایش بهره‌وری و ایمنی
                پروژه‌های زیرساختی
              </li>
              <li>
                . تدوین دستورالعمل‌های فنی و اجرایی برای پروژه‌های حساس ملی
              </li>
              <li>
                . توسعه مطالعات تخصصی در حوزه سد، معدن، تونل، دریایی و بندری
              </li>
              <li>
                . تحقیق و توسعه در حوزه طراحی و اجرای پروژه‌های زیرساختی حیاتی
              </li>
              <li>. بررسی پروژه‌های نفت و گاز، پتروشیمی و سکوهای دریایی</li>
            </ul>
          </div>
          {/* 17 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-12">
              <p className="font-bold text-[60px] text-secondary">17</p>
              <p className="font-bold text-xl z-0">پدافند غیرعامل</p>
            </div>
            <ul className="mt-4">
              <li>
                . شناسایی تهدیدات و آسیب‌پذیری‌های زیرساخت‌های شهری و عمرانی
              </li>
              <li>
                . تدوین استانداردهای پدافند غیرعامل برای پروژه‌های عمرانی و
                ساختمانی
              </li>
              <li>
                . آموزش و ترویج فرهنگ پدافند غیرعامل در میان مهندسان و مدیران
                پروژه
              </li>
              <li>. ارزیابی زیرساخت‌های شهری از منظر پدافند غیرعامل</li>
              <li>
                . تدوین راهکارهای مقاوم‌سازی برای مقابله با تهدیدات احتمالی
              </li>
            </ul>
          </div>
          {/* 18 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-12">
              <p className="font-bold text-[60px] text-secondary">18</p>
              <p className="font-bold text-xl z-0">
                دوره‌های آموزشی عمومی و منحصر به‌فرد
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . طراحی دوره‌های تخصصی در حوزه‌های مدیریت ساخت، فناوری‌های نوین
                و پدافند غیرعامل
              </li>
              <li>
                . ارائه گواهینامه‌های معتبر برای دوره‌های آموزشی به‌منظور ارتقای
                مهارت‌های حرفه‌ای
              </li>
              <li>
                . همکاری با سازمان‌های ملی و بین‌المللی برای اعتباربخشی به
                دوره‌ها
              </li>
            </ul>
          </div>
          {/* 19 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-12">
              <p className="font-bold text-[60px] text-secondary">19</p>
              <p className="font-bold text-xl z-0">
                تعمیر و نگهداری زیرساخت‌ها
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . توسعه روش‌های نوین برای پایش و نگهداری زیرساخت‌های عمرانی
              </li>
              <li>
                . توسعه روش‌های نوین برای پایش و نگهداری زیرساخت‌های عمرانی
              </li>
              <li>
                . ارائه مدل‌های اقتصادی برای بهینه‌سازی هزینه‌های تعمیر و
                نگهداری
              </li>
            </ul>
          </div>
          {/* 20 */}
          <div dir="rtl" className="px-8 mb-16">
            <div className="flex items-center -space-x-12">
              <p className="font-bold text-[60px] text-secondary">20</p>
              <p className="font-bold text-xl z-0">
                پروژه‌های صنعتی و نفتی، سکوهای دریایی و پتروشیمی
              </p>
            </div>
            <ul className="mt-4">
              <li>
                . تحقیق در زمینه طراحی، ساخت و نگهداری سکوهای دریایی و تأسیسات
                پتروشیمی
              </li>
              <li>. توسعه فناوری‌های مقاوم در برابر شرایط سخت محیطی</li>
              <li>
                . بهبود فرآیندهای تعمیر و نگهداری تأسیسات نفت و گاز برای افزایش
                طول عمر آنها
              </li>
              <li>. طراحی سیستم‌های نوین تعمیر و نگهداری پروژه‌های صنعتی</li>
            </ul>
          </div>
        </div>
        <Link to="/">
          <button
            dir="ltr"
            className="group font-bold h-[40px] flex items-center relative overflow-hidden cursor-pointer transition-all duration-500 translate-x-5 gap-1 hover:-translate-x-3 hover:text-primary"
          >
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
      <div className="absolute top-3/4 left-0 w-12 md:w-20 h-80 bg-secondary z-0"></div>
      <div className="absolute top-1/3 right-0 w-6 md:w-16 h-80 bg-primary z-0"></div>
    </div>
  );
};

export default Services;
