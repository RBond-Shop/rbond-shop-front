import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page";
import Faq from "./pages/faq";
import Contacts from "./pages/contacts";
import AboutUs from "./pages/about-us";
import PlaceOrder from "./pages/place-order";
import { RootLayout } from "./components/layout";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
