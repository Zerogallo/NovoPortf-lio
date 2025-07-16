import styles from "./home.module.css";

import imgHome from "../assets/imagem/image.jpg";
import html from "../assets/imagem/html.png";
import css from "../assets/imagem/css.png";
import js from "../assets/imagem/js.png";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { PiDevToLogo } from "react-icons/pi";
import { GiRibbonMedal } from "react-icons/gi";

export function Home() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.home}>
          <div className={styles.logo}>
            <h1>
              Renan
              <span>
                <PiDevToLogo />
              </span>
            </h1>
          </div>
          <div className={styles.caixaText}>
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

          <div className={styles.caixaBut}>
            <button className={styles.buttonLinkedin}>
              <i>
                <FaLinkedin />
              </i>
              Linkedin
            </button>
            <button className={styles.buttonGithun}>
              <i>
                <FaGithub />
              </i>
              Github
            </button>

            <button className={styles.buttonHome}>
              <i>
                <FaWhatsapp />
              </i>
              WhatsApp
            </button>
          </div>
        </div>
        <div>
          <div className={styles.caixaimg}>
            <img src={html} alt="html" className={styles.iconHtml} />
            <img src={css} alt="css" className={styles.iconCss} />
            <img src={js} alt="js" className={styles.iconJs} />
          </div>
          <div className={styles.imgHome}>
            <img src={imgHome} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
