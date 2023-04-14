import React from 'react';

const Testimonios = () => {
  const testimonials = [
    {
      name: 'Ana P.',
      text: 'Gracias. Tener ayuda y acceso psicológico es sumamente primordial para mantener un equilibrio en la vida de cualquier ser humano. Cualquier tipo de terapia o ayuda funciona como herramienta para mejorar la calidad de vida y ofrece guía para poder acércanos a las decisiones más sanas y precisas en el camino de nuestra vida.',
    },
    {
      name: 'Laura S.',
      text: 'Me encanta trabajar con Una Vida Brillante. Ella me ayuda a romper paradigmas, me empodera. Le apunta al blanco SIEMPRE, crezco SIEMPRE.',
    },
    {
      name: 'Alejandra S.',
      text: 'GRACIAS !!!! Siempre es bueno encontrar una tribu donde podemos crecer.',
    },
    {
      name: 'Gaby S.',
      text: 'Gracias Una Vida Brillante, por guiarnos a este nuevo paso que estamos dando.',
    },
    {
      name: 'Ana S.',
      text: 'Me ha cambiado la vida, era lo que necesitaba. gracias.',
    },
    {
      name: 'Amelia S.',
      text: 'No podía pagar la terapia porque era muy cara, pero sabía que la necesitaba, esta app cumplió con mis expectativas.',
    },
  ];

  return (
    <section className="py-10 overflow-x-hidden bg-gradient-to-b  from-strong-pink to-light-blue ">
      <div className="container mx-auto px-4">
        <h2 className="py-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-2" data-aos="fade-up">
          Testimonios
        </h2>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-aos="zoom-in-up">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 group hover:shadow-2xl">
              <p className="text-gray-600 justify-center  align-middle dark:text-white">
                <span className="text-lg  font-bold text-gray-500">“</span>
                {testimonial.text}
                <span className="text-lg font-bold text-gray-500">”</span>
              </p>
              <div className="flex items-center mt-4">
                <div className="flex flex-col justify-between ml-2">
                  <span className="text-sm font-semibold text-gray-500">
                    {testimonial.name}
                  </span>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
