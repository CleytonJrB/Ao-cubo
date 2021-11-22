import './footerStyle.scss';

import Linked from '../../assets/Images/linkedin.svg';
import Insta from '../../assets/Images/instagram.svg';
import Twitter from '../../assets/Images/twitter.svg';
import Face1 from '../../assets/Images/facebook.svg';
import Youtube from '../../assets/Images/youtube.svg';

export function Footer() {
    return (
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
        </footer>);

}