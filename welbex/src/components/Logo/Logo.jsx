import { /*Routes, Route,*/ Link } from "react-router-dom";
import { ReactComponent as Picture } from "./../../images/logo.svg";
import { ReactComponent as WelbexLogo } from "./../../images/welbex-min.svg";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <ul className="logo__list">
          <li className="logo__item-picture">
            <Picture />
          </li>
          <li className="logo__item-name">
            <WelbexLogo />
          </li>
        </ul>
      </Link>

      <p className="logo__link-comment">
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </div>
  );
};

export default Logo;
