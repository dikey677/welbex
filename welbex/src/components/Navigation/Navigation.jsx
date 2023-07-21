import { /*Routes, Route,*/ Link } from "react-router-dom";

const Welbex = () => {
  return (
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

    // Код ниже в рамках задания не используется (шаблон для примера)
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
