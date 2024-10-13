import { Link } from "react-router-dom";
import { useState } from "react"; // Não esqueça de importar useState
import '../css/doador.css'; // Verifique o caminho do CSS
import estoque from '../img/estoque de sangue.png';

const Header = () => {
    const [isMobileMenuActive, setMobileMenuActive] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuActive(!isMobileMenuActive);
    };

    return (
        <header>
            <nav id="navbar">
                <i id="nav_logo">🩸Blood Bond</i>

                <ul id="nav_list">
                    <li className="nav-item active">
                        <Link to="/App">Início</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/LogHemo">Sou Hemonúcleo</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/notificacao">Notificação</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/DoadorLog">Doador</Link>
                    </li>
                </ul>

                <button id="mobile_btn" onClick={toggleMobileMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </nav>

            <div id={`mobile_menu ${isMobileMenuActive ? 'active' : ''}`}>
                <ul id="mobile_nav_list">
                    <li className="nav-item">
                        <Link to="/App">Início</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/LogHemo">Sou Hemonúcleo</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/notificacao">Notificação</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/DoadorLog">Doador</Link>
                    </li>
                </ul>

                <button className="btn-default">
                    Seja doador
                </button>
            </div>
        </header>
    );
};

const Doadorest = () => {
    return (
        <>
            <Header />
            <div className="doador-body">
                <div className="info-box">
                    <h1 id="h1not">Por que receber a notificação?</h1>
                    <p id="nottext">
                        Quando cadastrado no nosso sistema, você poderá ajudar ainda mais pessoas que <strong>necessitam de ajuda!</strong>
                        A notificação servirá como uma <strong>ponte</strong> para que você sempre possa doar nos momentos em que os hemonúcleos estiverem sem estoque.
                    </p>
                    <p id="nottex">
                        Você também pode escolher ser notificado para ser alertado sempre que o prazo para doar novamente acabe, fazendo com que você tenha uma constante doação, mantendo sempre os <strong>estoques de sangue</strong> cheios para aqueles que precisem!
                    </p>
                </div>
                
                <h1 id="mapheader">Estoque de sangue</h1>
                <div className="img">
                    <img src={estoque} alt="Estoque de Sangue" />
                </div>
            </div>
        </>
    );
};

export default Doadorest;
