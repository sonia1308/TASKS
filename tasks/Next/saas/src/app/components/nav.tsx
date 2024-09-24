
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-5/6 mx-32 top-0 left-0  ">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">   
          <Image 
            src="/logo.jpg"  
            alt="Flowbite Logo" 
            width={200} 
            height={100} 
          />
        <div className="flex ">
          
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
    
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
          <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  ">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  ">Features</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  ">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  ">Blog</a>
            </li>
          </ul>
        </div><button
            type="button"
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4"
          >
            Get started
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
