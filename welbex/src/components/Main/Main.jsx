import Media from "react-media";
import React, { Fragment } from "react";

const MainSection = () => {
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 479px)",
          medium: "(min-width: 480px) and (max-width: 767px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <main className="main">
                <div className="main__purple-light"></div>
                <div className="main__red-light"></div>
                <div className="main__yellow-light"> </div>
                <div className="main__red-ball"></div>
                <div className="main__purple-ball"></div>
                <div className="main__yellow-ball"></div>

                <section className="main-section">
                  <h1 className="main-section__title">
                    Зарабатывайте больше <br />
                    <span className="main-section__welbex-text-decor">
                      с WELBEX
                    </span>
                  </h1>
                  <p className="main-section__description">
                    Развиваем и контролируем продажи за вас
                  </p>

                  <div className="main-section__advantages">
                    <p className="main-section__offer">
                      Вместе с{" "}
                      <span className="main-section__consult-text-decor">
                        бесплатной консультацией{" "}
                      </span>
                      мы дарим:
                    </p>

                    <ul className="main-section__list">
                      <li className="main-section__item">Skype аудит</li>
                      <li className="main-section__item">Dashboard</li>
                      <li className="main-section__item">30 виджетов</li>
                      <li className="main-section__item">Месяц аmoCRM</li>
                    </ul>
                  </div>
                </section>
              </main>
            )}
            {matches.medium && null}
            {matches.large && (
              <main className="main">
                <div className="main__purple-light"></div>
                <div className="main__red-light"></div>
                <div className="main__yellow-light"> </div>
                <div className="main__red-ball"></div>
                <div className="main__purple-ball"></div>
                <div className="main__yellow-ball"></div>

                <section className="main-section">
                  <h1 className="main-section__title">
                    Зарабатывайте больше <br />
                    <span className="main-section__welbex-text-decor">
                      с WELBEX
                    </span>
                  </h1>
                  <p className="main-section__description">
                    Развиваем и контролируем продажи за вас
                  </p>

                  <div className="main-section__advantages">
                    <p className="main-section__offer">
                      Вместе с{" "}
                      <span className="main-section__consult-text-decor">
                        бесплатной консультацией{" "}
                      </span>
                      мы дарим:
                    </p>

                    <ul className="main-section__list">
                      <li className="main-section__item">Skype аудит</li>
                      <li className="main-section__item">Dashboard</li>
                      <li className="main-section__item">30 виджетов</li>
                      <li className="main-section__item">Месяц аmoCRM</li>
                    </ul>
                  </div>
                </section>
              </main>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default MainSection;
