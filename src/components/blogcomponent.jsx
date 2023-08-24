import React from 'react';
import { BsBalloonHeart } from 'react-icons/bs';
import chica from '../assets/mujersonrisacirculo.svg';
import logo from '../assets/logocompleto.svg';

const BlogComponent = () => {
  return (
    <div class="bg-gray-200 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
       <div data-aos="fade-down" className="flex items-center justify-center ">
        <img src={logo} alt="logo" className="h-24" />
      </div>
      <p class="mb-2 text-base font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
        22 Ago 2023
      </p>
      <div class="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div class="mb-4">
          <h1 aria-label="Article" class="inline-block max-w-lg font-sans text-4xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl">
            Cómo se ve y se siente una persona que está mejorando su diálogo interno?
          </h1>
        </div>
        <p class="text-xl text-gray-700 md:text-lg">
          <p>9 formas de evaluar si estoy avanzando</p>
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
            <p>Todos tenemos ese pequeño crítico interior,</p>
            <p>¿sabes a cuál me refiero? Ese que a veces se viste con una capa negra y nos susurra cosas no tan agradables al oído. </p>
            <p>Pero, ¿qué pasa si pudiéramos convertir ese crítico en nuestro más entusiasta animador? La transformación de un diálogo interno negativo a uno positivo es como pasar de escuchar una vieja radio desafinada a tener tu propia banda sonora épica de película. </p>
            <p>
              Pero, ¿cómo sabemos que estamos en el camino correcto? ¡Aquí tienes algunos signos divertidos y ejemplos que indican que tu diálogo interno está haciendo una fabulosa transformación! 🦋
            </p>

          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <BsBalloonHeart size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>Cambios en el Lenguaje</h2>
            <p>Antes: "Soy un desastre en esto."</p>
            <p>Ahora: "Estoy aprendiendo y mejorando cada día."</p>
            <p>Imagina que tu voz interna es ahora tu entrenador personal y fan número uno, siempre animándote desde las gradas</p>
          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <BsBalloonHeart size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>Mayor Resiliencia</h2>
            <p>En lugar de desmoronarse al primer intento fallido como un castillo de naipes, ahora se recuperan como esos muñequitos que siempre vuelven a su posición original. Fallan en una receta de pastel y piensan, "¡Más pastel para mí! Aprenderé y la próxima será perfecta."</p>
          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <BsBalloonHeart size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>Confianza Incrementada.</h2>
            <p>Antes: "¿Estoy haciendo esto bien? Tal vez no debería hacerlo..."</p>
            <p>Ahora: "¡Voy a hacerlo y será genial!"</p>
            <p>Imagínate caminando al ritmo de tu propia banda sonora de rock, seguro de cada paso que das.</p>
          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <BsBalloonHeart size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>Mejor Postura Corporal</h2>
            <p>Las personas que sanan su diálogo interno negativo son como flamencos majestuosos, en lugar de avestruces que esconden la cabeza. ¡Alto, orgulloso y listo para el desfile!</p>

          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <BsBalloonHeart size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>Relaciones Más Saludables</h2>
            <p>Ya no se trata de ser un felpudo donde todos se limpian los pies. Ahora es más como un cartel brillante que dice: "Valoro lo que soy, respétame". Y lo mejor de todo, ¡no tienen que pedir disculpas por ello!</p>

          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <BsBalloonHeart size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>Autoaceptación</h2>
            <p>Es como ser tu propio mejor amigo en una fiesta. "¡Hey! ¡Buen trabajo allí! ¡Eso fue increíble!" Y sí, está perfectamente bien hacerse un auto high-five.</p>

          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <BsBalloonHeart size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>Menor Procrastinación</h2>
            <p>¿Por qué postergar para mañana lo que puedes hacer hoy, cuando hoy puedes sentirte como un superhéroe tachando cosas de tu lista? ¡Adiós, Capitán Procrastinación! ¡Hola, Señorita Productividad!</p>

          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <BsBalloonHeart size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>Reacción Positiva a Comentarios</h2>
            <p>Antes, cada crítica era como un dardo envenenado. Ahora, es más como recoger pepitas de oro de cada comentario, incluso de los negativos. Y cuando alguien elogia, ¡es hora de sacar los lentes de sol porque el futuro es brillante!</p>

          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <BsBalloonHeart size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>Presencia y Atención Plena</h2>
            <p>Ya no están atrapados en un torbellino de dudas. Es como si finalmente pudieran sentarse en una tranquila cafetería interior, saboreando el momento, sin ese molesto zumbido de autocrítica.</p>

          </div>
        </div>
        <div class="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <BsBalloonHeart size="2em" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
            <h2>Bienestar Emocional</h2>
            <p>Antes, un mal comentario podía ser el grano de arena que desencadenara una avalancha. Ahora, es simplemente eso: un grano de arena en una playa llena de confianza y tranquilidad. ¡Nada puede opacar ese brillo interno!</p>

          </div>
        </div>
        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div class="w-full mx-auto text-gray-700">
            <p>La belleza de transformar nuestra voz interior radica en el potencial sin límites que desbloqueamos para nosotros mismos.</p>
            <p>Cada paso hacia un diálogo interno más saludable nos prepara para una vida más rica y llena de propósito. </p>
            <p>Ahora, imagina poder potenciar esa transformación con solo dedicar unos minutos al día. La aplicación "Una Vida Brillante" está diseñada para ser ese aliado diario en tu bolsillo. </p>
            <p>
              Con solo 10 minutos al día usando la app, puedes nutrir y cultivar una autoestima más fuerte. No es simplemente una app, es más bien abrir una puerta a un tú más confiado y positivo.
            </p>
            <p> Dedicar tiempo a uno mismo nunca ha sido tan fácil ni tan gratificante. ¡Permítete brillar con todo tu esplendor! ✨</p>

          </div>
        </div>
      </div>

    </div>

  );
};

export default BlogComponent;

