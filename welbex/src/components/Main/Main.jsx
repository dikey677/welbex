import Media from "react-media";
import React, { Fragment } from "react";

const MainSection = () => {
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 479px)",
          // medium: "(min-width: 480px) and (max-width: 767px)",
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
            {/* {matches.medium && null} */}
            {matches.large && (
              <main className="main">
                <div className="main__purple-light"></div>
                <div className="main__red-light"></div>
                <div className="main__purple-ball"></div>
                <div className="main__red-ball"></div>
                <div className="main__red-ball-small"></div>

                <section className="main-section">
                  <div className="main-section__content">
                    <h1 className="main-section__title">
                      Зарабатывайте больше <br />
                      <span className="main-section__welbex-text-decor">
                        с WELBEX
                      </span>
                    </h1>
                    <p className="main-section__description">
                      Развиваем и контролируем продажи за вас
                    </p>
                  </div>

                  <div className="main-section__advantages">
                    <p className="main-section__offer">
                      Вместе с{" "}
                      <span className="main-section__consult-text-decor">
                        бесплатной консультацией{" "}
                      </span>
                      мы дарим:
                    </p>

                    <ul className="main-section__list">
                      <li className="main-section__item">
                        <p className="main-section__name">Виджеты</p>
                        <div className="main-section__text">
                          30 готовых решений
                        </div>
                      </li>
                      <li className="main-section__item">
                        <p className="main-section__name">Skype аудит</p>
                        <div className="main-section__text">
                          отдела продаж и CRM системы
                        </div>
                      </li>
                      <li className="main-section__item">
                        <p className="main-section__name">Dashboard</p>
                        <div className="main-section__text">
                          с показателями вашего бизнеса
                        </div>
                      </li>
                      <li className="main-section__item">
                        <p className="main-section__name">35 дней</p>
                        <div className="main-section__text">
                          использования CRM
                        </div>
                      </li>
                    </ul>

                    <button type="submit" className="main-section__button">
                      Получить консультацию
                    </button>
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
