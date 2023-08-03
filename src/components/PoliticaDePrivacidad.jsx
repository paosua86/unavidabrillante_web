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

      <h1 class="text-4xl font-bold mb-4">Política de Privacidad</h1>

      <p class="text-lg mb-4">Esta Política de Privacidad fue actualizada por última vez el 1 de marzo de 2023.</p>

      <p class="text-lg mb-4">En Una Vida Brillante, nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos los datos personales que proporciona en nuestra app.</p>

      <h2 class="text-3xl font-bold mb-4">Información que recopilamos</h2>

      <p class="text-lg mb-4">Cuando se registra en nuestra app, le solicitamos su nombre, dirección de correo electrónico, ubicación aproximada y edad. Utilizamos esta información para personalizar su experiencia y proporcionarle contenido relevante según su edad.</p>

      <p class="text-lg mb-4">También recopilamos cierta información automáticamente desde su dispositivo, como la dirección IP, tipo de dispositivo, identificadores únicos de dispositivo e información del navegador.</p>

      <h2 class="text-3xl font-bold mb-4">Cómo usamos la información</h2>

      <p class="text-lg mb-4">Usamos la información recopilada para:</p>

      <ul class="list-disc list-inside mb-4">
        <li>Personalizar su experiencia en la app y proporcionar contenido relevante.</li>
        <li>Enviarle comunicaciones como actualizaciones, alertas y mensajes promocionales.</li>
        <li>Mejorar nuestros productos y servicios.</li>
        <li>Analizar el uso de la app para mejorarla.</li>
      </ul>

      <p class="text-lg mb-4">No vendemos ni compartimos su información personal con terceros para marketing o publicidad.</p>

      <h2 class="text-3xl font-bold mb-8">Almacenamiento y retención de datos</h2>

      <p class="text-lg mb-4">Conservamos sus datos personales el tiempo necesario para proporcionarle nuestros servicios o según lo requiera la ley. Puede solicitarnos que eliminemos su cuenta y todos sus datos asociados escribiendo a hola@unavidabrillante.com.</p>

      <h2 class="text-3xl font-bold mb-8">Seguridad de los datos</h2>

      <p class="text-lg mb-4">Implementamos medidas de seguridad razonables para proteger sus datos e impedir accesos no autorizados. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Usamos Firebase para almacenar y proteger la información recopilada. Firebase encripta la información en tránsito y proporciona varias capas de seguridad para proteger los datos.</p>

      <h2 class="text-3xl font-bold mb-8">Transferencias Internacionales de Datos</h2>

      <p class="text-lg mb-4">Los datos que recopilamos se almacenan en servidores de Google Cloud Platform ubicados en Estados Unidos. Google LLC y sus compañías afiliadas cumplen con el Reglamento General de Protección de Datos de la UE.</p>

      <h2 class="text-3xl font-bold mb-8">Cambios a esta Política de Privacidad</h2>

      <p class="text-lg mb-4">Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Le recomendamos que revise esta página con regularidad para estar informado sobre cómo estamos protegiendo su información.</p>

      <h2 class="text-3xl font-bold mb-8">Contáctenos</h2>

      <p class="text-lg">Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos en hola@unavidabrillante.com.</p>
    </div>
  );
};

export default PoliticaDePrivacidad;
