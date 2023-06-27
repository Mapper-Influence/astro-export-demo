
import type { FC } from "react";
import useDarkMode from "./useDarkMode";
import Beams from "./Beams";
import styles from "./style.module.scss";

type Props = {
  className?: string;
};

const DarkModeToggle: FC<Props> = ({ className }) => {
  const [currentMode, setMode] = useDarkMode();

  const toggleMode = () => {
    setMode(currentMode === "dark" ? "light" : "dark");
  };
  return (
    <button
      aria-label="Toggle dark mode"
      className={`${styles.outerSlider} ${className}`}
      onClick={toggleMode}
    >
      <div className={`${styles.innerSlider} ${styles[currentMode]}`}>
        <div className={styles.colorFill} />
        <Beams
          className={styles.beam}
          color={"var(--buttonText)"}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;
