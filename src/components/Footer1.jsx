const Footer1 = () => {
  return (
    <section>
      <div className="md:w-full md:flex md:justify-around md:relative mt-[3rem] md:mt-[0rem] pb-[2rem]">
        <h1 className="md:w-[5rem] md:relative md:left-[19rem] font-extrabold flex justify-center items-center">
          <a href="">
            <span className="flex justify-center text-[5rem] md:text-[10rem] text-slate-500">
              02.
            </span>
            <span className="relative top-2.5 -left-5 md:-left-10 md:top-4 md:text-[2.5rem] text-slate-700">
              CLIMB
            </span>
          </a>
        </h1>
        <div className="md:relative md:top-[12rem] md:-left-[7rem] md:w-[59rem] md:px-[6rem]">
          <p className="text-xs md:text-sm px-[1.5rem] md:px-[0.5rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            impedit distinctio, aliquam animi laborum minus at, velit sit non
            accusamus magnam! Quis reprehenderit provident temporibus aliquam ex
            veniam earum officiis placeat repudiandae repellendus, in suscipit.
            Ex sint magnam rem placeat quisquam neque.
          </p>
        </div>
      </div>
      <div className="h-[2.5rem] bg-slate-600 ">
        <div className="md:relative md:left-[8.3rem] md:w-[35rem] flex justify-evenly">
          <div className="bg-gray-400">
            <p className="border-b-2 border-slate-800 text-slate-800">
              <a href="">MOUNTAIN 1</a>
            </p>
          </div>
          <div>
            <p className="border-b-2 border-gray-200 text-gray-200">
              <a href="">MOUNTAIN 2</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
