import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import InfoCard from "./components/InfoCard";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";
import { BackgroundProvider } from "./BackgroundContext";
import "./App.css";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentModalId, setCurrentModalId] = useState(1);
  const [search, setSearch] = useState("");

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
      })
      .catch((err) => console.err(err));
  }, []);

  useEffect(() => {
    Promise.all(pokeData.map((data) => fetchJSON(data.url)))
      .then((responseArr) => {
        responseArr.forEach((res) => {
          setAllPokemon((prevAllPokemon) => [...prevAllPokemon, res]);
        });
      })
      .catch((err) => {
        console.err(err);
      });
  }, [pokeData]);

  useEffect(() => {
    setSearchPokemon(
      allPokemon
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((pokemon) => (
          <InfoCard key={nanoid()} {...pokemon} openModal={setCurrentModal} />
        ))
    );
  }, [search]);

  return (
    <div className="flex flex-col justify-center items-center py-6">
      <SearchBar handleChange={searchPokemons} value={search} />
      <BackgroundProvider>
        <div className="font-primary grid lg:grid-cols-3 gap-x-8 gap-y-48 my-48 relative">
          {search
            ? searchPokemon
            : allPokemon.map((pokemon) => (
                <InfoCard
                  key={nanoid()}
                  {...pokemon}
                  openModal={setCurrentModal}
                />
              ))}
          {modal && (
            <Modal
              currentPokemon={getCurrentPokemon(currentModalId)}
              closeModal={closeModal}
            />
          )}
        </div>
      </BackgroundProvider>
    </div>
  );
}

export default App;
