import { nanoid } from "nanoid";
import BackgroundContext from "../BackgroundContext";
import { useContext } from "react";

function PokemonTypes(props) {
  const background = useContext(BackgroundContext);

  const typesElement = props.types.map((type) => {
    const styles = {
      backgroundColor: background(type.type.name),
    };

    return (
      <p
        key={nanoid()}
        className={` py-1 px-2 rounded-lg 
         flex-grow flex items-center gap-2 text-text font-bold italic`}
        style={styles}
      >
        {type.type.name.toUpperCase()}
      </p>
    );
  });

  return (
    <>
      <div className="flex gap-2 mb-7">{typesElement}</div>
    </>
  );
}

export default PokemonTypes;
