const Budget = () => {
  return (
    <section>
      <div className="px-[2rem] py-[1rem]">
        <h1 className="font-bold text-2xl font-sans">Budget</h1>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div className="mt-[1.7rem] flex justify-between w-fit space-x-3">
            <div>
              <img src="Group14.png" alt="" width={16} />
            </div>
            <p className="relative -top-0.5 text-xs">Monthly Budget</p>
          </div>
        </div>
        <div className="bg-white rounded-md p-[0.5rem] px-[1rem] mt-[0.5rem]">
          <p className="font-bold text-xl font-sans">₦120,000</p>
        </div>
      </div>
    </section>
  );
};

export default Budget;
