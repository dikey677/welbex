import Navigation from "../Navigation/Navigation";
import MainSection from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Navigation />
      </header>
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
