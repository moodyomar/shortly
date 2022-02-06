import { Header, Navbar, Shortner } from './components'
import AdvancedTactics from './components/AdvancedTactics/AdvancedTactics';
import BoostLinks from './components/BoostLinks/BoostLinks';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Header />
      </header>

      <main>
        <Shortner />
        <AdvancedTactics />
        <BoostLinks />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
