import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CondicionesDeServicio = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div>

            <div className="max-w-screen-lg mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Condiciones del Servicio</h1>

                <p className="text-gray-700 text-lg leading-7 mb-4">
                    Al acceder a la aplicación móvil y/o sitio web de Una Vida Brillante (en adelante, “la Aplicación”),
                    usted acepta y se compromete a cumplir con los términos y condiciones que se detallan a continuación.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 my-4">1. Información de la Aplicación</h2>

                <p className="text-gray-700 text-lg leading-7 mb-4">
                    La Aplicación Una Vida Brillante tiene como objetivo proporcionar herramientas y técnicas para el
                    mejoramiento de la autoestima en mujeres a través de clases diarias y seguimiento personalizado.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 my-4">2. Propiedad Intelectual</h2>

                <p className="text-gray-700 text-lg leading-7 mb-4">
                    Todo el contenido de la Aplicación, incluyendo sin limitación, los textos, gráficos, logotipos, íconos de
                    botones, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, son propiedad
                    exclusiva de Una Vida Brillante o de sus proveedores de contenido, y están protegidos por las leyes de
                    propiedad intelectual de los Estados Unidos Mexicanos y otros países.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 my-4">3. Uso de la Aplicación</h2>

                <p className="text-gray-700 text-lg leading-7 mb-4">
                    Usted puede usar la Aplicación únicamente para fines personales y no comerciales, y se compromete a no
                    utilizar la Aplicación para ningún propósito que sea ilegal, inmoral o inapropiado.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 my-4">4. Pago y Cancelación</h2>

                <p className="text-gray-700 text-lg leading-7 mb-4">
                    El uso de la Aplicación requiere el pago de una mensualidad de 14.99 USD. Usted puede cancelar su suscripción
                    en cualquier momento desde la opción de configuración dentro de la aplicación. La cancelación de la suscripción
                    se hará efectiva al final del ciclo de facturación actual.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 my-4">5. Limitación de Responsabilidad</h2>

                <p className="text-gray-700 mb-4">
                    Nosotros no seremos responsables por ningún daño directo o indirecto,
                    especial o incidental, consecuente o punitivo, incluyendo, sin
                    limitación, pérdida de ingresos o ganancias, pérdida de negocio o
                    reputación, pérdida de datos, costos de reemplazo o cualquier otro
                    daño o pérdida que surja de o en relación con el uso o la imposibilidad
                    de utilizar este sitio web o la aplicación, incluso si hemos sido
                    informados de la posibilidad de tales daños.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 my-4">
                    6. Indemnización
                </h2>

                <p className="text-gray-700 mb-4">
                    Usted acepta indemnizar, defender y mantener indemne a nosotros y a
                    nuestras filiales, proveedores de servicios, empleados, contratistas,
                    agentes, licenciantes, directores, representantes y otros usuarios de
                    la aplicación, de cualquier reclamo o demanda, incluyendo honorarios
                    razonables de abogados, hechos por terceros debido a o como resultado
                    de su incumplimiento de estos Términos de Servicio o de los documentos
                    que incorporan como referencia, o su violación de cualquier ley o los
                    derechos de un tercero.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 my-4">
                    7. Rescisión
                </h2>

                <p className="text-gray-700 mb-4">
                    Podemos rescindir o suspender el acceso a nuestra aplicación
                    inmediatamente, sin previo aviso ni responsabilidad, por cualquier
                    motivo, incluyendo, sin limitación, si usted incumple los Términos de
                    Servicio. Al rescindir estos Términos de Servicio, cualquier provisión
                    que, por su naturaleza, deba sobrevivir a la rescisión (incluyendo,
                    sin limitación, las disposiciones de propiedad, las garantías de
                    indemnización y limitación de responsabilidad) seguirá siendo efectiva
                    después de la rescisión.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 my-4">8. Ley aplicable</h2>

                <p className="text-gray-700">
                    Estos Términos de Servicio se regirán e interpretarán de acuerdo con
                    las leyes del país en el que resida la compañía. Usted acepta que
                    cualquier controversia o reclamo que surja de o esté relacionado con
                    estos Términos de Servicio será resuelto por los tribunales competentes
                    en el país en el que resida la compañía.
                </p>
            </div>
        </div>

    );
};


export default CondicionesDeServicio;
