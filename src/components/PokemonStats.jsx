import { RxRulerSquare } from "react-icons/rx";
import { FaWeightHanging } from "react-icons/fa";

function PokemonStats(props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-6 text-text">
        <div className="flex items-center gap-[10px]">
          <FaWeightHanging />
          <p>{props.weight / 10}kg</p>
        </div>

        <div className="flex items-center gap-[10px]">
          <RxRulerSquare />
          <p>{props.height / 10}m</p>
        </div>

        <p className="justify-self-center">Weight</p>
        <p className="justify-self-center">Height</p>
      </div>
    </>
  );
}

export default PokemonStats;
