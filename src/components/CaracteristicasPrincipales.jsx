import React from 'react';
import mujeres from '../assets/mujeres.svg';
import { FcMultipleSmartphones, FcMakeDecision, FcRating, FcGlobe, FcOnlineSupport } from "react-icons/fc";


const CaracteristicasPrincipales = () => {
  return (
    <section className="bg-gradient-to-b  from-strong-pink to-dark-blue py-8 overflow-x-hidden">
      <div className="lg:container lg:mx-auto px-10 lg:px-4">
        <h2 className="lg:container mx-auto py-16 sm:px-6 lg:py-24 lg:px-8 flex flex-col items-center px-8 text-5xl md:text-6xl lg:text-6xl font-bold text-white dark:text-white" >
          Características principales
        </h2>

        <div class="relative p-4 dark:bg-gray-800">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div class="lg:col-start-2 md:pl-20">

              <ul class="mt-10">
                <li>
                  <div class="flex my-10">
                    <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcMakeDecision className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-3xl lg:text-lg font-bold leading-9 lg:leading-6 text-white dark:text-white">
                      Cambio transformacional
                      </h3>
                      <p class="mt-2 text-2xl lg:text-base leading-7 lg:leading-6 text-white dark:text-gray-300">
                      Esta aplicación está diseñada para elevar la autoestima de sus usuarias, cambiando su mentalidad de forma positiva y constructiva con solo 10 minutos de compromiso diario
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex my-10">
                    <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcMakeDecision className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-3xl lg:text-lg font-bold leading-9 lg:leading-6 text-white dark:text-white">
                      Contenido personalizado y secuencial
                      </h3>
                      <p class="mt-2 text-2xl lg:text-base leading-7 lg:leading-6 text-white dark:text-gray-300">
                      Cada día, sus usuarias reciben contenido personalizado elaborado por psicólogos profesionales. Este contenido es secuencial para garantizar que no se pierdan ni salten ningún material esencial para su desarrollo personal.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex my-10">
                    <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcMakeDecision className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-3xl lg:text-lg font-bold leading-9 lg:leading-6 text-white dark:text-white">
                      Cumplimiento de sueños y anhelos
                      </h3>
                      <p class="mt-2 text-2xl lg:text-base leading-7 lg:leading-6 text-white dark:text-gray-300">
                      Nuestra aplicación también ayuda a sus usuarias a desbloquear su potencial para cumplir sus sueños y anhelos que podrían haberse visto limitados debido a una baja autoestima.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex my-10">
                    <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcMakeDecision className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-3xl lg:text-lg font-bold leading-9 lg:leading-6 text-white dark:text-white">
                      Diversidad de métodos de aprendizaje
                      </h3>
                      <p class="mt-2 text-2xl lg:text-base leading-7 lg:leading-6 text-white dark:text-gray-300">
                      La aplicación ofrece varios modos de aprendizaje, como lectura para cambiar la mentalidad, escucha para reforzar el aprendizaje y mindfulness para ayudar a los usuarios a meditar y absorber el contenido.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex my-10">
                    <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcMakeDecision className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-3xl lg:text-lg font-bold leading-9 lg:leading-6 text-white dark:text-white">
                      Experiencia de usuario única
                      </h3>
                      <p class="mt-2 text-2xl lg:text-base leading-7 lg:leading-6 text-white dark:text-gray-300">
                      Cada día es una nueva experiencia en nuestra aplicación, diseñada para desafiar y cambiar lo que los usuarios han pensado sobre sí mismas, mejorando sus ideas fundamentales, paradigmas y quitando limitaciones.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex my-10">
                    <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                        <FcMakeDecision className="text-4xl" />
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-3xl lg:text-lg font-bold leading-9 lg:leading-6 text-white dark:text-white">
                      Progresión cuidadosa
                      </h3>
                      <p class="mt-2 text-2xl lg:text-base leading-7 lg:leading-6 text-white dark:text-gray-300">
                      La aplicación sigue una secuencia cuidadosa para asegurarse de que sus usuarias no se pierdan ningún contenido vital. Si una usuaria no puede entrar en la aplicación un día, se retomará donde lo dejó la última vez.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
              <img src={mujeres} alt="mujeres"  class="relative w-auto mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaracteristicasPrincipales;
