import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function Jeu(props) {
  return (
    <div classNameName="Jeu">
      <Navigation />
      <div className="Header">
        <div className="container mx-auto">
          {!props.match.params.id ? (
            <>
              <h1 className="font-bold text-5xl pt-12 pb-12">Listes</h1>
              <div class="max-w-sm w-full lg:max-w-full lg:flex">
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl mb-2">
                      #AurevoirMerci 1
                    </div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                    <button class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded-full mt-4">
                      <a href="/jeu/1">Jouer</a>
                    </button>
                    <br />
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 pt-8">
                      #FastFoods
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 pt-8">
                      #Viennoiseries
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h1 className="font-bold text-5xl pt-12 pb-12">Jeu 1</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jeu;
