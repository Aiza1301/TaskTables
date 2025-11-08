import { useContext } from "react";
import { LangContext } from "../context/languageContext";
import { translateData } from "../utils/translateData";

function useLanguage() {
  const { language } = useContext(LangContext);

  const res = (key) => {
    const translatsions = { ...translateData };
    return translatsions[key][language];
  };



  return { t: res };
}

export default useLanguage;
