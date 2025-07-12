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
            <span></span>

            <span>
              <img src={imgHome} alt="" className={styles.imgMenu} />
            </span>
          </li>
          <li>
            <span className={styles.logo}>
              <PiDevToLogo />
            </span>

            <span>Renan</span>
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
