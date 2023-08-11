import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Promo />
      </div>
    </Router>
  );
}

export default App;
