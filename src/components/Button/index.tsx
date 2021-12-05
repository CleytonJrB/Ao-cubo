import "./button.scss";
import FlechaDireita from "../../assets/Images/chevrons-right.svg";

type ButtonProps = {
  text?: string;
};

export function Button(props: ButtonProps) {
  return (
    <button className="contButton" type="button">
      <img className="flechaDireita" src={FlechaDireita} />
      {props.text || "Ver mais"}
    </button>
  );
}
