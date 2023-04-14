import React from 'react';



const PlanesYPrecios = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b  from-yellow-300 to-strong-pink py-10">
      <div class=" dark:bg-gray-900 ">
        <div class=" container sm:px-6 py-8 mx-auto">
          <div class="xl:items-center xl:-mx-8 xl:flex">
            <div class="flex flex-col items-center xl:items-start xl:mx-8">
              <h2 class="text-3xl max-w-xs sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-2">Nuestros planes</h2>
              <div class="mt-4">
                <span class="inline-block w-40 h-1 bg-strong-pink rounded-full"></span>
                <span class="inline-block w-3 h-1 mx-1 bg-strong-pink rounded-full"></span>
                <span class="inline-block w-1 h-1 bg-strong-pink rounded-full"></span>
              </div>

              <h3 class="mt-4 text-xl max-w-xs sm:text-2xl md:text-3xl textfont-medium text-white dark:text-gray-300">
                Diferentes necesidades, diferente precio
              </h3>
            </div>

            <div class=" px-0 flex-1 xl:mx-8" data-aos="fade-up-left">
              <div class=" mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                <div class="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700 bg-white">
                  <div class="p-6">
                    <h1 class="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">Mensual</h1>

                    <p class="mt-4 text-gray-500 dark:text-gray-300">
                      Contrata el plan mensual, renovación automática, cancela cuando desees.
                    </p>

                    <h2 class="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">$14.99 <span class="text-base font-medium">/al mes</span></h2>

                    <button class="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-strong-pink rounded-md hover:bg-pink hover:text-gray-700 focus:outline-none focus:bg-strong-pink focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                      Empieza hoy
                    </button>
                  </div>

                  <hr class="border-gray-200 dark:border-gray-700" />

                  <div class="p-6">
                    <h1 class="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">Que incluye:</h1>

                    <div class="mt-8 space-y-4">
                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <span class="mx-4 text-gray-700 dark:text-gray-300">Acesso a la app movil de Una Vida Brillante</span>
                      </div>

                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <span class="mx-4 text-gray-700 dark:text-gray-300">7 días de prueba</span>
                      </div>

                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <span class="mx-4 text-gray-700 dark:text-gray-300">Lecciones diarias aprobadas por expertos</span>
                      </div>

                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <span class="mx-4 text-gray-700 dark:text-gray-300">Foros de participación</span>
                      </div>

                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <span class="mx-4 text-gray-700 dark:text-gray-300">Acceso desde varios dispositivos</span>
                      </div>

                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <span class="mx-4 text-gray-700 dark:text-gray-300">Meditaciones</span>
                      </div>

                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                        </svg>

                        <span class="mx-4 text-gray-700 dark:text-gray-300">Lecciones repetitivas y sin sentido</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="flex-1 xl:mx-8">
                  <div class="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0 ">
                    <div class="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700 bg-white">
                      <div class="p-6">
                        <h1 class="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">Anual</h1>

                        <p class="mt-4 text-gray-500 dark:text-gray-300">
                          Garantía de devolución de 15 días, renovación automática, cancela cuando desees.
                        </p>

                        <h2 class="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">$125.90 <span class="text-base font-medium">/al año</span></h2>

                        <button class="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-strong-pink rounded-md hover:bg-pink hover:text-gray-700 focus:outline-none focus:bg-strong-pink focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                          Empieza hoy
                        </button>
                      </div>

                      <hr class="border-gray-200 dark:border-gray-700" />

                      <div class="p-6">
                        <h1 class="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">Que incluye:</h1>

                        <div class="mt-8 space-y-4">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Acesso a la app movil de Una Vida Brillante</span>
                          </div>

                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">7 días de prueba</span>
                          </div>

                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">30% de descuento</span>
                          </div>


                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Lecciones diarias aprobadas por expertos</span>
                          </div>

                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Foros de participación</span>
                          </div>

                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Acceso desde varios dispositivos</span>
                          </div>

                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Meditaciones</span>
                          </div>

                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-strong-pink" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Lecciones repetitivas y sin sentido</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PlanesYPrecios;
