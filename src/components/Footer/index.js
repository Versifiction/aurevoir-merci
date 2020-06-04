import React from "react";
import amLogo from "../../assets/images/am-logo.png";

function Footer() {
  return (
    <div className="Footer">
      <div class="bg-gray-800 text-gray-300">
        <div className="container mx-auto flex items-center flex-wrap">
          <div class="w-full p-3">
            <div className="flex items-center justify-between flex-shrink-0 text-white mr-6">
              <div>
                <a href="/">
                  <img
                    src={amLogo}
                    alt="Logo Aurevoir Merci"
                    className="h-12"
                  />
                </a>
              </div>
              <div className="flex items-center">
                <p className="p-1">
                  <a href="/regles">Règles</a>
                </p>
                •
                <p className="p-1">
                  <a href="/a-propos">À propos</a>
                </p>
                •
                <p className="p-1">
                  <a href="/contact">Contact</a>
                </p>
              </div>
              <div>
                <a href="http://twitter.com/killerfromparis">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
