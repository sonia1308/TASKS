import Image from "next/image";

const Subscription = () => {
  return (
    <>
    <div className="flex justify-center gap-20 mt-28 items-center    ">
    <Image src="/subscription.jpg" alt="Flowbite Logo" width={400} height={600} />
    <div className="flex flex-col gap-7">
        <h2 className="text-black text-6xl font-bold">Subscription Text</h2>
        <p className=" text-gray-600">A daily dataset to keep you up to date on <br /> subscription market trends and what's happening in <br /> your vertical.</p>
        <h6 className=" text-blue-500 font-bold"> Learn more
        </h6>
    </div>
    </div>


    <div className="flex justify-center gap-20 mt-28 items-center    ">
    
    <div className="flex flex-col gap-7">
        <h2 className="text-black text-6xl font-bold">In-depth metrics</h2>
        <p className=" text-gray-600">Accurate, real-time reporting at your fingertips. <br /> Getting data has never been easier.</p>
        <h6 className=" text-blue-500 font-bold"> Learn more
        </h6>
    </div><Image src="/indepth.jpg" alt="Flowbite Logo" width={400} height={600} />
    </div>
      </>
  );
};

export default Subscription;
