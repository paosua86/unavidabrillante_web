import React from 'react';
import cara from '../assets/cara.svg';

const Home = () => {
  return (
    <section className="bg-gradient-to-b  from-strong-pink to-yellow-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={cara} alt="Cara" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-2">
              ¡Descubre <h1>"UNA VIDA BRILLANTE"</h1>y comienza tu transformación hoy!
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-pink mb-8">
              Mejora tu autoestima y vive la vida que mereces con nuestra aplicación diseñada por expertos en psicología.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-block py-3 px-8 sm:px-10 md:px-12 lg:px-16 text-lg sm:text-xl font-bold leading-none text-white bg-strong-pink hover:bg-pink rounded-lg shadow-lg">
                Regístrate ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
