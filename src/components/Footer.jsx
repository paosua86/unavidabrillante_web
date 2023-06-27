import React from 'react';
import { SiTiktok, SiInstagram } from 'react-icons/si';



function Footer() {
    return (

        <footer class="overflow-x-hidden px-3 py-8 text-light-blue transition-colors duration-200 bg-light-blue dark:bg-gray-800 text-2 dark:text-gray-200">
            <div class="flex flex-col">
                <div class="h-px mx-auto rounded-full md:hidden mt-7 w-11">
                </div>
                <div class="flex flex-col mt-4 md:mt-0 md:flex-row">
                    <nav class="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
                        <a aria-current="page" href="#/ttlink" class="hover:text-gray-700 dark:hover:text-white">
                            Home
                        </a>
                        <a aria-current="page" href="mailto:paolasuarezb86@gmail.com?subject=informacion&body=Hola quiero hablar con alguien sobre .." class="hover:text-gray-700 dark:hover:text-white">
                            Contacto
                        </a>
                        <a aria-current="page" href="#/politicadeprivacidad" class="hover:text-gray-700 dark:hover:text-white">
                            Politica de Privacidad
                        </a>
                        <a aria-current="page" href="#/condicionesdeservicio" class="hover:text-gray-700 dark:hover:text-white">
                            Condiciones de Servicio
                        </a>

                    </nav>
                    <div class="h-px mx-auto mt-4 rounded-full md:hidden w-11">
                    </div>
                    <div class="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
                        <a class="hover:text-primary-gray-20" href="https://www.tiktok.com/@una_vida_brillante" target="_blank" rel="noreferrer" >
                            < SiTiktok class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
                        </a>
                        <a class="ml-4 hover:text-primary-gray-20" href="https://www.instagram.com/unavidabrillante/" target="_blank" rel="noreferrer" >
                            < SiInstagram class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
                        </a>
                    </div>
                    <div class="h-px mx-auto mt-4 rounded-full md:hidden w-11 ">
                    </div>
                    <div class="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
                        <span class="">
                            © 2023
                        </span>
                        <span class="mt-7 md:mt-1">Created by <a class="underline hover:text-primary-gray-20 hover:text-gray-800" href="https://www.quesevenda.com" target="_blank" rel="noreferrer" > QueseVenda.com
                        </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>

    );
};
export default Footer;
