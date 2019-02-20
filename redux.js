import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./styles.css";

const defaultState = {
  hello: 'hi',
  other: ''
}
function monReducer(state = defaultState, action) {
  switch (action.type) {
    case 'my':
      // Modification du state de l'application
      return {...state, hello:"anwar"}
    case 'world':
      // Modification du state de l'application
      return { ...state, hello: "anwar" }
    //...
    default:
      return state
  }
}

let store = createStore(monReducer)
store.dispatch({ type: 'my' })
// 1
console.log(store.getState())
function App() {
  return (
    <div className="App">

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
