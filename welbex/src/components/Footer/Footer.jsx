import { /* Routes, Route */ Link } from "react-router-dom";
import { ReactComponent as Telegram } from "./../../images/telegram-min.svg";
import { ReactComponent as Viber } from "./../../images/viber-min.svg";
import { ReactComponent as Whatsapp } from "./../../images/whatsapp-min.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <p className="footer-about__title">О компании</p>
        <ul className="footer-about__list">
          <li className="footer-about__item">
            <Link to="/partners" className="footer-about__link">
              Партнерская программа
            </Link>
          </li>
          <li className="footer-about__item">
            <Link to="/vacancies" className="footer-about__link">
              Вакансии
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-menu">
        <p className="footer-menu__title">Меню</p>
        <ul className="footer-menu__list">
          <li className="footer-menu__item">
            <Link to="/price" className="footer-menu__link">
              Рассчет стоимости
            </Link>
          </li>
          <li className="footer-menu__item">
            <Link to="/services" className="footer-menu__link">
              Услуги
            </Link>
          </li>
          <li className="footer-menu__item">
            <Link to="/widgets" className="footer-menu__link">
              Виджеты
            </Link>
          </li>
          <li className="footer-menu__item">
            <Link to="/integration" className="footer-menu__link">
              Интеграция
            </Link>
          </li>
          <li className="footer-menu__item">
            <Link to="/clients" className="footer-menu__link">
              Наши клиенты
            </Link>
          </li>
          <li className="footer-menu__item">
            <Link to="/thanks" className="footer-menu__link">
              Благодарность клиентов
            </Link>
          </li>
          <li className="footer-menu__item">
            <Link to="/cases" className="footer-menu__link">
              Кейсы
            </Link>
          </li>
          <li className="footer-menu__item">
            <Link to="/certificated" className="footer-menu__link">
              Сертификаты
            </Link>
          </li>
          <li className="footer-menu__item">
            <a href="http://youtube.com/" className="footer-menu__link">
              Блог на YouTube
            </a>
          </li>
          <li className="footer-menu__item">
            <Link to="/questions" className="footer-menu__link">
              Вопрос / Ответ
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-contacts">
        <p className="footer-contacts__title">Контакты</p>
        <address className="footer-contacts__address">
          <ul className="footer-contacts__list">
            <li className="footer-contacts__item">
              <Link to="tel:+75555555555" className="footer-contacts__phone">
                +7 555 555-55-55
              </Link>
            </li>
            <li className="footer-contacts__item">
              <a
                href="https://telegram.org/"
                className="footer-contacts__link-telegram"
              >
                <Telegram className="svg-contacts" />
              </a>
              <a
                href="https://viber.com/ru/"
                className="footer-contacts__link-viber"
              >
                <Viber className="svg-contacts" />
              </a>
              <a
                href="https://whatsapp.com/?lang=ru"
                className="footer-contacts__link-whatsapp"
              >
                <Whatsapp className="svg-contacts" />
              </a>
            </li>
            <li className="footer-contacts__item">
              <span>Москва, Путевой проезд 3с1, к 902</span>
            </li>
          </ul>
        </address>
        <div className="footer-privacy">
          <ul className="footer-privacy__list">
            <li className="footer-privacy__item">
              <span className="footer-privacy__protection">
                ©WELBEX 2022. Все права защищены.
              </span>
            </li>
            <li className="footer-privacy__item">
              <Link to="/privacy" className="footer-privacy__link">
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
