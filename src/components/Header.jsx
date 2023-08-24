import React from 'react';
import cara from '../assets/cara.svg';
import 'aos/dist/aos.css';

const Header = () => {
  return (
    <section id="descargas" className="bg-gradient-to-b overflow-x-hidden from-strong-pink to-yellow-300 flex justify-center items-center">
      <div className="container mx-4 flex flex-col lg:flex-row justify-center items-center m-20 ">
        <div className="mb-8 lg:w-1/2" data-aos="zoom-in">
          <img src={cara} alt="Cara" />
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-7xl font-bold text-white dark:text-white mb-2">
              ¡Descubre <h2 data-aos="zoom-in" >"UNA VIDA BRILLANTE"</h2>y comienza tu transformación hoy!
            </h1>
            <p className="text-4xl text-pink mb-8">
              Mejora tu autoestima y vive la vida que mereces con nuestra aplicación diseñada por expertos en psicología.
            </p>

            <div class="lg:mt-8 items-center justify-center lg:justify-left space-x-4  flex flex-col lg:flex-row">
              <a href="#" className="container mt-12 lg:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg className="mr-3 w-16 lg:w-7 h-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                <div class="text-left ">
                  <div class="w:2 mb-1 font-sans text-2xl lg:text-xs ">Disponible en</div>
                  <div class="-mt-1 mb-2 font-sans text-4xl lg:text-sm font-semibold">Google Play</div>
                </div>
              </a>
              <a href="#" className="container mt-12 lg:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg className="mr-3 w-16 lg:w-7 h-8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" zoomAndPan="magnify" viewBox="0 0 250 150" height="30" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="ca605be640"><path d="M 2.863281 2.863281 L 149.863281 2.863281 L 149.863281 149.863281 L 2.863281 149.863281 Z M 2.863281 2.863281 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#ca605be640)"><path fill="#ffffff" d="M 128.335938 24.394531 C 114.457031 10.511719 95.996094 2.863281 76.363281 2.863281 C 56.734375 2.863281 38.273438 10.511719 24.394531 24.394531 C 10.511719 38.273438 2.863281 56.734375 2.863281 76.363281 C 2.863281 95.996094 10.511719 114.457031 24.394531 128.335938 C 38.273438 142.21875 56.734375 149.863281 76.363281 149.863281 C 95.996094 149.863281 114.457031 142.21875 128.335938 128.335938 C 142.21875 114.457031 149.863281 95.996094 149.863281 76.363281 C 149.863281 56.734375 142.21875 38.273438 128.335938 24.394531 Z M 10.996094 76.363281 C 10.996094 68.179688 12.511719 60.34375 15.273438 53.113281 L 41.710938 53.113281 C 40.523438 60.511719 39.90625 68.34375 39.90625 76.363281 C 39.90625 84.117188 40.480469 91.695312 41.589844 98.871094 L 14.988281 98.871094 C 12.40625 91.851562 10.996094 84.269531 10.996094 76.363281 Z M 48.035156 76.363281 C 48.035156 68.289062 48.691406 60.445312 49.941406 53.113281 L 72.300781 53.113281 L 72.300781 98.871094 L 49.816406 98.871094 C 48.644531 91.753906 48.035156 84.167969 48.035156 76.363281 Z M 95.589844 28.984375 C 97.816406 33.765625 99.667969 39.152344 101.101562 44.984375 L 80.429688 44.984375 L 80.429688 11.746094 C 85.941406 13.769531 91.304688 19.800781 95.589844 28.984375 Z M 72.300781 11.746094 L 72.300781 44.984375 L 51.628906 44.984375 C 53.0625 39.152344 54.914062 33.765625 57.140625 28.984375 C 61.425781 19.800781 66.789062 13.769531 72.300781 11.746094 Z M 72.300781 107 L 72.300781 140.984375 C 66.789062 138.960938 61.425781 132.925781 57.140625 123.746094 C 54.816406 118.765625 52.910156 113.117188 51.449219 107 Z M 80.429688 140.984375 L 80.429688 107 L 101.28125 107 C 99.820312 113.117188 97.914062 118.765625 95.589844 123.746094 C 91.304688 132.925781 85.941406 138.960938 80.429688 140.984375 Z M 80.429688 98.871094 L 80.429688 53.113281 L 102.789062 53.113281 C 104.039062 60.445312 104.695312 68.289062 104.695312 76.363281 C 104.695312 84.167969 104.085938 91.753906 102.914062 98.871094 Z M 111.019531 53.113281 L 137.457031 53.113281 C 140.21875 60.34375 141.734375 68.179688 141.734375 76.363281 C 141.734375 84.269531 140.324219 91.851562 137.742188 98.871094 L 111.140625 98.871094 C 112.25 91.695312 112.824219 84.117188 112.824219 76.363281 C 112.824219 68.34375 112.207031 60.511719 111.019531 53.113281 Z M 133.695312 44.984375 L 109.449219 44.984375 C 107.828125 37.886719 105.648438 31.320312 102.957031 25.546875 C 100.867188 21.070312 98.53125 17.214844 96.003906 14.011719 C 112.179688 19.113281 125.65625 30.351562 133.695312 44.984375 Z M 56.726562 14.011719 C 54.199219 17.214844 51.863281 21.070312 49.773438 25.546875 C 47.082031 31.320312 44.902344 37.886719 43.28125 44.984375 L 19.035156 44.984375 C 27.074219 30.351562 40.550781 19.113281 56.726562 14.011719 Z M 18.632812 107 L 43.113281 107 C 44.746094 114.386719 46.988281 121.207031 49.773438 127.183594 C 51.863281 131.660156 54.199219 135.515625 56.726562 138.71875 C 40.277344 133.527344 26.621094 121.996094 18.632812 107 Z M 96.003906 138.71875 C 98.53125 135.515625 100.867188 131.660156 102.957031 127.183594 C 105.742188 121.207031 107.980469 114.386719 109.617188 107 L 134.097656 107 C 126.109375 121.996094 112.449219 133.527344 96.003906 138.71875 Z M 96.003906 138.71875 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                <div class="text-left">
                  <div class="mb-1 font-sans text-2xl lg:text-xs">Disponible en</div>
                  <div class="-mt-1 mb-2 font-sans text-4xl lg:text-sm font-semibold">la Web</div>
                </div>
              </a>
              <a href="#" className=" container mt-12 lg:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg className="mr-3 w-16 lg:w-7 h-8" class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                <div class="text-left">
                  <div class="mb-1 font-sans text-2xl lg:text-xs">Próximamente en</div>
                  <div class="-mt-1 mb-2 font-sans text-4xl lg:text-sm font-semibold">Mac App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
