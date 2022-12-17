import { createContext } from "react";

const BackgroundContext = createContext();

export function BackgroundProvider({ children }) {
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

  return (
    <BackgroundContext.Provider value={assignColor}>
      {children}
    </BackgroundContext.Provider>
  );
}

export default BackgroundContext;
