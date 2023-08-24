import React from 'react';
import 'aos/dist/aos.css';

const Gracias = () => {
  return (
    <section className="p-16 bg-gradient-to-b overflow-x-hidden from-strong-pink to-yellow-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 flex flex-col md:flex-row items-center justify-center text-center">
        <div data-aos="fade-up">
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            😂 Tu compra acaba de hacer que un unicornio haga un moonwalk de felicidad en algún lugar mágico.
          </p>
          <h1 className="text-4xl tracking-tight my-10 font-extrabold text-white sm:text-5xl md:text-6xl">
            🎉 ¡Gracias por hacerlo posible!
          </h1>

          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Pero oye, ¿sabes qué es más mágico que un unicornio bailando?
          </p>
          <h2 className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            ¡Nuestra app!
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            ¡Te estaremos esperando con más sorpresas y, quién sabe, tal vez otro baile mágico! 🦄💃 #RegresaALaAppPorMásMagia"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gracias;
