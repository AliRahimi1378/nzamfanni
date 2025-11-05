const Records = (props) => {
  const handleClose = () => {
    if (props.onClose) {
      props.onClose(); // صدا زدن callback برای بستن modal
    }
  };

  return (
    <div className="flex flex-col p-4 min-h-[400px]">
      {" "}
      {/* min-h برای ارتفاع مناسب */}
      <div className="flex items-start">
        <button onClick={handleClose} className="cursor-pointer">
          {" "}
          {/* اضافه کردن onClick */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#222222"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#222222"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center p-4">
        <img
          src={props.image}
          className="w-[178px] object-contain"
          alt={props.name}
        />
        <div className="flex flex-col items-center space-y-4 py-4">
          <h2 dir="rtl" className="text-xl font-bold">
            {props.name}
            <span className="text-base">{props.role}</span>
          </h2>
          <ol
            dir="rtl"
            className="flex flex-col text-base text-text items-center space-y-2" // space-y اضافه برای فاصله liها
          >
            <li>{props.r1}</li>
            <li>{props.r2}</li>
            <li>{props.r3 || ""}</li> {/* اگر r3 خالی باشد، نمایش خالی */}
            <li>{props.r4 || ""}</li> {/* اگر r4 خالی باشد، نمایش خالی */}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Records;
