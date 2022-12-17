import { CgDetailsMore } from "react-icons/cg";
import PokemonStats from "./PokemonStats";
import PokemonTypes from "./PokemonTypes";
import { useContext } from "react";
import BackgroundContext from "../BackgroundContext";

function InfoCard(props) {
  const background = useContext(BackgroundContext);

  const buttonStyles = {
    backgroundColor: background(props.types[0].type.name),
  };

  const cardBackground = {
    backgroundImage: `linear-gradient(to bottom, ${background(
      props.types[0].type.name
    )} , #060B28 )`,
  };

  return (
    <>
      <div>
        <div
          className="px-24 pt-28 pb-8 border-b-0 border-card-border border-solid border-[1px] 
        rounded-tr-3xl rounded-tl-3xl flex flex-col justify-center items-center text-text relative "
          style={cardBackground}
        >
          <img
            src={props.sprites.other.home.front_default}
            alt="image of bulbasaur"
            className="h-64 absolute top-[-50%]"
          />

          <p className="font-bold text-xl mb-1">
            {props.id >= 10 ? `#0${props.id}` : `#00${props.id}`}
          </p>
          <p className="font-bold text-3xl mb-3">
            {props.name[0].toUpperCase().concat(props.name.slice(1))}
          </p>

          <PokemonTypes types={props.types} />
          <PokemonStats weight={props.weight} height={props.height} />
        </div>
        <button
          className=" w-full  left-0 top-full border-card-grass rounded-b-3xl py-3 font-primary font-bold text-text flex items-center justify-center gap-1 cursor-pointer"
          style={buttonStyles}
          onClick={(event) => props.openModal(event, props.id)}
        >
          <CgDetailsMore size={30} />
          More Details
        </button>
      </div>
    </>
  );
}

export default InfoCard;
