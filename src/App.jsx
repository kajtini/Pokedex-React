import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import InfoCard from "./components/InfoCard";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentModalId, setCurrentModalId] = useState(1);
  const [search, setSearch] = useState("");

  function assignColor(type) {
    switch (type.toLowerCase()) {
      case "grass":
        return "#1CD80E";
      case "poison":
        return "#F149FF";
      case "fire":
        return "#FF9900";
      case "water":
        return "#14A8FF";
      case "flying":
        return "#89BDFF";
      case "bug":
        return "#7BCF00";
      case "normal":
        return "#9FA39D";
      case "electric":
        return "#FFDE00";
      case "ground":
        return "#E2BF65";
      case "fairy":
        return "#D685AD";
      case "fighting":
        return "#FF215B";
    }
  }

  function fetchJSON(arg) {
    return fetch(arg).then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      return response.json();
    });
  }

  function setCurrentModal(event, id) {
    setModal((prevModal) => !prevModal);
    setCurrentModalId(id);
  }

  function getCurrentPokemon(id) {
    const [pokemon] = allPokemon.filter((pokemon) => pokemon.id === id);
    return pokemon;
  }

  function closeModal() {
    modal && setModal(false);
  }

  function searchPokemons(event) {
    const { value } = event.target;

    setSearch(value);
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
      .then((res) => res.json())
      .then((data) => {
        setPokeData([...data.results]);
      });
  }, []);

  useEffect(() => {
    Promise.all(pokeData.map((data) => fetchJSON(data.url)))
      .then((responseArr) => {
        responseArr.forEach((res) => {
          setAllPokemon((prevAllPokemon) => [
            ...prevAllPokemon,
            {
              ...res,
              name: res.name[0].toUpperCase().concat(res.name.slice(1)),
            },
          ]);
        });
      })
      .catch((err) => {
        console.err(err);
      });
  }, [pokeData]);

  const cardElements = allPokemon.map((pokemon) => {
    return (
      <InfoCard
        key={nanoid()}
        name={pokemon.name}
        types={pokemon.types}
        weight={pokemon.weight}
        height={pokemon.height}
        idNumber={pokemon.id}
        sprites={pokemon.sprites}
        openModal={setCurrentModal}
        assignColor={assignColor}
      />
    );
  });

  useEffect(() => {
    setSearchPokemon(
      allPokemon
        .filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((pokemon) => {
          return (
            <InfoCard
              key={nanoid()}
              name={pokemon.name}
              types={pokemon.types}
              weight={pokemon.weight}
              height={pokemon.height}
              idNumber={pokemon.id}
              sprites={pokemon.sprites}
              openModal={setCurrentModal}
              assignColor={assignColor}
            />
          );
        })
    );
  }, [search]);

  return (
    <div className="flex flex-col justify-center items-center py-6">
      <SearchBar handleChange={searchPokemons} value={search} />

      <div className="font-primary grid lg:grid-cols-3 gap-x-8 gap-y-48 my-48 relative">
        {search ? searchPokemon : cardElements}
        {modal && (
          <Modal
            currentPokemon={getCurrentPokemon(currentModalId)}
            assignColor={assignColor}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
