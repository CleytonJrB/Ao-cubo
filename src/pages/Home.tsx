
import '../styles/home.scss';
import { Propaganda } from '../components/Propaganda';
import { Produto } from '../components/Produto';

import Esporte from '../assets/Images/Run.svg'
import Fashion from '../assets/Images/Fashion.svg';
import Security from '../assets/Images/Security.svg';
import Music from '../assets/Images/Music.svg';
import Globe from '../assets/Images/Globe.svg';
import Medico from '../assets/Images/Health.svg';



export function Home() {

  return (
    <div id="homePage">
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
            h1="PET"
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
            h1="PET"
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
            h1="PET"
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
            h1="OS MELHORES PRECO DE PASSAGEM AREA E DE ONIBUS VOCE ENCONTRA AQUI"
          />
        </div>
      </main>
    </div>
  );
}
