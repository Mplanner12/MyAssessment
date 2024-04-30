import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Spending = () => {
  return (
    <div className="mt-[0.45rem]">
      <div className="flex justify-around">
        <div>
          <p className="text-xs">Last Month</p>
        </div>
        <div>
          <p className="text-xs relative -left-[1rem] text-blue-600 font-semibold">
            This Month
          </p>
          <div className="relative -left-3 top-2 w-[2rem] h-0.5 bg-blue-500"></div>
        </div>
        <div className="">
          <a href="">
            <HiOutlineDotsHorizontal />
          </a>
        </div>
      </div>
      <div className="mt-[2rem] flex-col justify-between ">
        <div className="flex justify-center">
          <img src="Group41.png" alt="" width={105} />
        </div>
        <div className="flex justify-center">
          <div className="mt-[1rem]">
            <p className="p-[0.45rem] text-[0.65rem] text-center text-gray-500">
              Amount spent so far
            </p>
            <p className="text-blue-600 font-semibold text-[0.75rem]">
              ₦50,000/ <span className="text-blue-400">₦120,000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spending;
