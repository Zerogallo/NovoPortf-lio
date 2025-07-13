import { VscSourceControl } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import imgHome from "../../assets/imagem/image.jpg";
import styles from "./header.module.css";
import { PiDevToLogo } from "react-icons/pi";

function Header() {
  return (
    <>
      <div className={styles.contents}>
        <ul className={styles.menu}>
          <li>
            <span className={styles.logo}>
              <PiDevToLogo />
            </span>

            <span>
              <img src={imgHome} alt="" className={styles.imgMenu} />
              <div className={styles.prefMenu}>
                Renan
                <i>
                  <PiDevToLogo />
                </i>
                <p>Desenvolvedor Front-End</p>
              </div>
            </span>
          </li>
          <li>
            <span>
              <VscSourceControl />
            </span>
            <span>Projeto</span>
          </li>
          <li>
            <span>
              <FaWhatsapp />
            </span>

            <span>Contato</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
