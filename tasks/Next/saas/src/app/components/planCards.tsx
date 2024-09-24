"use client";

const PlanCards = () => {
  return (
    <>
      <div className="my-14 flex gap-2 rounded-md  justify-center items-center" role="group">
        <div
          tabIndex={0}
          className="flex justify-center py-5 flex-col px-10 items-center gap-8 group  text-sm font-medium bg-gray-100 text-gray-900 bg-transparent border border-gray-900 rounded-xl hover:bg-gray-900 focus:bg-orange-500 focus:text-white dark:border-white dark:hover:bg-gray-200 dark:focus:bg-orange-500 focus:py-10 focus:px-14"
        >
          <h4>Starter</h4>
          <h2 className="font-bold text-6xl">Free</h2>
          <p>1 Website</p>
          <p>5 GB Hosting</p>
          <p>Limited Support</p>
          <button  onClick={(e) => e.currentTarget.parentElement?.focus()} className="bg-white text-blue-600 px-20 rounded-xl group-focus:bg-orange-700 group-focus:text-white py-4">
            Get Started
          </button>
        </div>
        <div
          tabIndex={0}
          className="flex justify-center py-5 flex-col px-10 items-center gap-8 group  text-sm font-medium bg-gray-100 text-gray-900 bg-transparent border border-gray-900 rounded-xl hover:bg-gray-900 focus:bg-orange-500 focus:text-white dark:border-white dark:hover:bg-gray-200 dark:focus:bg-orange-500 focus:py-10 focus:px-14"
        >
          <h4>Premium</h4>
          <h2 className="font-bold text-6xl">$29/<span className="text-4xl">month</span></h2>
          <p>10 Website</p>
          <p>15 GB Hosting</p>
          <p>Premium Support</p>
          <button  onClick={(e) => e.currentTarget.parentElement?.focus()} className="bg-white text-blue-600 px-20 rounded-xl group-focus:bg-orange-700 group-focus:text-white py-4">
            Get Started
          </button>
        </div>
        <div
          tabIndex={0}
          className="flex justify-center py-5 flex-col px-10 items-center gap-8 group  text-sm font-medium bg-gray-100 text-gray-900 bg-transparent border border-gray-900 rounded-xl hover:bg-gray-900 focus:bg-orange-500 focus:text-white dark:border-white dark:hover:bg-gray-200 dark:focus:bg-orange-500 focus:py-10 focus:px-14"
        >
          <h4>Enterprise</h4>
          <h2 className="font-bold text-6xl">$49/<span className="text-4xl">month</span></h2>
          <p>Unlimited Website</p>
          <p>50 GB Hosting</p>
          <p>Premium Support</p>
          <button  onClick={(e) => e.currentTarget.parentElement?.focus()} className="bg-white text-blue-600 px-20 rounded-xl group-focus:bg-orange-700 group-focus:text-white py-4">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default PlanCards;
