import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Homework from "./pages/Homework";
import MentalHealth from "./pages/MentalHealth";
import Information from "./pages/Information";
import WorkLife from "./pages/WorkLife";
import DigitalSafety from "./pages/DigitalSafety";
import Financial from "./pages/Financial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/information" element={<Information />} />
        <Route path="/work-life" element={<WorkLife />} />
        <Route path="/digital-safety" element={<DigitalSafety />} />
        <Route path="/financial" element={<Financial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;