import React from "react";

export default function Hero(props) {
  return (
    <>
      <div className="absolute h-screen w-screen bg-[radial-gradient(#00091d33_1px,#ffffff1a_1px)] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:40px_40px] dark:bg-[size:40px_40px]"></div>
      <div className="h-screen">
        <header>
          <input
            type="checkbox"
            name="hbr"
            id="hbr"
            className="hbr peer"
            hidden
            aria-hidden="true"
          />
          <nav className="fixed z-20 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
            <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
              <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                <div className="w-full items-center flex justify-between lg:w-auto">
                  <a className="relative z-10" href="#" aria-label="logo">
                    <img
                      src="./images/logo-vert.svg"
                      alt="logo tailus"
                      width="100"
                      height="42"
                      className="w-32 dark:brightness-200 dark:grayscale"
                    />
                  </a>
                  <label
                    for="hbr"
                    className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                  >
                    <div
                      aria-hidden="true"
                      className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                  </label>
                </div>
                <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-900/80 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                  <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Portfolio</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Services</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Contact</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                    <a
                      href="#"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-primary dark:text-gray-400">
                        Devis gratuit
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative pt-40 pb-20 lg:pt-44">
          <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
            <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-[#3C0858] text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
              Transformez votre vision
              <br className="lg:block hidden" />{" "}
              <span className="relative bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent dark:from-stone-700 dark:via-emerald-500 dark:to-gray-400">
                en réalité digitale
              </span>
              .
            </h1>
            <div className="lg:flex">
              <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                  De la conception à la réalisation, nous donnons vie à vos
                  projets numériques avec passion et précision.
                </p>
                <span className="block font-semibold text-gray-500 dark:text-gray-400">
                  Votre expert en développement web et mobile.
                </span>
                <div className="grid grid-cols-2 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                  <a
                    aria-label="add to slack"
                    href="#"
                    className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                  >
                    <div className="flex justify-center items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="fill-black dark:fill-white w-8 h-8"
                      >
                        <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm3 4h8v2H8V9zm0 4h5v2H8v-2z" />
                      </svg>
                      <span className="font-medium dark:text-white">
                        Devis gratuit
                      </span>
                    </div>
                  </a>
                  <a
                    aria-label="add to chat"
                    href="#"
                    className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
                  >
                    <div className="flex justify-center items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="fill-black dark:fill-white w-8 h-8"
                      >
                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-12H11v5h3V7zm-4 7h2v2H9v-2z" />
                      </svg>

                      <span className=" font-medium dark:text-white">
                        Prendre RDV
                      </span>
                    </div>
                  </a>
                </div>
                <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
                  <img
                    src="./images/clients/airbnb.svg"
                    className="h-8 sm:h-10 w-auto lg:h-12"
                    alt=""
                  />
                  <img
                    src="./images/clients/ge.svg"
                    className="h-8 sm:h-10 w-auto lg:h-12"
                    alt=""
                  />
                  <img
                    src="./images/clients/coty.svg"
                    className="h-8 sm:h-10 w-auto lg:h-12"
                    alt=""
                  />
                  <img
                    src="./images/clients/microsoft.svg"
                    className="h-8 sm:h-10 w-auto lg:h-12"
                    alt=""
                  />
                </div>
              </div>
              <div className="hidden sm:block mt-12 md:mt-0 lg:absolutef -rigfht-10 lg:w-7/12">
                <div className="relative w-full">
                  <div
                    aria-hidden="true"
                    className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl"
                  ></div>
                  <img
                    src="/website/images/globalization-cuate.svg"
                    className="relative w-full"
                    alt="wath illustration"
                    loading="lazy"
                    width="320"
                    height="280"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
