import PokemonStats from "./PokemonStats";
import PokemonTypes from "./PokemonTypes";
import PokemonStatsDetailed from "./PokemonStatsDetailed";

function Modal(props) {
  return (
    <>
      <div className="lg:flex lg:flex-row flex flex-col fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] pt-28 px-20 pb-8 lg:pt-12 lg:items-end lg:gap-44 gap-4 backdrop-blur-xl rounded-2xl ">
        <div className="flex flex-col items-center justify-center mb-5">
          <img
            src={props.currentPokemon.sprites.other.home.front_default}
            alt="image of bulbasaur"
            className="h-64 absolute lg:top-[-25%] top-[-24%]"
          />

          <p className="font-bold text-xl mb-1 text-text">
            {props.currentPokemon.id >= 10
              ? `#0${props.currentPokemon.id}`
              : `#00${props.currentPokemon.id}`}
          </p>
          <p className="font-bold text-3xl mb-3 text-text">
            {props.currentPokemon.name}
          </p>

          <PokemonTypes
            types={props.currentPokemon.types}
            assignColor={props.assignColor}
          />
          <PokemonStats
            weight={props.currentPokemon.weight}
            height={props.currentPokemon.height}
          />
        </div>
        <div>
          <PokemonStatsDetailed
            stats={props.currentPokemon.stats}
            closeModal={props.closeModal}
          />
        </div>
      </div>
    </>
  );
}

export default Modal;
