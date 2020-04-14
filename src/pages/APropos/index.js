import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function APropos() {
  return (
    <div classNameName="APropos">
      <Navigation />
      <div className="Header">
        <div className="container mx-auto">
          <h1 className="font-bold text-5xl pt-12 pb-12">À propos</h1>
          <p>
            Ce site n'est en aucun cas affilié à OKLM (inventeur du concept).
          </p>
          <p>Ce site n'est en aucun cas un site à but lucratif.</p>
          <p>
            Ce site ne contient en aucun cas des éléments pris à OKLM (notamment
            le logo qui a été refait en s'inspirant du logo existant).
          </p>
          <br />
          <p>
            De nombreuses fonctionnalités sont encore à venir (restez branchés
            !).
          </p>
          <br />
          <p>
            Pour toute suggestion ou demande, merci de contacter le
            développeur&nbsp;
            <a href="/contact" className="text-blue-500 font-bold">
              ici
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default APropos;
