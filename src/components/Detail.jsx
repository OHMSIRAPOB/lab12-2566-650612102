import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const {lang } = useContext(LangContext);
  let Theme;
  if (theme.name == "dark"){
    Theme = lang.detail.darkActivated;
  } else {
    Theme = lang.detail.lightActivated;
  }
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      
      {/* tip: Get information from "theme" variable to determine 
      which theme is currently selected */}
      {Theme}
    </p>
  );
};
