import React from 'react';

const PoliticaPrivacidad = () => {
  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#E91E63' }}>Política de Privacidad</h2>
      <p><strong>Última actualización: 3 de agosto de 2023.</strong></p>
      <p>
        En Una Vida Brillante, nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos los datos personales que proporciona en nuestra app.
      </p>

      {sectionTitle('Información que recopilamos')}
      {sectionContent('Cuando se registra en nuestra app, le solicitamos su nombre, dirección de correo electrónico, ubicación aproximada y edad. Utilizamos esta información para personalizar su experiencia y proporcionarle contenido relevante según su edad. También recopilamos cierta información automáticamente desde su dispositivo, como la dirección IP, tipo de dispositivo, identificadores únicos de dispositivo e información del navegador.')}

      {sectionTitle('Cómo usamos la información')}
      {sectionContent('Usamos la información recopilada para personalizar su experiencia en la app, enviarle comunicaciones, mejorar nuestros productos y servicios, y analizar el uso de la app. No vendemos ni compartimos su información personal con terceros para marketing o publicidad.')}

      {sectionTitle('Almacenamiento y retención de datos')}
      {sectionContent('Conservamos sus datos personales el tiempo necesario para proporcionarle nuestros servicios o según lo requiera la ley. Puede solicitarnos que eliminemos su cuenta y todos sus datos asociados escribiendo a hola@unavidabrillante.com.')}

      {sectionTitle('Seguridad de los datos')}
      {sectionContent('Implementamos medidas de seguridad razonables para proteger sus datos e impedir accesos no autorizados. Usamos Firebase para almacenar y proteger la información recopilada. Firebase encripta la información en tránsito y proporciona varias capas de seguridad para proteger los datos.')}

      {sectionTitle('Transferencias Internacionales de Datos')}
      {sectionContent('Los datos que recopilamos se almacenan en servidores de Google Cloud Platform ubicados en Estados Unidos. Google LLC y sus compañías afiliadas cumplen con el Reglamento General de Protección de Datos de la UE (GDPR).')}

      {sectionTitle('Derechos del Usuario bajo el GDPR')}
      {sectionContent('Si eres residente de la Unión Europea, tienes ciertos derechos bajo el Reglamento General de Protección de Datos (GDPR). Para ejercer cualquiera de estos derechos, contáctanos en hola@unavidabrillante.com.')}

      {sectionTitle('Leyes de Privacidad de Ecuador')}
      {sectionContent('De acuerdo con las leyes de privacidad de datos de Ecuador, garantizamos que su información personal será tratada con confidencialidad y seguridad, y solo será utilizada para los fines establecidos en esta política.')}

      {sectionTitle('Desactivación y Eliminación de Cuentas')}
      {sectionContent('Para desactivar o eliminar su cuenta y todos los datos asociados, visite www.unavidabrillante.com/#/eliminarcuenta y complete el formulario correspondiente.')}

      {sectionTitle('Cambios a esta Política de Privacidad')}
      {sectionContent('Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Le recomendamos que revise esta página con regularidad para estar informado sobre cómo estamos protegiendo su información.')}

      {sectionTitle('Contáctenos')}
      {sectionContent('Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos en hola@unavidabrillante.com.')}

    </div>
  );
};

const sectionTitle = (title) => (
  <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#E91E63', margin: '12px 0' }}>
    {title}
  </h3>
);

const sectionContent = (content) => (
  <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '16px' }}>
    {content}
  </p>
);

export default PoliticaPrivacidad;
