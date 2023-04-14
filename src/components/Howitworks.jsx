import React from 'react';
import { FcRotateToLandscape, FcAddressBook, FcLike } from 'react-icons/fc';


const Howitworks = () => {
  return (
    <section className="overflow-x-hidden bg-gradient-to-b  from-dark-blue to-yellow-300 px-4 py-24 ">
      <div className="container mx-auto py-12 px-2 sm:px-6 lg:py-24 lg:px-8 flex flex-col items-center">
        <h2 className="px-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
          ¿Cómo funciona?
        </h2>
        <p className="mt-2 leading-6 text-white text-base sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300">
          Sencillo, intuitivo y práctico
        </p>
      </div>
      <div data-aos="fade-right" className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center container">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcRotateToLandscape className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-2 leading-5">Bájate la aplicación gratis</h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 leading-6 text-white dark:text-gray-300">
            Desde la tienda oficial descárgate la app o haz clic aquí
          </p>

        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcAddressBook className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 text-white leading-5 ">Abre una cuenta</h3>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 leading-6 text-white dark:text-gray-300">
            Crea tu cuenta, llena tus datos y selecciona tu preferencia de pago
          </p>

        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcLike className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-2 leading-5">Disfruta de la app</h3>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 leading-6 text-white dark:text-gray-300">
            Comienza tu camino hacia una vida más brillante!
          </p>

        </div>
      </div>
    </section>
  );
};
export default Howitworks;
