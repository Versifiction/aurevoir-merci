import { action, thunk } from "easy-peasy";

const jeu = {
  serie: 1,
  isAPictureChosen: false,
  picturesChosen: [],
  setSerie: action((state, datas) => {
    state.serie = datas;
  }),
  setAPictureChosen: action((state, datas) => {
    state.isAPictureChosen = datas;
  }),
  setPicturesChosen: action((state, datas) => {
    state.picturesChosen.push(datas);
  }),
  reinitializePicturesChosen: action((state, datas) => {
    state.picturesChosen = [];
  }),
};

export default jeu;
