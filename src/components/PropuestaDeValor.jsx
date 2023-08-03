import React from 'react';
import chicas from '../assets/chicas.svg';

const PropuestaDeValor = () => {
  return (
    <section className="overflow-x-hidden bg-gradient-to-b  from-light-blue to-strong-pink">
      <div className="lg:container lg:mx-auto py-12 px-2 lg:py-24 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="text-center lg:text-left">
            <h2 className="text-8xl lg:text-6xl font-bold text-white dark:text-white">
              Desarrolla tu autoestima y valía personal
            </h2>
            <p className="p-8 text-lg md:text-2xl lg:text-3xl text-pink mb-8" data-aos="fade-up" data-aos-delay="200">
              Con ejercicios diarios y lecciones entretenidas, diseñadas por psicólogos experimentados, a un precio accesible para todas.
            </p>
          </div>
        </div>
        <div data-aos="fade-down" className="md:w-1/2 mb-8 md:mb-0 order-first md:order-last">
          <img src={chicas} alt="Chicas" />
        </div>
      </div>
    </section>
  );
};

export default PropuestaDeValor;
