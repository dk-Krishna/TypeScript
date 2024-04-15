import { useContext } from "react";
import { themeContext } from "../App";

const ThemeBox = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div
      className="container"
      style={{
        backgroundColor: theme === "dark" ? "rgb(40, 40, 40)" : "white",
        color: theme === "dark" ? "white" : "rgb(40, 40, 40)",
      }}
    >
      <h1>Hey there!</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default ThemeBox;
