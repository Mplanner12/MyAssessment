const Footer3 = () => {
  return (
    <section className="relative top-0">
      <div className="h-fit p-[0rem] flex justify-around bg-slate-800">
        <div className="flex justify-center">
          <div className="relative p-[1rem]">
            <img src="/logo.png" alt="logo" />
          </div>
          <h1 className=" font-extrabold text-lg md:text-2xl">
            <span className="text-gray-600">LOSANGELES</span>
            <br />
            <span className="text-gray-600">MOUNTAINS</span>
          </h1>
        </div>
        <div className="text-gray-600 text-xs md:text-sm font-bold">
          <p className="py-[1.25rem]">COPYWRITE ALL RIGHTS RESRVED</p>
        </div>
      </div>
    </section>
  );
};

export default Footer3;
