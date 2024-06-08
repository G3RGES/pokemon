import "./App.css";

import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        // console.log(res);//* TESTING
        setPokemon(res.data.results.map((poke) => poke.name));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(pokemon); //* TESTING

  return <div className="App">APP</div>;
}

export default App;
