const Works = (props) => {
  return (
    <div className="max-w-[456px] flex flex-col justify-center items-center px-4 md:px-0 my-12 z-1">
      <img
        src={props.image}
        className="w-[456px] h-[280px] object-cover mb-6"
      />
      <div className="w-full text-right mb-10">
        <h1 className="font-bold text-xl pb-2">{props.title}</h1>
        <p className="text-base">
          کارفرما . <span className="font-bold">{props.employer}</span>
        </p>
      </div>
      <button className="px-4 py-1 text-white bg-text cursor-pointer hover:underline">
        اطلاعات طرح
      </button>
    </div>
  );
};

export default Works;
