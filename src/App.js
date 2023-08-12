import Brands from "./components/brands/Brands";
import Catalogue from "./components/header/Catalogue";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Promo />
        <Brands />
        <Routes>
          <Route path="/catalog" element={<Catalogue />} />
          {/* ...другие маршруты */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
