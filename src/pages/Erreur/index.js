import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function Erreur() {
  return (
    <div classNameName="Erreur">
      <Navigation />
      <div className="Header">
        <div className="container mx-auto">
          <h1 className="font-bold text-5xl pt-12 pb-12">404</h1>
          <p>
            La page que vous recherchée n'existe pas : pour revenir à l'accueil,
            cliquez&nbsp;
            <a href="/" className="text-blue-500 font-bold">
              ici
            </a>
            , sinon au revoir merci !
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Erreur;
