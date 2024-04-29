// import SubFilter from "./SubFilter";
// import { HiOutlineXMark } from "react-icons/hi2";

const Subscription = () => {
  return (
    <section className="mb-[4rem] bg-[url('/hero.png')] md:bg-cover h-[25rem] md:h-[35rem]">
      <div className="m-0">
        <nav className="list-none p-[1rem] h-[3rem] flex justify-between">
          <li className="relative p-[1rem] md:left-[7rem]">
            <a
              href="
            "
            >
              <img src="/logo.png" alt="logo" />
            </a>
          </li>
          <ul className="relative md:-left-[10rem] w-fit flex justify-end text-white text-xs md:text-sm">
            <li className="px-[1rem]">
              <a href="">
                <p className="border-b-2">01. HISTORY</p>
              </a>
            </li>
            <li className="px-[1rem]">
              <a href="">
                <p className="border-b-2">02. TEAM</p>
              </a>
            </li>
          </ul>
        </nav>
        <div className="relative flex justify-center top-[7.5rem] md:top-[13.5rem] md:-left-6">
          <h1 className=" font-extrabold leading-8 text-4xl md:text-7xl">
            <span className="text-slate-700">LOSANGELES</span>
            <br />
            <span className="text-sky-900">MOUNTAINS</span>
          </h1>
        </div>
      </div>
      <div className="md:p-[1.5rem] md:pb-[2rem] pt-[3rem] md:pt-[3.5rem] items-center w-full bg-white flex justify-between relative top-[17rem] md:top-[23rem] h-[2rem]">
        <div className="flex justify-center">
          <div className="p-[1rem] md:p-[1rem]">
            <img src="/logo.png" alt="logo" />
          </div>
          <h1 className="-left-[1rem] md:left-0 font-extrabold text-md md:text-3xl relative md:-top-[1rem] leading-4">
            <span className="text-slate-700">LOSANGELES</span>
            <br />
            <span className="text-sky-900">MOUNTAINS</span>
          </h1>
        </div>

        <div>
          <ul className="md:w-full md:relative md:left-[0rem] flex justify-center text-black text-xs md:text-sm pb-[1rem]">
            <li className="w-fit px-0 md:px-[1rem]">
              <p className="md:w-[5rem] border-b-2 border-gray-700 text-[0.6rem] md:text-sm">
                <a href="">01. HISTORY</a>
              </p>
            </li>
            <li className="w-fit md:px-[1rem]">
              <p className="border-b-2 border-gray-700  text-[0.6rem] md:text-sm">
                <a href="">02. TEAM</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
