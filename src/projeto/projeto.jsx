import { PiDevToLogo } from "react-icons/pi";
import styles from "./projeto.module.css";
import imgHome from "../assets/imagem/image.jpg";
import cad1 from "../assets/imgCAD/post.PNG";
import cad2 from "../assets/imgCAD/poste.PNG";
import cad3 from "../assets/imgCAD/super-shoes.png";

import {
  BsBoxArrowUpRight,
  BsFillWalletFill,
  BsGit,
  BsMortarboardFill,
} from "react-icons/bs";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
export function Projeto() {
  return (
    <>
      <div className={styles.projrto}>
        <div className={styles.caixaPro}>
          <img src={imgHome} alt="" className={styles.imgProjeto} />
          <div className={styles.prefMenu}>
            <h1>
              Renan
              <i>
                <PiDevToLogo />
              </i>
            </h1>
            <p>Desenvolvedor Front-End</p>
            <ul>
              <li>
                <i>
                  <BsMortarboardFill />
                </i>
                Cursando Ciência da Computação
              </li>
              <li>
                <i>
                  <BsFillWalletFill />
                </i>
                desenvolvimento web
              </li>
            </ul>
            <p>Habilidades</p>
            <div className={styles.caixaIncon}>
              <ul>
                <li>
                  <i>
                    <FaReact />
                  </i>

                  <h2>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <i>100%</i>
                  </h2>
                </li>

                <li>
                  <i>
                    <FaHtml5 />
                  </i>

                  <h2>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <i>100%</i>
                  </h2>
                </li>
                <li>
                  <i>
                    <FaCss3Alt />
                  </i>

                  <h2>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <i>100%</i>
                  </h2>
                </li>
                <li>
                  <i>
                    <FaSquareJs />
                  </i>

                  <h2>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                    <i>80%</i>
                  </h2>
                </li>
                <li>
                  <i>
                    <FaNodeJs />
                  </i>

                  <h2>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                    <i>80%</i>
                  </h2>
                </li>

                <li>
                  <i>
                    <FaNpm />
                  </i>

                  <h2>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                    <i>80%</i>
                  </h2>
                </li>
                <li>
                  <i>
                    <BsGit />
                  </i>

                  <h2>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                    <IoIosStarOutline />
                    <i>70%</i>
                  </h2>
                </li>
              </ul>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className={styles.caixatotal}>
          <div className={styles.caixaCad}>
            <div className={styles.imgcad}>
              <img src={cad1} alt="" />
            </div>
            <div className={styles.caixaTextt}>
              <h1>Estilos Renan</h1>
              <ul>
                <li>Exemplos de estrutura HTML básica</li>
                <li>Integração simples com CSS</li>
                <li>Demonstração de formatação de conteúdo</li>
              </ul>
              <button className={styles.caixaButton}>
                Visite o site
                <i>
                  <BsBoxArrowUpRight />
                </i>
              </button>
            </div>
          </div>

          <div className={styles.caixaCad}>
            <div className={styles.imgcad}>
              <img src={cad2} alt="" />
            </div>
            <div className={styles.caixaTextt}>
              <h1>Página-perf</h1>
              <ul>
                <li>
                  Desenvolver um site pessoal/portfólio para obter habilidades e
                  projetos em front-end, integrando experiências técnicas e
                  interatividade.{" "}
                </li>
              </ul>
              <button className={styles.caixaButton}>
                Visite o site
                <i>
                  <BsBoxArrowUpRight />
                </i>
              </button>
            </div>
          </div>

          <div className={styles.caixaCad}>
            <div className={styles.imgcad}>
              <img src={cad3} alt="" />
            </div>
            <div className={styles.caixaTextt}>
              <h1>Estilos Renan</h1>
              <ul>
                <li>
                  SUPER SHOES é um carrossel interativo desenvolvido em React
                  que exibe uma coleção de tênis esportivos. Este projeto
                  demonstra técnicas modernas de desenvolvimento front-end
                  utilizando React Hooks para criar uma experiência de usuário
                  fluida e responsiva.
                </li>
              </ul>
              <button className={styles.caixaButton}>
                Visite o site
                <i>
                  <BsBoxArrowUpRight />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
