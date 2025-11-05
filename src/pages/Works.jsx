import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

const Works = (props) => {
  return (
    <div className="flex flex-col items-center mt-32 mb-20 h-full">
      <div className="border flex flex-col items-center justify-center px-4 md:px-0 max-w-[664px]">
        <div className="flex flex-col items-center justify-center gap-y-4 max-w-[456px]">
          <img src={props.image} />
          <h1 className="font-bold text-xl text-center">{props.title}</h1>
          <div className="flex flex-col-reverse items-center md:flex-row gap-1">
            <p className="font-bold text-center">{props.name}</p>
            <p dir="rtl">کارفرما .</p>
          </div>
          <div className="flex gap-1">
            <p dir="rtl" className="font-bold">
              {props.date}
            </p>
            <p dir="rtl">تاریخ .</p>
          </div>
        </div>
        <div dir="rtl" className="text-justify my-20">
          {props.description}
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
    </div>
  );
};

export default Works;
