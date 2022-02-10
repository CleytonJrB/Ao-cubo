import "../styles/home.scss";
import "../components/Produto/produto.scss";

import { Propaganda } from "../components/Propaganda";

import Globe from "../assets/Images/Globe.svg";
import Medico from "../assets/Images/Health.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
type ProdutoProps = {
  id: string;
  name: string;
  thumbnail: string;
};
export function Home() {
  const [produtos, setProdutos] = useState<ProdutoProps[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3333/produto").then((res) => {
      setProdutos(res.data);
    });
  }, []);
  return (
    <div id="homePage">
      <main id="mainContent">
        <div className="headerMain">
          <p className="logoNameMain">AO CUBO</p>
          <div className="promOver">
            <p>A PROMOCAO TERMINA EM:</p>
            <div className="circleRotate">
              <div />
            </div>
          </div>
        </div>
        <section className="listagemProduto">
          {produtos.map((produto) => (
            <div key={produto.id} className="contProduto">
              <a href={`/produtos`}>
                <img
                  className="imgProd"
                  src={produto.thumbnail}
                  alt={produto.name}
                />
                <h1>{produto.name}</h1>
                <h1>
                  <br /> EM PROMOCAO <br />
                  <span>NO PIX</span>
                </h1>
                <Button />
              </a>
            </div>
          ))}
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
