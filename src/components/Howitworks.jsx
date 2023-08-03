import React from 'react';
import { FcRotateToLandscape, FcAddressBook, FcLike } from 'react-icons/fc';


const Howitworks = () => {
  return (
    <section className="overflow-x-hidden bg-gradient-to-b  from-dark-blue to-yellow-300 px-4 py-24 flex flex-col items-center">
      <div className="container mx-auto py-12 px-2 sm:px-6 lg:py-24 lg:px-8 flex flex-col items-center">
        <h2 className="px-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
          ¿Cómo funciona?
        </h2>
        <p className="mt-2 leading-6 text-white text-base sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300">
          Sencillo, intuitivo y práctico
        </p>
      </div>
      <div data-aos="fade-right" className="container grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcRotateToLandscape className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h3 className="text-2xl lg:text-3xl text-white mb-2 leading-5">Bájate la aplicación</h3>
          <p className="text-xl lg:text-2xl mt-2 leading-6 text-white dark:text-gray-300">
            Puedes descargar la app desde la tienda oficial o ingresar desde la web,
            <button onClick={() => window.scrollTo(0, 1)}>
              clic aquí
            </button>
          </p>

        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcAddressBook className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h3 className="text-2xl lg:text-3xl mb-2 text-white leading-5 ">Abre una cuenta</h3>
          <p className="text-xl lg:text-2xl mt-2 leading-6 text-white dark:text-gray-300">
            Crea tu cuenta y llena tus datos. En web selecciona tu preferencia de pago, en la tienda oficial suscríbete, tienes 7 días gratuitos de prueba
          </p>

        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcLike className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h3 className="text-2xl lg:text-3xl text-white mb-2 leading-5">Disfruta del camino</h3>
          <p className="text-xl lg:text-2xl mt-2 leading-6 text-white dark:text-gray-300">
            Disfruta del contenido mientras vas descubriendo una vida más brillante y hermosa!
          </p>

        </div>
      </div>
    </section>
  );
};
export default Howitworks;
