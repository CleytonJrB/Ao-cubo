import './propaganda.scss';

type PropagProps = {
  href?: string;
  src?: string;
  alt?: string;
  h1?: string;
}

export function Propaganda(props:PropagProps) {
  return (
    <div className="proga">
      <a href={props.href||'#'}>
        <img src={props.src||''} alt={props.alt||''} />
        <h1>{props.h1||'Descricao do Produto'}</h1>
      </a>
    </div>
  );
}