import React from 'react';
import logocompleto from '../assets/logocompleto.svg';

const Nosotros = () => {
    return (
        <section className="flex justify-center items-center h-screen bg-gradient-to-b  from-yellow-300 to-light-blue">
        <div className="flex max-w-xl overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="w-1/3">
            <img src={logocompleto} alt="Logo completo" className="h-48 max-w-xl lg mx-auto" />
          </div>
          <div className="w-2/3 p-4 flex flex-col justify-center">
            <h2 className="p-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-2">
              Sobre Nosotros
            </h2>
                    <p class="mt-2 text-sm text-gray-600">
                        Con más de 10 años de experiencia ayudando a personas y familias a mejorar sus vidas y encontrar la felicidad y su mejor versión, nuestro equipo de psicólogos ha creado "Una Vida Brillante" para apoyar a mujeres en su proceso de empoderamiento y crecimiento personal de una manera más rápida, eficaz y económica.
                    </p>
                    <div class="flex mt-2 item-center">
                        <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Nosotros;
