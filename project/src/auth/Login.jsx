import { useContext } from "react";
import useLanguage from "../hooks/useLanguage";
import { LangContext } from "../context/languageContext";

function Login() {
  const { language, setLanguage } = useContext(LangContext);

  const hanleChange = (e) => {
    localStorage.setItem("lang", e.target.value);
    setLanguage(e.target.value);
  };

  const { t } = useLanguage();
  console.log(t);
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="loginPage">
            <div className="loginPage__title">
            {t('text')}
            </div>
            <form>
              <div className="loginPage__input">
                <p className="loginPage__text">{t('emails')}</p>
                <input type="email" className="loginPage__inputt" />
                <p className="loginPage__text">{t("Ptext")}</p>
                <input type="password" className="loginPage__inputt" />
                <div className="loginPage__check">
                  <label>
                    <input type="checkbox" />
                    {t('rember')}
                  </label>
                </div>
              </div>
            </form>
            <button className="loginPage__button">{t('login')}</button>
          </div>
          <div className="loginPage__bottom">
            <a href="#">Lost you password?</a>
            <a href="#">Createan account?</a>
          </div>
          <div className="language-switcher">
            <select
              name="locale"
              id="locale"
              value={language}
              onChange={(e) => hanleChange(e)}
            >
              <option value="uzbek">uzbek</option>
              <option value="russiya"> russiya</option>
              <option value="english">english</option>
              <option value="spanish"> spanish</option>
              <option value="latin">latin</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
