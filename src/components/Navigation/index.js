import React from "react";
import amLogo from "../../assets/images/am-logo.png";

function Navigation() {
  return (
    <div className="Navigation">
      <nav className=" bg-orange-500 p-6">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a href="/">
              <img src={amLogo} alt="Logo Aurevoir Merci" className="h-12" />
            </a>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="/regles"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-4"
              >
                Règles
              </a>
              <a
                href="/a-propos"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-4"
              >
                À propos
              </a>
              <a
                href="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold"
              >
                Contact
              </a>
            </div>
            <div>
              <a
                href="/jeu"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0"
              >
                Jouer
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
