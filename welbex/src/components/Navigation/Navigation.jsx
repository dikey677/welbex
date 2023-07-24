import { /*Routes, Route,*/ Link } from "react-router-dom";
import Media from "react-media";
import React, { Fragment } from "react";
import { ReactComponent as Telegram } from "./../../images/telegram-min.svg";
import { ReactComponent as Viber } from "./../../images/viber-min.svg";
import { ReactComponent as Whatsapp } from "./../../images/whatsapp-min.svg";

const Welbex = () => {
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
              <nav className="nav">
                <ul className="nav-list">
                  <li className="nav-list__item">
                    <Link className="nav-list__link" to="/services">
                      Услуги
                    </Link>
                  </li>
                  <li className="nav-list__item">
                    <Link className="nav-list__link" to="/widgets">
                      Виджеты
                    </Link>
                  </li>
                  <li className="nav-list__item">
                    <Link className="nav-list__link" to="/integrations">
                      Интеграции
                    </Link>
                  </li>
                  <li className="nav-list__item">
                    <Link className="nav-list__link" to="/cases">
                      Кейсы
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
            {matches.medium && null}
            {matches.large && (
              <nav className="nav">
                <ul className="nav-list">
                  <li className="nav-list__item">
                    <Link className="nav-list__link" to="/services">
                      Услуги
                    </Link>
                  </li>
                  <li className="nav-list__item">
                    <Link className="nav-list__link" to="/widgets">
                      Виджеты
                    </Link>
                  </li>
                  <li className="nav-list__item">
                    <Link className="nav-list__link" to="/integrations">
                      Интеграции
                    </Link>
                  </li>
                  <li className="nav-list__item">
                    <Link className="nav-list__link" to="/cases">
                      Кейсы
                    </Link>
                  </li>
                  <li className="nav-list__item">
                    <Link className="nav-list__link" to="/certificates">
                      Сертификаты
                    </Link>
                  </li>
                </ul>

                <ul className="nav-contacts__list">
                  <li className="nav-contacts__item">
                    <Link to="tel:+75555555555" className="nav-contacts__phone">
                      +7 555 555-55-55
                    </Link>
                  </li>
                  <li className="nav-contacts__item">
                    <a
                      href="https://telegram.org/"
                      className="nav-contacts__link-telegram"
                    >
                      <Telegram className="svg-contacts" />
                    </a>
                  </li>
                  <li className="nav-contacts__item">
                    <a
                      href="https://viber.com/ru/"
                      className="nav-contacts__link-viber"
                    >
                      <Viber className="svg-contacts" />
                    </a>
                  </li>
                  <li className="nav-contacts__item">
                    <a
                      href="https://whatsapp.com/?lang=ru"
                      className="nav-contacts__link-whatsapp"
                    >
                      <Whatsapp className="svg-contacts" />
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </Fragment>
        )}
      </Media>
    </div>

    // Код ниже в рамках задания не используется (шаблон для примера реализации раутинга)
    // <Routes>
    //     <Route path="/" element={<HomePage />}></Route>
    //     <Route path="/services" element={<ServicesPage />}></Route>
    //     <Route path="/widgets" element={<WidgetsPage />}></Route>
    //     <Route path="/integrations" element={<IntegrationsPage />}></Route>
    //     <Route path="/cases" element={<CasesPage />}></Route>
    //     <Route path="*" element={<NotFoundPage />}></Route>
    // </Routes>
  );
};

export default Welbex;
