import React from "react";
import logoAdalab from "./../images/logo-adalab-80px.png";

class LandingMain extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="page">
          <main className="page__main">
            <div className="main__container">
              <div className="main__wrapper">
                <div className="main__title-container">
                  <h1 className="h1__title">Awesome profile cards</h1>
                </div>
                <div className="main__description">
                  <h2 className="description__title">
                    Crea tu tarjeta de visita
                  </h2>
                  <p className="description__text">
                    Crea mejores contactos profesionales de forma fácil y cómoda
                  </p>
                </div>
                <ul className="main__steps">
                  <li className="steps__item">
                    <div className="item__container">
                      {" "}
                      <i className="item__icon far fa-object-ungroup"></i>
                      <span className="item__name">diseña</span>
                    </div>
                  </li>
                  <li className="steps__item">
                    <div className="item__container">
                      {" "}
                      <i className="item__icon far fa-keyboard"></i>
                      <span className="item__name">rellena</span>
                    </div>
                  </li>
                  <li className="steps__item">
                    <div className="item__container">
                      {" "}
                      <i className="item__icon fas fa-share-alt"></i>
                      <span className="item__name">comparte</span>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              <a className="start__link" href="cards.html">
                comenzar
              </a>
            </div>
          </main>
          <footer className="page__footer">
            {" "}
            <span className="footer__copyright">
              Awesome profile-cards @2019
            </span>
            <a
              className="footer__link"
              href="https://adalab.es/"
              target="blank"
            >
              <img
                className="footer__logo"
                src={logoAdalab}
                alt="Logotipo de Adalab"
              />
            </a>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingMain;