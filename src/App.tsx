import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;