import {Home,Features,Pricing} from './pages'
import { Footer, Navbar } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

function App() {
  AOS.init({
    offset: 200,
  });
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="features" element={<Features />} />
     <Route path="pricing" element={<Pricing />} />
    </Routes>
    <footer>
      <Footer />
    </footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
