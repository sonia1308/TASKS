const Form = () => {
  return (
    <>
      <form className="max-w-[600px]  w-fit p-4 mt-10 overlay" id="search-form">
        <div className="relative">
          <input
            type="text"
            id="search"
            className="w-full h-12 shadow-md p-4 rounded-2xl bg-white focus:outline-none dark:bg-opacity-0 dark:text-white bg-opacity-80 text-gray-800 border-none"
            placeholder="Search"
            autoComplete="off"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-4"
            id="search-btn"
          >
            <i className="fa-solid fa-magnifying-glass text-gray-500 hover:text-gray-700 dark:hover:text-white"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
