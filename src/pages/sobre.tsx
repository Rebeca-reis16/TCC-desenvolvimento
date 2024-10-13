import React from 'react';
import '../css/header.css';
import '../css/doador.css';
import doador from '../img/images.png';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Sobre: React.FC = () => {
    return (
        <div>
            <header>
                <nav id="navbar">
                    <i id="nav_logo">🩸Blood Bond</i>
                    <ul id="nav_list">
                        <li className="nav-item active">
                            <a href="/">Início</a>
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
                    <button id="mobile_btn">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </nav>

                <div id="mobile_menu">
                    <ul id="mobile_nav_list">
                        <li className="nav-item">
                            <Link to="#home">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#Login">Doador</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#Login">Sou Hemonúcleo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#Login">Notificação</Link>
                        </li>
                    </ul>
                    <button className="btn-default">Seja doador</button>
                </div>
            </header>

            <h1 id="reqheader">Requisitos básicos da doação</h1>
            <div className="container">
                <section id="reqmae">
                    <div id="reqtext">
                        <article id="img">
                            <img src={doador} alt="Requisitos para Doação" />
                        </article>
                        <ul>
                            <li>
                                Ter idade entre 16 e 69 anos (menores de 18 anos devem apresentar consentimento formal do responsável legal).
                            </li>
                            <br />
                            <li>
                                Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos.
                            </li>
                            <br />
                            <li>
                                Apresentar documento de identificação com foto emitido por órgão oficial (Carteira de Identidade, Carteira Nacional de Habilitação,
                                Carteira de Trabalho, Passaporte, Registro Nacional de Estrangeiro, Certificado de Reservista e Carteira Profissional emitida por classe).
                                São aceitos documentos digitais com foto.
                            </li>
                            <br />
                            <li>Pesar no mínimo 50 kg.</li>
                            <br />
                            <li>Ter dormido pelo menos 6 horas nas últimas 24 horas.</li>
                            <br />
                            <li>
                                Estar alimentado. Evitar alimentos gordurosos nas 3 horas que antecedem a doação de sangue. Caso seja após o almoço, aguardar 2 horas.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

            {/* Espaço extra antes do footer */}
            <div style={{ height: '40px' }} />

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Blood Bond 🎗</h4>
                        <p>
                            R. Nossa Sra. das Graças, 273 - São Geraldo,<br />
                            Volta Redonda - RJ, 27253-610
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4>Contatos</h4>
                        <p>Email: <a href="mailto:revitalize.blood@gmail.com">revitalize.blood@gmail.com</a></p>
                    </div>
                    <div className="footer-section">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/notificacao">Notificação</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Siga-nos</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                           
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2024 – Malvatrem productions.</p>
                </div>
            </footer>
        </div>
    );
};

export default Sobre;
 