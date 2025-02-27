import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



<Footer/>


function App() {
  return (
    <>
      <div>
        <Router>
          <div>
          <Header/>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
