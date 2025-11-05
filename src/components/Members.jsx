const Member = (props) => {
  const handleOpenRecords = () => {
    if (props.onOpen) {
      props.onOpen(); // صدا زدن callback برای باز کردن modal
    }
  };

  return (
    <div
      dir="rtl"
      className="flex flex-col md:flex-row my-8 max-w-[664px] p-2"
    >
      <div className="flex justify-center">
        <img src={props.image} className="w-[178px] md:w-[320px] object-contain" />
      </div>

      <div dir="ltr" className=" xs:px-4 flex-col justify-between items-start">
        <div className="flex flex-col space-y-4 items-end py-4">
          <div className="flex w-full justify-center md:justify-end">
            <h2 className="text-2xl font-bold text-center">
              {props.name}
              <span className="text-base">{props.role}</span>
            </h2>
          </div>
          <p dir="rtl" className="text-xl text-subtle text-center md:text-right">
            {props.slogan}
          </p>
        </div>
        <button
          onClick={handleOpenRecords} // اضافه کردن onClick
          className="group flex w-18 justify-between items-center text-xl cursor-pointer transition-all hover:w-20 hover:text-primary"
        >
          <svg
            width="6"
            height="7"
            viewBox="0 0 6 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.76995e-08 3.46411L6 9.60829e-06L6 6.92821L4.76995e-08 3.46411Z"
              fill="black"
              className="fill-current group-hover:fill-primary transition-colors duration-300"
            />
          </svg>
          سوابق
        </button>
      </div>
    </div>
  );
};

export default Member;
