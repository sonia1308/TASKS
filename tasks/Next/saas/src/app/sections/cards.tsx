import Image from "next/image";

const Cards = () => {
  return (
    <>
      <div className="flex justify-between mt-28 w-5/6 mx-32">
        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <Image
            src="/benchmarks.jpg"
            alt="Flowbite Logo"
            width={100}
            height={40}
          />
          <h3 className=" text-black font-bold">Benchmarks</h3>
          <p className="text-gray-500">
            See how you stack up against comparable <br /> companies in similar
            stages.
          </p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <Image
            src="/pricingaudit.jpg"
            alt="Flowbite Logo"
            width={100}
            height={40}
          />
          <h3 className=" text-black font-bold">Pricing Audit</h3>
          <p className="text-gray-500">
          Benchmark the health of your monetization <br /> and pricing strategy.
          </p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <Image
            src="/retentionaudit.jpg"
            alt="Flowbite Logo"
            width={100}
            height={40}
          />
          <h3 className=" text-black font-bold">Retention Audit</h3>
          <p className="text-gray-500">
          Audit where revenue leakage exists and <br />where you can increase retention.
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
