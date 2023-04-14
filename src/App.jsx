import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
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
      <Footer />
    </div>
  );
}

export default App;
