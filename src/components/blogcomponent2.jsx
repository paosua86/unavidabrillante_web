import React from 'react';
import { GiAmpleDress } from 'react-icons/gi';
import chica from '../assets/bella.svg';
import logo from '../assets/logocompleto.svg';

const BlogComponent2 = () => {
  return (
    <div class="bg-gray-200 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
       <div data-aos="fade-down" className="flex items-center justify-center ">
        <img src={logo} alt="logo" className="h-24" />
      </div>
      <p class="mb-2 text-base font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
        14 Sep 2023
      </p>
      <div class="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div class="mb-4">
          <h1 aria-label="Article" class="inline-block max-w-lg font-sans text-4xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl">
          Aceptar los cumplidos es un signo de autoestima sana: ¿Por qué nos cuesta tanto aceptar un "¡Te ves super cool!"?
          </h1>
        </div>
        <p class="text-xl text-gray-700 md:text-lg">
          <p>5 situaciones para aprender a recibirlo</p>
        </p>

      </div>
      <div data-aos="fade-down" className="flex items-center justify-center my-8">
        <img src={chica} alt="Chicas" className="h-46" />
      </div>

      <div class="mb-10 sm:text-center">
        {/* <a href="/" aria-label="Author" class="inline-block mb-1">
          <img alt="avatar" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
        </a> */}
        {/* <div>
          <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">Vasile Melinte</a>
          <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
        </div> */}
      </div>
      <div class=" flex text-xl flex-col items-center px-5 py-8 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div class="w-full mx-auto text-gray-700">
            <p>Ah, los cumplidos. Esos pequeños regalos verbales que nos lanzan de vez en cuando y que, en lugar de atrapar con gracia, a menudo desviamos como si fueran granadas de mano. "¡Me encanta tu camisa!" </p>
            <p>- "Oh, esta vieja cosa? La compré en una tienda de segunda mano por dos euros". ¿Te suena familiar?</p>
            <p>Vamos a desglosarlo un poco. ¿Por qué es tan difícil para algunos de nosotros simplemente decir "gracias" y seguir adelante? Bueno, hay una serie de razones, pero una de las más grandes es la autoestima. </p>
            <p>
            Y no, no estoy hablando de esa autoestima inflada que ves en las películas donde el protagonista se mira al espejo y dice: "Mírate, eres un tigre". Hablo de una autoestima sana y equilibrada.
            </p>

          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <GiAmpleDress size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>1. El arte de desviar el cumplido</h2>
            <p>Imagínate que estás en una fiesta y alguien dice: "¡Has hecho un trabajo increíble organizando esto!". </p>
            <p>En lugar de aceptarlo, respondes: </p>
            <p>"Oh, no es para tanto, solo puse unos cuantos snacks y llamé a unos amigos". ¡Vamos! ¿Solo unos cuantos snacks? ¡Si hasta el queso tenía forma de pequeños delfines!</p>
          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <GiAmpleDress size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>2. El sarcasmo, ese viejo amigo</h2>
            <p>Ahora, no me malinterpretes, el sarcasmo es una herramienta maravillosa. Es como el chile en la comida: un poco puede dar sabor, pero demasiado puede arruinar el plato. "¡Te ves estupendo en ese traje!" - "¿Qué quieres decir? ¿Que normalmente parezco un desastre?". No, amigo mío, simplemente estás llevando el sarcasmo un poco demasiado lejos.</p>
          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <GiAmpleDress size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>3. La autoestima sana: el equilibrio perfecto</h2>
            <p>Aceptar un cumplido no significa que te creas superior a los demás. Simplemente significa que reconoces tu valor y que estás dispuesto a permitir que otros lo vean también. </p>
            <p>Es como tener un Picasso en casa y, cuando alguien lo elogia, simplemente dices: "Gracias, me alegra que te guste". No estás diciendo que eres Picasso, solo que aprecias la belleza de la obra.</p>

          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <GiAmpleDress size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>4. El complejo de superioridad disfrazado</h2>
            <p>Aquí es donde las cosas se ponen interesantes. Algunas personas sienten que aceptar un cumplido las coloca en una posición de superioridad. "Si acepto este elogio, ¿significa que me estoy poniendo por encima de los demás?".</p>
            <p> Esta mentalidad a menudo proviene de mensajes que recibimos cuando éramos niños, como "no te creas tanto" o "no seas presumido". Estos mensajes, aunque bien intencionados, pueden crear una relación complicada con los elogios.</p>
            <p>El problema surge cuando confundimos la autoestima con la arrogancia. La autoestima es simplemente reconocer y valorar nuestras propias habilidades y logros. </p>
            <p>La arrogancia, por otro lado, implica creer que somos inherentemente mejores que los demás. Aceptar un cumplido no te hace arrogante, pero rechazarlo constantemente tampoco te hace humilde.</p>
          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <GiAmpleDress size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>5. El impacto de los mensajes del pasado</h2>
            <p>Desde pequeños, muchos de nosotros hemos sido condicionados a creer que destacar o aceptar elogios es sinónimo de ser egocéntrico. Pero, ¿sabes qué? Eso no es cierto.</p>
            <p>La humildad no se trata de rebajarse o de rechazar el reconocimiento. Se trata de conocer tu valor sin sentir la necesidad de menospreciar a los demás.</p>
          </div>
        </div>

        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div class="w-full mx-auto text-gray-700">
          <p>En resumen...</p>
            <p>La próxima vez que alguien te haga un cumplido, en lugar de buscar una salida rápida o usar el sarcasmo como escudo, simplemente sonríe y di "gracias". Porque, al final del día, aceptar un cumplido es simplemente una forma de decir: "Sí, lo sé, soy bastante increíble". Y no hay nada de malo en eso. 😉</p>
            <p>Aprender a aceptar elogios es un viaje, y cada uno de nosotros está en un punto diferente en ese camino. Pero con un poco de autoconciencia y práctica, podemos aprender a recibir elogios con gracia y gratitud, sin sentirnos superiores ni inferiores a nadie. Porque, después de todo, todos somos increíbles a nuestra manera.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent2;

