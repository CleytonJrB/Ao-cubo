
import '../styles/home.scss';
import { Propaganda } from '../components/Propaganda';
import { Produto } from '../components/Produto';

import Logo from '../assets/Images/logo.svg';
import LogoChat from '../assets/Images/chatlogo.svg';
import Usuario from '../assets/Images/user.svg';
import Call from '../assets/Images/headset.svg';
import Favorito from '../assets/Images/heart.svg';
import Compra from '../assets/Images/cart.svg';
import FlechaBaixo from '../assets/Images/arrow-down.svg';
import Esporte from '../assets/Images/Run.svg'
import Fashion from '../assets/Images/Fashion.svg';
import Security from '../assets/Images/Security.svg';
import Music from '../assets/Images/Music.svg';
import Linked from '../assets/Images/linkedin.svg';
import Insta from '../assets/Images/instagram.svg';
import Twitter from '../assets/Images/twitter.svg';
import Face1 from '../assets/Images/facebook.svg';
import Youtube from '../assets/Images/youtube.svg';
import Globe from '../assets/Images/Globe.svg';
import Medico from '../assets/Images/Health.svg';

export function Home() {
  return (
    <div id="homePage">
      <header className="headerContainer">
        <div className="headerUp">
          <div className="testeMenu">
            <div>
              <a href="/"><img src={Logo} alt="Logo" /></a>
            </div>
            <div className="chatImg">
              <input type="text" />
              <a href="#"><img src={LogoChat} alt="LogoChat" /></a>
            </div>
            <div className="compImport">
              <div className="userMenu">
                <a href="#"><img className="userBorder" src={Usuario} alt="Usuario" /></a>
                <p>Faça <a href="#"><span>Login</span></a> ou <br /> crie seu <a href="#"><span>Cadastro</span></a></p>
              </div>
              <div className="imgLegal">
                <a href="#"><img src={Call} alt="Contato" /></a>
                <a href="#"><img src={Favorito} alt="Favoritos" /></a>
                <a href="#"><img src={Compra} alt="Carrinho" /></a>
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
                    <li><a href="#">Esportes</a></li>
                    <li><a href="#">Moda</a></li>
                    <li><a href="#">Musica</a></li>
                    <li><a href="#">Pet Estimacao</a></li>
                  </ul>
                </button>
              </div>
            </nav>
            <nav className="departMenuRight">
              <div className="destaqueMenu">
                <a href="#">LANCAMENTOS</a>
                <a href="#">DESTAQUE</a>
                <a href="#">SOBRE</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main id="mainContent">
        <div className="headerMain">
          <p className="logonameMain">AO CUBO</p>
          <div className="promOver">
            <p>A PROMOCAO TERMINA EM:</p>
            <div className="circleRotate">
              <div />
            </div>
          </div>
        </div>
        <section className="listagemProduto">
          <Produto
            h1="ESPORTES"
            src={Esporte}
          />
          <Produto
            h1="MODA"
            src={Fashion}
          />
          <Produto
            h1="MUSICA"
            src={Music}
          />
          <Produto
            h1="PET ESTIMACAO"
            src={Security}
            href="https://www.google.com.br/"
          />
          <Produto
            h1="ESPORTES"
            src={Esporte}
          />
          <Produto
            h1="MODA"
            src={Fashion}
          />
          <Produto
            h1="MUSICA"
            src={Music}
          />
          <Produto
            h1="PET ESTIMACAO"
            src={Security}
            href="https://www.google.com.br/"
          />
          <Produto
            h1="ESPORTES"
            src={Esporte}
          />
          <Produto
            h1="MODA"
            src={Fashion}
          />
          <Produto
            h1="MUSICA"
            src={Music}
          />
          <Produto
            h1="PET ESTIMACAO"
            src={Security}
            href="https://www.google.com.br/"
          />
        </section>
        <div className="progaContainer">
          <Propaganda
            src={Medico}
            alt="Medicamentos"
            h1="OS MELHORES MEDICAMENTOS VOCE ENCONTRA AQUI"
          />
          <Propaganda
            src={Globe}
            alt="Globo"
            h1="OS MELHORS PRECO DE PASSAGEM AREA E DE ONIBUS VOCE ENCONTRA AQUI"
          />
        </div>
      </main>
      <footer id="footerPage">
        <div className="mensFooter">
          AoCubo!® é uma marca registrada de AoCubo COMÉRCIO S/A | Todos os direitos reservados. Os preços anunciados neste site ou via e-mail promocional podem ser alterados sem prévio aviso.<br /> O AoCubo! não é responsável por erros descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o fornecedor/lote do fabricante.<br /> Este site trabalha 100% em criptografia SSL. <a href="#">Clique aqui</a> e veja as políticas de nossa empresa.
        </div>
        <div className="midiasFooter">
          <div>
            <h1>Midias Sociais</h1>
          </div>
          <div className="containerFooter">
            <a href="#"><img src={Linked} alt="Linkedin" /></a>
            <a href='https://instagram.com/cleytonxd' target="_blank"><img src={Insta} alt="Instagram" /></a>
            <a href="#"><img src={Face1} alt="Facebook" /></a>
            <a href="#"><img src={Twitter} alt="Twitter" /></a>
            <a href="#"><img src={Youtube} alt="Youtube" /></a>
          </div>
          <div className="diferenteFooter">
            <h1>FA21-MNJFLS-642-TRAVIS-HIROSHI/TOOLINGCODE:OS283 F-8-99</h1>
          </div>
        </div>
      </footer>
    </div>
  );
}
