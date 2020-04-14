import React from "react";
import { Route, Switch } from "react-router-dom";

import Accueil from "./pages/Accueil";
import Jeu from "./pages/Jeu";
import Regles from "./pages/Regles";
import Contact from "./pages/Contact";
import APropos from "./pages/APropos";
import Erreur from "./pages/Erreur";

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Accueil} />
      <Route path="/jeu/:id?" exact component={Jeu} />
      <Route path="/regles" exact component={Regles} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/a-propos" exact component={APropos} />
      <Route component={Erreur} />
    </Switch>
  );
}

export default Router;
