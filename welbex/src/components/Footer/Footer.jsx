import { /* Routes, Route */ Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <p className="footer-about__title">О компании</p>
        <ul className="footer-about__list">
          <li className="footer-about__item">Партнерская программа</li>
          <li className="footer-about__item">Вакансии</li>
        </ul>
      </div>
      <div className="footer-menu">
        <p className="footer-menu__title">Меню</p>
        <ul className="footer-menu__list">
          <li className="footer-menu__item">Рассчет стоимости</li>
          <li className="footer-menu__item">Услуги</li>
          <li className="footer-menu__item">Виджеты</li>
          <li className="footer-menu__item">Интеграция</li>
          <li className="footer-menu__item">Наши клиенты</li>
          <li className="footer-menu__item">Благоджарность клиентов</li>
          <li className="footer-menu__item">Кейсы</li>
          <li className="footer-menu__item">Сертификаты</li>
          <li className="footer-menu__item">Блог на YouTube</li>
          <li className="footer-menu__item">Вопрос / Ответ</li>
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
            <li className="footer-contacts__item"></li>
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
            <li>
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
