import { nanoid } from "nanoid";
import { CgCloseO } from "react-icons/cg";

function PokemonStatsDetailed(props) {
  const statsElements = props.stats.map((stat) => {
    return (
      <li
        key={nanoid()}
        className="text-text flex items-center gap-[20px] mb-5"
      >
        <p>
          {stat.stat.name
            .split("-")
            .map((string) => string[0].toUpperCase().concat(string.slice(1)))
            .join(" ")}
        </p>

        <p className="font-bold">{stat.base_stat}</p>
      </li>
    );
  });

  return (
    <>
      <div className="flex gap-24">
        <h1 className="text-text font-medium text-4xl mb-7">Stats</h1>
        <div
          onClick={props.closeModal}
          className=" text-text cursor-pointer lg:block lg:static absolute top-[-11%] right-0"
        >
          <CgCloseO size={40} />
        </div>
      </div>
      <ul className="list-none px-0 py-0 ">{statsElements}</ul>
    </>
  );
}

export default PokemonStatsDetailed;
