import "./headStyle.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../../assets/Images/logo.svg";
import LogoChat from "../../assets/Images/chatlogo.svg";
import Usuario from "../../assets/Images/user.svg";
import Call from "../../assets/Images/headset.svg";
import Favorito from "../../assets/Images/heart.svg";
import Compra from "../../assets/Images/cart.svg";
import FlechaBaixo from "../../assets/Images/arrow-down.svg";
import axios from "axios";
type CatsProps = {
  id: string;
  name: string;
};
export function Header() {
  const [cats, setCats] = useState<CatsProps[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3333/categoria").then((res) => {
      console.log(res.data);
      setCats(res.data);
    });
  }, []);
  return (
    <header className="headerContainer">
      <div className="headerUp">
        <div className="testeMenu">
          <div>
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="chatImg">
            <input type="text" />
            <a href="#">
              <img src={LogoChat} alt="LogoChat" />
            </a>
          </div>
          <div className="compImport">
            <div className="userMenu">
              <a href="#">
                <img className="userBorder" src={Usuario} alt="Usuario" />
              </a>
              <div className="loginContainer">
                <p>
                  Faça{" "}
                  <Link to="/login">
                    <a href="login">
                      <span>Login</span>
                    </a>
                  </Link>{" "}
                  ou <br /> crie seu{" "}
                  <Link to="/login">
                    <a href="cadastro">
                      <span>Cadastro</span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="imgLegal">
              <a href="#">
                <img src={Compra} alt="Carrinho" />
              </a>
              <a href="#">
                <img src={Favorito} alt="Favoritos" />
              </a>
              <a href="#">
                <img src={Call} alt="Contato" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="headerDown">
        <div className="contMenuSec">
          <nav className="departMenuLeft">
            <div className="cateMenu">
              <button type="button">
                TODOS OS DEPARTAMENTOS
                <img src={FlechaBaixo} alt="Baixo" />
                <ul>
                  {cats.map((Category) => (
                    <li key={Category.id}>
                      <a href={`/categoria/${Category.name}`}>
                        {Category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </button>
            </div>
          </nav>
          <nav className="departMenuRight">
            <div className="destaqueMenu">
              <a href="#">LANCAMENTOS</a>
              <a href="#">DESTAQUE</a>
              <a href="#footerPage">SOBRE</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
