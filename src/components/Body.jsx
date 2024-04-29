// import React from 'react'

const Body = () => {
  return (
    <section className="w-full bg-[url('/body.png')] md:bg-cover h-[25rem] md:h-[35rem]">
      <div className="md:w-full md:flex md:justify-around md:relative">
        <h1 className="md:w-[5rem] md:relative md:left-[19rem] font-extrabold flex justify-center items-center">
          <a href="">
            <span className="flex justify-center text-[5rem] md:text-[10rem] text-slate-500">
              01.
            </span>
          </a>
          <a href="">
            <span className="relative top-2.5 -left-5 md:-left-10 md:top-4 md:text-[2.5rem] text-slate-700">
              HISTORY
            </span>{" "}
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
      <div className="relative md:top-[9.35rem] top-[8rem] md:px-[11.5rem] w-fit md:w-full h-[1.5rem] md:h-fit bg-[url('/rect.png')] flex justify-between">
        <div>
          <img src="/1st.png" alt="" />
        </div>
        <div>
          <img src="/2nd.png" alt="" />
        </div>
        <div>
          <img src="1st.png" alt="" />
        </div>
        <div>
          <img src="2nd.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Body;
