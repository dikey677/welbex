import Navigation from "../Navigation/Navigation";
import MainSection from "../Main/Main";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import Media from "react-media";
import React, { Fragment } from "react";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <Media
            queries={{
              // small: "(max-width: 479px)",
              // medium: "(min-width: 480px) and (max-width: 767px)",
              large: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {/* {matches.small && null} */}
                {/* {matches.medium && null} */}
                {matches.large && <Logo />}
              </Fragment>
            )}
          </Media>
        </div>

        <Navigation />
      </header>
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
