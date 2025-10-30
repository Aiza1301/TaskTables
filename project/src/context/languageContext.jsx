import { createContext, useState } from "react";

export const LangContext = createContext(null);

export function LangProvider({ children }) {
  let localeLanguage = localStorage.getItem("lang") || "uzb";

  const [language, setLanguage] = useState(localeLanguage);

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

// import { createContext, useState } from "react";

// export const LangContext = createContext(null);

// export function LangProvider({ children }) {
//   let localeLanguage = localStorage.getItem("lang") || "uzb";
//   const [ language, setLanguage ] = useState(localeLanguage);

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     localStorage.setItem("lang" , lang)
//   }

//   return (
//     <LangContext.Provider value={{ language, setLanguage: changeLanguage}}>
//       {children}
//     </LangContext.Provider>
//   );
// }
