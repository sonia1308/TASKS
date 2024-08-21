import React from "react";

const Header = () => {
  return (
    <>
      <header className="absolute inset-0 bg-light dark:bg-dark bg-cover opacity-50 dark:opacity-50  z-0"></header>
      <div className="dark:absolute dark:inset-0 dark:bg-black dark:opacity-75"></div>
      <header className="relative z-10 p-4 ">
        <p className="text-black dark:text-white text-center text-5xl font-bold">
          Todo List
        </p>
      </header>{" "}
    </>
  );
};

export default Header;
