import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  AOS.init();

  const faqs = [
    {
      question: '¿Cómo descargo la aplicación Una Vida Brillante?',
      answer:
        'Puedes descargar la aplicación Una Vida Brillante desde la tienda oficial de aplicaciones en tu dispositivo móvil (App Store para iOS y Google Play para Android).',
    },
    {
      question: '¿Cómo puedo pagar la mensualidad de la aplicación?',
      answer:
        'Puedes pagar la mensualidad de la aplicación mediante la opción de pago en la aplicación, que acepta diferentes formas de pago como tarjeta de crédito y PayPal.',
    },
    {
      question: '¿Hay algún costo adicional por la descarga de la aplicación?',
      answer:
        'La descarga de la aplicación es gratuita, sin embargo, para acceder a todas las funcionalidades y contenido, es necesario pagar la mensualidad de 14.99 USD, luego del término de 7 días de prueba, si deseas continuar usando la app.',
    },
    {
      question: '¿Cómo puedo cancelar mi suscripción a la aplicación?',
      answer:
        'Puedes cancelar tu suscripción en cualquier momento desde la opción de configuración dentro de la aplicación. Ten en cuenta que la cancelación de la suscripción se hará efectiva al final del ciclo de facturación actual, dependiendo si seleccionaste mensual o anual.',
    },
    {
      question: '¿Existe alguna oferta especial para nuevos usuarios?',
      answer:
        'Actualmente, ofrecemos un descuento del 30% en el pago anual de la mensualidad y los 7 primeros días gratuitos. Además, también ofrecemos diferentes promociones a través de nuestras redes sociales y correo electrónico.',
    },
    {
      question: '¿Qué pasa si tengo algún problema con el pago o la descarga de la aplicación?',
      answer:
        'Si tienes algún problema con el pago o la descarga de la aplicación, puedes contactarnos a través del chat dentro de la aplicación o mediante nuestro correo electrónico de soporte (hola@unavidabrillante.com), y nuestro equipo de soporte técnico estará disponible para ayudarte.',
    },
  ];

  return (
    <div className="p-36 mx-auto bg-gradient-to-b  from-yellow-300 to-pink">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-2">
        Preguntas Frecuentes
      </h2>
      <ul className="flex flex-wrap items-start gap-8">
        {faqs.map((faq, index) => (
          <li className="w-2/5" key={index}>
            <p className="text-lg font-medium leading-6 text-gray-900">
              {faq.question}
            </p>
            <p className="mt-2 text-base leading-6 text-gray-500" data-aos="fade-up">
              {faq.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
