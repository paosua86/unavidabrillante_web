import React from 'react';
import mujeres from '../assets/mujeres.svg';
import { FcMultipleSmartphones, FcMakeDecision, FcRating, FcGlobe, FcOnlineSupport } from "react-icons/fc";


const CaracteristicasPrincipales = () => {
  return (
    <section className="bg-gradient-to-b  from-strong-pink to-dark-blue py-10">
      <div className="container mx-auto px-4">
        <h2 className="p-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-2" data-aos="fade-up">
          Características principales
        </h2>

        <div class="relative p-4 dark:bg-gray-800">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div class="lg:col-start-2 md:pl-20">

              <ul class="mt-10">
                <li>
                  <div class="flex">
                    <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcMakeDecision className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                        Experiencia de usuario intuitiva
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                        Regístrate, completa tus datos iniciales y accede a tu dashboard personalizado, donde encontrarás lecciones y tareas diarias para avanzar hacia tus metas
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcRating className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                        Gamificación
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                        Gana puntos y alcanza metas para mantenerte motivada en tu proceso de mejora personal
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcGlobe className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                        Comunidad y recursos
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                        Conéctate con personas que también buscan mejorar sus vidas y accede a material extra para reforzar tu crecimiento
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcMultipleSmartphones className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                       Multidispositivo
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                        Accede desde varios dispositivos móviles para que tengas una mejor experiencia
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcOnlineSupport className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                        Terapias personalizadas
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                        Contáctanos cuando lo necesites y nuestro equipo de tutores altamente capacitados te brindará el apoyo y la guía necesarios para ayudarte a avanzar por un precio extra mínimo.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
              <img src={mujeres} alt="Cara" class="relative w-auto mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaracteristicasPrincipales;
