import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Specials from './components/Specials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className="header-container">
        <Header />
        <Nav />
      </header>
      <main>
        <Main />
        <Specials />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
