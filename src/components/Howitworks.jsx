import React from 'react';
import { FcRotateToLandscape, FcAddressBook, FcLike } from 'react-icons/fc';


const Howitworks = () => {
  return (
    <section className="bg-gradient-to-b  from-dark-blue to-pink px-4 py-16 sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="p-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-2">

          ¿Cómo funciona?
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sencillo, intuitivo y práctico
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcRotateToLandscape className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Bájate la aplicación gratis</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Desde la tienda oficial descárgate la app o haz clic aquí
          </p>

        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcAddressBook className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Abre una cuenta</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Crea tu cuenta, llena tus datos y selecciona tu preferencia de pago
          </p>

        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcLike className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Disfruta de la app</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Comienza tu camino hacia una vida más brillante!
          </p>

        </div>
      </div>
    </section>
  );
};
export default Howitworks;
