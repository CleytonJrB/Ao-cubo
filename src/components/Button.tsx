import './button.scss';
import FlexaDireita from '../assets/Images/chevrons-right.svg';

type ButtonProps = {
  text?: string;
}

export function Button(props: ButtonProps) {
  return (
      <button type="button">
        <img src={FlexaDireita} />
        {props.text || 'Ver mais'}
      </button>
  );
}
