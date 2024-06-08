import "./App.css";

import { useState, useEffect } from "react";

import axios from "axios";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();

  useEffect(() => {
    let cancel;

    setLoading(true);
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        // console.log(res);//* TESTING
        setPokemon(res.data.results.map((poke) => poke.name));
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    return () => {
      cancel();
    };
  }, [currentPageUrl]);

  // console.log(pokemon); //* TESTING

  if (loading) return "Loading...";

  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const prevPage = () => {
    setCurrentPageUrl(previousPageUrl);
  };

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination prevPage={prevPage} nextPage={nextPage} />
    </>
  );
}

export default App;
