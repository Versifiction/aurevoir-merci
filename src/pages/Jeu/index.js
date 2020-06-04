import React, { useState, useEffect } from "react";
import UIfx from "uifx";
import { useStoreActions, useStoreState } from "../../store/hooks";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import jeux from "../../utils/jeux.json";
import croixRouge from "../../assets/images/croix-rouge-am.png";
import aurevoirMerciSound from "../../assets/sons/aurevoir-merci.m4a";

function Jeu(props) {
  const idJeu = props.match.params.id || 1;
  const serie = useStoreState((state) => state.jeu.serie);
  const isAPictureChosen = useStoreState((state) => state.jeu.isAPictureChosen);
  const picturesChosen = useStoreState((state) => state.jeu.picturesChosen);

  const setSerie = useStoreActions((actions) => actions.jeu.setSerie);
  const setAPictureChosen = useStoreActions(
    (actions) => actions.jeu.setAPictureChosen
  );
  const setPicturesChosen = useStoreActions(
    (actions) => actions.jeu.setPicturesChosen
  );
  const reinitializePicturesChosen = useStoreActions(
    (actions) => actions.jeu.reinitializePicturesChosen
  );

  const [images] = useState(jeux[idJeu - 1].images);
  const sound = new UIfx(aurevoirMerciSound, {
    volume: 0.5,
    throttleMs: 100,
  });

  useEffect(() => {
    reinitializePicturesChosen();
  }, []);

  useEffect(() => {
    console.log("---");
    console.log("serie ", serie);
    console.log("images ", images);
    console.log("isAPictureChosen ", isAPictureChosen);
    console.log("picturesChosen ", picturesChosen);
  }, [serie, images, isAPictureChosen, picturesChosen]);

  function nextSerie(image, url) {
    console.log("url ", url);
    sound.play();
    setAPictureChosen(image);

    if (serie < 11) {
      setPicturesChosen(url);
    }
    setTimeout(() => {
      setSerie(serie + 1);
      setAPictureChosen(false);
    }, 1000);
  }

  return (
    <div className="Jeu">
      <Navigation />
      <div className="bg-content">
        <div className="container mx-auto pt-12 pb-12">
          {!props.match.params.id ? (
            <>
              <h1 className="font-bold text-5xl pb-12">Listes</h1>
              <div className="pb-12">
                {jeux &&
                  jeux.map((jeu) => (
                    <div class="max-w-sm w-full lg:max-w-full lg:flex mb-4">
                      <div class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                          <div class="text-gray-900 font-bold text-xl mb-2">
                            #AurevoirMerci{jeu.id}
                          </div>
                          <a href={`/jeu/${jeu.id}`}>
                            <button class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded-full mt-4">
                              Jouer
                            </button>
                          </a>
                          <br />
                          {jeu.tags.map((tag) => (
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-8">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="font-bold text-5xl pb-12">
                Jeu {props.match.params.id}
              </h1>
              {serie < 11 ? (
                <>
                  <h2 className="font-bold text-3xl pb-12">
                    Série {serie} :{" "}
                    {jeux[props.match.params.id - 1].titles[serie - 1]}
                  </h2>
                  <div className="pt-12 pb-12 flex justify-center">
                    {Object.values(images[serie - 1]).map((image, index) => (
                      <>
                        <div className="rounded-full h-64 w-64 flex items-center border-gray-600 bg-gray-800 border-solid relative z-1 mr-8 cursor-pointer">
                          <img
                            src={image}
                            id={`image-${index}`}
                            alt="Dormir"
                            className="h-56 w-56 rounded-full absolute z-2"
                            style={{
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                            onClick={() => nextSerie(`image-${index}`, image)}
                          />
                          {isAPictureChosen === `image-${index}` && (
                            <img
                              src={croixRouge}
                              alt="Croix rouge"
                              style={{
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                              }}
                              className="h-56 w-56 absolute z-2"
                            />
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                  <div
                    class="bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md mt-12"
                    role="alert"
                  >
                    <div class="flex">
                      <div class="py-1">
                        <svg
                          class="fill-current h-6 w-6 text-orange-500 mr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                        </svg>
                      </div>
                      <div>
                        <p class="font-bold">Information</p>
                        <p class="text-sm">
                          Pour passer à la série d'images suivante, veuillez
                          éliminer un choix en cliquant sur l'image
                          correspondante !
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="font-bold text-3xl pb-12">
                    Vous avez fini le jeu {props.match.params.id} !
                  </h2>
                  <p>
                    Découvrez le récapitulatif des choix que vous avez éliminés
                    ci-dessous :
                  </p>
                  <div className="flex">
                    {picturesChosen &&
                      picturesChosen.map((image, index) => (
                        <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 items-center flex-col mr-8">
                          <h3 className="font-bold mr-2">
                            {jeux[props.match.params.id - 1].titles[index]}
                          </h3>
                          <div className="mt-2 mb-2 rounded-full h-32 w-32  border-gray-600 bg-gray-800 border-solid relative z-1 cursor-pointer">
                            <img
                              src={image}
                              id={`image-${index}`}
                              alt="Dormir"
                              className="h-24 w-24 rounded-full absolute z-2"
                              style={{
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jeu;
