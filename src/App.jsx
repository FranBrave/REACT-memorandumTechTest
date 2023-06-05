import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Series from "./Pages/Series/Series";
import Peliculas from "./Pages/Peliculas/Peliculas";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
