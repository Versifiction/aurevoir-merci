import React, { useEffect } from "react";
import UIfx from "uifx";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import aurevoirMerciSound from "../../assets/sons/aurevoir-merci-intro.m4a";

function Accueil() {
  const sound = new UIfx(aurevoirMerciSound, {
    volume: 0.5,
    throttleMs: 100,
  });

  useEffect(() => {
    if (!localStorage.getItem("am-intro-sound")) {
      sound.play();
    }

    localStorage.setItem("am-intro-sound", true);
  }, [sound]);

  return (
    <div className="Accueil">
      <Navigation />
      <Header />
      <Footer />
    </div>
  );
}

export default Accueil;
