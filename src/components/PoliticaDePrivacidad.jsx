import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PoliticaDePrivacidad = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8">Política de Privacidad</h2>
      <p className="text-lg mb-4">
        En Una Vida Brillante, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, utilizamos y compartimos la información que obtenemos de nuestros usuarios a través de nuestro sitio web y aplicación móvil.
      </p>
      <p className="text-lg mb-4">
        La información que recopilamos puede incluir su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que nos proporcione. También podemos recopilar información de su dispositivo, como su dirección IP, navegador web y sistema operativo.
      </p>
      <p className="text-lg mb-4">
        Utilizamos la información que recopilamos para mejorar nuestro sitio web y aplicación móvil, para personalizar su experiencia de usuario y para proporcionarle información y ofertas relacionadas con nuestros productos y servicios. No compartimos su información con terceros a menos que sea necesario para proporcionarle nuestros productos y servicios o cuando se nos exija por ley.
      </p>
      <p className="text-lg mb-4">
        Utilizamos medidas de seguridad razonables para proteger la información que recopilamos de nuestros usuarios. Sin embargo, no podemos garantizar la seguridad de su información, y usted asume todos los riesgos asociados con el uso de nuestro sitio web y aplicación móvil.
      </p>
      <p className="text-lg mb-4">
        Al utilizar nuestro sitio web y aplicación móvil, usted acepta los términos de esta política de privacidad. Si tiene alguna pregunta o inquietud acerca de nuestra política de privacidad, por favor contáctenos a través de paolasuarezb86@gmail.com.
      </p>
    </div>
  );
};

export default PoliticaDePrivacidad;
