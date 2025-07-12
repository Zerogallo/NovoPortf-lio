import "./App.css";
import Header from "./content/header/header";
import imgHome from "./assets/imagem/image.jpg";
import html from "./assets/imagem/html.png";
import css from "./assets/imagem/css.png";
import js from "./assets/imagem/js.png";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { PiDevToLogo } from "react-icons/pi";
import { GiRibbonMedal } from "react-icons/gi";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="home">
          <div className="logo">
            <h1>
              Renan
              <span>
                <PiDevToLogo />
              </span>
            </h1>
          </div>
          <div className="caixaText">
            <ul>
              <li>
                <i>
                  <GiRibbonMedal />
                </i>
                Desenvolvedor Front-End
              </li>
              <li>
                <i>
                  <GiRibbonMedal />
                </i>
                React & TypeScript Specialist JavaScript
              </li>
              <li>
                <i>
                  <GiRibbonMedal />
                </i>
                Next.js
              </li>
              <li>
                <i>
                  <GiRibbonMedal />
                </i>
                Performático e acessível
              </li>
              <li>
                <i>
                  <GiRibbonMedal />
                </i>
                Styled Components
              </li>
              <li>
                <i>
                  <GiRibbonMedal />
                </i>
                Redux Transformo designs em código
              </li>
            </ul>
          </div>

          <div className="caixaBut">
            <button className="buttonLinkedin">
              <i>
                <FaLinkedin />
              </i>
              Linkedin
            </button>
            <button className="buttonGithun">
              <i>
                <FaGithub />
              </i>
              Github
            </button>

            <button className="buttonHome">
              <i>
                <FaWhatsapp />
              </i>
              WhatsApp
            </button>
          </div>
        </div>
        <div className="caixaimg">
          <img src={html} alt="html" className="iconHtml" />
          <img src={css} alt="css" className="iconCss" />
          <img src={js} alt="js" className="iconJs" />
        </div>
        <div className="imgHome">
          <img src={imgHome} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
