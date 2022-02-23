import {Home,Features,Pricing} from './pages'
import { Navbar } from './components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="features" element={<Features />} />
     <Route path="pricing" element={<Pricing />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
