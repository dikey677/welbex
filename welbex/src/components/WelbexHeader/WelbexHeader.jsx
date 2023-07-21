import { /*Routes, Route,*/ Link } from "react-router-dom";

const Welbex = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/services">Услуги</Link>
        </li>
        <li>
          <Link to="/widgets">Виджеты</Link>
        </li>
        <li>
          <Link to="/integrations">Интеграции</Link>
        </li>
        <li>
          <Link to="/cases">Кейсы</Link>
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
