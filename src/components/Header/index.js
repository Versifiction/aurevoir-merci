import React from "react";
import amLogoOrange from "../../assets/images/am-logo-orange.png";
import "./Header.css";

function Header() {
  return (
    <div className="Header flex items-center justify-center">
      <div>
        <div className="">
          <img
            src={amLogoOrange}
            alt="Logo Aurevoir Merci"
            className="h-30 mx-auto"
          />
        </div>
        <div className="flex items-center justify-center mt-4">
          <a href="/regles">
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold mr-2 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">
              Règles
            </button>
          </a>
          <a href="/jeu">
            <button class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded-full">
              Jouer
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
