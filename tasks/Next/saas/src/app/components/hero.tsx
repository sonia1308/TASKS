import Image from "next/image";

const Hero = () => {
  return (
    <>
    <div className="flex  my-64 w-5/6 mx-32 ">
      <div className="flex flex-col gap-11 justify-center">
        <h2 className="text-8xl text-black font-bold">Grow your subscription Business</h2>
        <h5 className="text-gray-600">
          Outcome-centered products that reduce churn, 
        </h5>
        <div>
        <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-4"
          >
            Get started
          </button>  </div>
      </div>
      <Image src="/Hero.jpg" alt="Flowbite Logo" width={600} height={800} />
    </div>
   
    <div className="flex w-5/6 mx-32 justify-between "> 
     <Image src="/Group.jpg" alt="Flowbite Logo" width={120} height={30} className="h-max w-28" />
    <Image src="/Group2.jpg" alt="Flowbite Logo" width={120} height={30} className="h-max w-28" />
    <Image src="/Group3.jpg" alt="Flowbite Logo" width={120} height={30} className="h-max w-28" />
    <Image src="/Group4.jpg" alt="Flowbite Logo" width={120} height={30} className="h-max w-28" />
    <Image src="/Group5.jpg" alt="Flowbite Logo" width={120} height={30} className="h-max w-28" />
    </div>
      </>
  );
};

export default Hero;
