import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nosotros from './components/Nosotros';
import PropuestaDeValor from './components/PropuestaDeValor';
import CaracteristicasPrincipales from './components/CaracteristicasPrincipales';
import Howitworks from './components/Howitworks';
import Testimonios from './components/Testimonios';
import PlanesYPrecios from './components/PlanesYPrecios';
import LlamadasAccion from './components/LlamadasAccion';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PoliticaDePrivacidad from './components/PoliticaDePrivacidad';
import CondicionesDeServicio from './components/CondicionesDeServicio';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Nosotros />
                <PropuestaDeValor />
                <CaracteristicasPrincipales />
                <Howitworks />
                <PlanesYPrecios />
                <Testimonios />
                <LlamadasAccion />
                <FAQ />
              </div>
            }
          />
          <Route
            exact
            path="/politicadeprivacidad"
            element={
              <div>
                <PoliticaDePrivacidad />
              </div>
            }
          />
          <Route
            exact
            path="/condicionesceservicio"
            element={
              <div>
                <CondicionesDeServicio />
              </div>
            }
          />
          <Route
            path="/*"
            element={
              <div>
                <Header />
                <Nosotros />
                <PropuestaDeValor />
                <CaracteristicasPrincipales />
                <Howitworks />
                <PlanesYPrecios />
                <Testimonios />
                <LlamadasAccion />
                <FAQ />

              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
