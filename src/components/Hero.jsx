import React from 'react';
import 'aos/dist/aos.css';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b overflow-x-hidden from-strong-pink to-yellow-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 flex flex-col md:flex-row items-center justify-center text-center">
        <div data-aos="fade-up">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Impulsa Tu Autoestima
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Ofrecemos una variedad de servicios para ayudarte a sentirte segura, valiente y hermosa. Tu bienestar es nuestra pasión.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-strong-pink bg-white md:py-4 md:text-lg md:px-10">
                Nuestros Servicios
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-strong-pink md:py-4 md:text-lg md:px-10">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
