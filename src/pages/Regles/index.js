import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function Regles() {
  return (
    <div className="Regles">
      <Navigation />
      <div className="Header">
        <div className="container mx-auto">
          <h1 className="font-bold text-5xl pt-12 pb-12">Règles</h1>
          <p>
            Le but est simple : après avoir choisi un #AurevoirMerci, 10 séries
            de 4 images vous seront proposées.
          </p>
          <p>
            Pour passer à la série d'images suivante, vous devrez cliquer sur 1
            des 4 images que vous souhaitez éliminer.
          </p>
          <br />
          <p>
            <span className="font-bold">Exemple :</span> 4 images de plats vous
            sont proposés. Vous devrez donc éliminer celui que vous aimez le
            moins, en cliquant dessus.
          </p>
          <p>
            Une nouvelle série vous sera alors immédiatement proposée, jusqu'à
            ce que vous atteignez la 10ème et dernière série.
          </p>
          <a href="/jeu">
            <button class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded-full mt-4">
              Jouer
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Regles;
