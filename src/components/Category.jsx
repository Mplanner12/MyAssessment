const Category = () => {
  return (
    <section className="mt-[1rem] px-[1.5rem]">
      <h1 className="font-semibold font-sans ">Category Breakdown</h1>
      <div className="mt-[0.75rem]">
        <div className="flex justify-between items-center py-[0.5rem]">
          <div>
            <img src="/Group5.png" alt="" width={40} />
          </div>
          <div className="p-[0.5rem]">
            <div className="flex-col justify-between relative -left-2">
              <p className="font-semibold font-sans text-[0.7rem] tracking-tight">
                Food and Drink
              </p>
              <p className="text-xs text-gray-400 font-medium">40%</p>
            </div>
          </div>
          <div className="text-xs">
            <p>
              {" "}
              <span className="font-semibold font-sans">₦20,000/</span>
              <span className="text-gray-400">₦42,000</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center py-[0.5rem] -mt-[0.75rem]">
          <div>
            <img src="/Group15.png" alt="" width={40} />
          </div>
          <div className="p-[0.5rem]">
            <div className="relative -left-7 flex-col justify-between">
              <p className="font-semibold font-sans text-[0.7rem] tracking-tight">
                Savings
              </p>
              <p className="text-xs text-gray-400 font-medium">40%</p>
            </div>
          </div>
          <div className="text-xs">
            <p>
              {" "}
              <span className="font-semibold font-sans">₦10,000/</span>
              <span className="text-gray-400">₦24,000</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
