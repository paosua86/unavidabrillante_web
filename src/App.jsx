import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
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
import Registrateprincipalttlink from './components/Registratelink';
import Registratecurso from './components/Registratecurso';
import Eliminarcuenta from './components/Eliminarcuenta';
import Bannergeneral from './components/bannergeneral';
import BlogComponent from './components/blogcomponent';
import Registratecursoblog from './components/Registratecursoblog';
import BlogComponent2 from './components/blogcomponent2';
import Gracias from './components/Gracias';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Routes>
      <Route exact
          path="/"
          element={
            <div>
            <Header />
            <Registrateprincipalttlink />
            <Nosotros />
            <PropuestaDeValor />
            <CaracteristicasPrincipales />
            <Howitworks />
            <PlanesYPrecios />
            <Testimonios />
            <LlamadasAccion />
            <Registratecurso />
            <FAQ />
          </div>
          }
        />
        <Route exact
          path="/ttlink"
          element={
            <div>
              <Header />
              <Registrateprincipalttlink />
              <Nosotros />
              <PropuestaDeValor />
              <CaracteristicasPrincipales />
              <Howitworks />
              <PlanesYPrecios />
              <Testimonios />
              <LlamadasAccion />
              <Registratecurso />
              <FAQ />
            </div>
          }
        />
        <Route exact
          path="/pint"
          element={
            <div>
              <Header />
              <Registrateprincipalttlink />
              <Nosotros />
              <PropuestaDeValor />
              <CaracteristicasPrincipales />
              <Howitworks />
              <PlanesYPrecios />
              <Testimonios />
              <LlamadasAccion />
              <Registratecurso />
              <FAQ />
            </div>
          }
        />
        <Route exact
          path="/omnisend"
          element={
            <div>
              <Header />
              <Registrateprincipalttlink />
              <Nosotros />
              <PropuestaDeValor />
              <CaracteristicasPrincipales />
              <Howitworks />
              <PlanesYPrecios />
              <Testimonios />
              <LlamadasAccion />
              <Registratecurso />
              <FAQ />
            </div>
          }
        />
        <Route exact
          path="/landingapp"
          element={
            <div>
              <Header />
              <Registrateprincipalttlink />
              <Nosotros />
              <PropuestaDeValor />
              <CaracteristicasPrincipales />
              <Howitworks />
              <PlanesYPrecios />
              <Testimonios />
              <LlamadasAccion />
              <Registratecurso />
              <FAQ />
            </div>
          }
        />
        <Route exact path="/politicadeprivacidad" element={
          <div>
            <PoliticaDePrivacidad />
          </div>
        }
        />
        <Route exact path="/condicionesdeservicio" element={
          <div>
            <CondicionesDeServicio />
          </div>
        }
        />
        <Route exact path="/9manerasdialogointerno" element={
          <div>
            <BlogComponent />
            <Bannergeneral />
            <Registratecursoblog />
          </div>
        }
        />
        <Route exact path="/aceptarloscumplidos" element={
          <div>
            <BlogComponent2 />
            <Bannergeneral />
            <Registratecursoblog />
          </div>
        }
        />
        <Route exact path="/gracias" element={
          <div>
            <Gracias />
          </div>
        }
        />
        <Route exact path="/eliminarcuenta" element={
          <div>
            <Eliminarcuenta />
          </div>
        }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
