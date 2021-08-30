import './produto.scss';
import {Button} from './Button';
type ProdutoProps = {
  href?:string;
  src?:string;
  alt?:string;
  h1?:string;
}

export function Produto(props: ProdutoProps) {
  return (
    <a href={props.href||'#'}>
      <div>
        <img src={props.src||''} alt={props.alt||''} />
        <h1>{props.h1}</h1>
        <h1><br /> EM PROMOCAO <br /><span>NO PIX</span></h1>
        <Button/>
      </div>
    </a>
  );
}