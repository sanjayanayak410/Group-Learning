import { useContext } from "react";
import { ThemeContext } from "../state/context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h3>Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeSwitcher;
