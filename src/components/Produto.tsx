import './produto.scss';
import { Button } from './Button';
type ProdutoProps = {
  href?: string;
  src?: string;
  alt?: string;
  h1?: string;
}

export function Produto(props: ProdutoProps) {
  return (
    <div className="contProduto">
      <a href={props.href || '#'}>
        <img className="imgProd" src={props.src || ''} alt={props.alt || ''} />
        <h1>{props.h1}</h1>
        <h1><br /> EM PROMOCAO <br /><span>NO PIX</span></h1>
        <Button />
      </a>
    </div>
  );
}