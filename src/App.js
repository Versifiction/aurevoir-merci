import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import Router from "./Router";
import "./App.css";
import store from "./store";

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
