# Mi Rincón de la Calma — landing de ventas

Para verla en el ordenador, abre `site/index.html` haciendo doble clic.
En producción vive en **https://unavidabrillante.com**.

---

## Qué hay en cada carpeta

```
landing_rinconcalma/
│
├── site/                 ← ESTO ES LA WEB. Es lo único que se publica.
│   ├── index.html            unavidabrillante.com  → índice de productos
│   ├── rincon-calma-estandar/
│   │   ├── index.html        LA LANDING DE VENTAS (todo el diseño va dentro)
│   │   └── img/              sus 5 fotos, ya optimizadas
│   ├── privacidad.html       exigida por Meta para aprobar anuncios
│   ├── terminos.html         exigida por Meta para aprobar anuncios
│   ├── legal.css             estilo de las dos páginas legales
│   ├── fonts/                Fraunces e Inter, compartidas por todo el sitio
│   ├── CNAME                 el dominio. NO BORRAR.
│   └── .nojekyll             NO BORRAR.
│
├── textos/               los 4 documentos que me pasaste (NO se sube al repo)
├── fotos-originales/     las fotos a máxima calidad (NO se suben al repo)
├── FOTOS.md              qué foto está en cada sección
├── DEPLOY.md             cómo se publica, DNS y GitHub Pages
└── LEEME.md              este archivo
```

**La regla:** si tocas algo fuera de `site/`, no cambia la web. Si tocas algo dentro
de `site/`, sí.

`textos/` y `fotos-originales/` están en `.gitignore`: el repositorio es público y
ahí dentro hay copy de ventas y guiones de anuncios. Siguen en tu disco, intactos.

---

## Los dos ajustes que se hacen desde un solo sitio

Todo lo configurable vive en el bloque `CONFIG`, casi al final de `site/index.html`.

### El precio
```js
precio: 17,
moneda: 'USD',
```
Cámbialo ahí y se reescribe solo en los 6 botones, en los dos precios grandes, en la
barra fija del móvil, en la garantía, en la descripción que sale en Google y en los
eventos de píxel y Analytics. **Un único sitio.**

Solo dos cosas hay que sincronizar a mano si cambias el precio de verdad: el
`<meta name="description">` de arriba y el bloque `JSON-LD` del final. Los
buscadores los leen antes de ejecutar JavaScript, así que ahí el número tiene que
estar escrito. Si se te olvida, la consola del navegador te avisa.

### El link de pago
```js
checkoutUrl: 'https://pay.hotmart.com/P106868890T',
```
Ya está puesto y funcionando en los 7 botones (los 6 de la página más el de la barra
fija). Si algún día cambias de producto en Hotmart, se cambia aquí.

---

## Qué se mide y cómo lo lees

**No hace falta Google Tag Manager.** GTM es un gestor de etiquetas: sirve cuando
tienes muchas webs y varias personas tocando la medición. Aquí añadiría ~100 KB y una
petición antes de que cargue nada, en una página que tiene que abrir en menos de 3
segundos con datos móviles. Los eventos se envían directamente a GA4 y al píxel.

Nada se envía hasta que la visitante acepta las cookies. Lo que ocurre antes de que
responda se guarda en cola y se manda al aceptar, así no pierdes el recorrido de
quien tardó en contestar. Si dice que no, no se envía nada nunca.

| Evento | Qué te dice |
|---|---|
| `ver_seccion` | **Hasta dónde llegó.** Una vez por sección y visita, con `orden` del 1 al 15. Es el embudo real: cuántas llegan al precio y en qué sección se caen. |
| `begin_checkout` | **Qué botón la mandó a Hotmart** (`origen`: hero, incluye, plan, precio, cierre, pd o sticky), desde qué sección y tras cuántos segundos. |
| `abrir_faq` | **Qué duda tenía** antes de decidir. La pregunta exacta. |
| `clic_indice` | Usó el enlace «Ver qué incluye» del principio. |
| `respuesta_cookies` | Aceptó o rechazó. Te dice qué porcentaje de datos te falta. |
| `generar_lead` | Dejó el correo en el popup de salida. |
| `salida` | Al irse: `profundidad_max` (% de página), `ultima_seccion` y `segundos`. |

Todos los eventos llevan `producto_id` y `producto_nombre`. Eso es lo que te dejará
comparar esta landing con la de la versión de fe y con los productos que vengan
después, dentro de la misma cuenta de Analytics y el mismo píxel.

**Dónde lo miras.** En GA4: *Informes → Interacción → Eventos*. Para el embudo,
crea una *Exploración* de tipo embudo con `ver_seccion` filtrando por `orden` 1, 2,
3… y verás en qué escalón se cae la gente. Los parámetros nuevos (`seccion`,
`origen`, `producto_id`…) hay que darlos de alta una vez en *Administrar →
Definiciones personalizadas → Dimensiones personalizadas*, o saldrán en blanco.

Los eventos `ViewContent`, `InitiateCheckout` y `Lead` van también al píxel de Meta,
que es lo que necesita para optimizar los anuncios. El `Purchase` lo dispara Hotmart
por su lado.

---

## Lo que falta para poder publicar

### 1. La medición de anuncios (imprescindible si vas a pagar publicidad)
En ese mismo bloque:

```js
metaPixelId: '',   // el ID de tu píxel de Meta
ga4Id: '',         // tu ID de Google Analytics, tipo 'G-XXXXXXXXXX'
```

Si los dejas vacíos no se carga nada y la página funciona igual — pero no vas a
poder optimizar los anuncios, que es como tirar el dinero.

### 2. Tus datos en las páginas legales
En `site/privacidad.html` y `site/terminos.html`, sustituye `[NOMBRE O RAZÓN SOCIAL]`
y `[PAÍS]`. Están señalados con un recuadro verde para que no se te pasen.
Meta revisa esa página antes de aprobar los anuncios.

### 3. Confirmar el correo de contacto
He puesto `hola@unavidabrillante.com` en el pie y en las legales. Si es otro, dímelo.

---

## Cosas que ya están resueltas y conviene que sepas

- **Los testimonios están maquetados pero ocultos**, como pedía tu documento. Cuando
  tengas 6 reales de este kit, se activan quitando la palabra `hidden` de la etiqueta
  `<section id="testimonios" hidden>`.
- **El popup de salida está programado pero apagado.** Se enciende solo cuando pongas
  la URL de MailerLite en `mailerliteAction`. Sale cuando alguien ya se está yendo,
  nunca antes: si saltara por scroll le robaría ventas a tu propio botón.
- **La barra fija de compra** aparece en el móvil al pasar el hero, con el precio a la
  izquierda. Es lo que más sube la conversión en móvil.
- **Hay un aviso de cookies.** El píxel de Meta y Google Analytics no se cargan hasta
  que la visitante acepta. Es lo que exige el RGPD si vendes a España, y sin ello la
  política de privacidad estaría diciendo algo que no es verdad.
- **Pesa unos 630 KB entera** (348 de fotos, 200 de tipografías, el resto código).
  Carga muy por debajo de los 3 segundos que exige el tráfico de Meta, y el texto se ve
  desde el primer instante aunque las letras aún no hayan bajado.
- **Revisada a 320, 375 y 1280 px.** Sin scroll horizontal, ningún texto por debajo de
  17px en móvil, todos los rótulos de botón en una sola línea y el botón de compra
  visible sin hacer scroll incluso en un iPhone SE.

---

## Lo que queda pendiente de decidir

- **Las miniaturas del kit.** Si me pasas el PDF, recorto 13 miniaturas reales y las
  meto dentro de cada tarjeta de "Qué incluye". Esa sección es la que más se lee, y
  ahora mismo cuenta lo que hay dentro en vez de enseñarlo.
- **Las otras dos páginas** del embudo (captación y gracias), con los textos del
  documento `textos/02-CAPTACION-Y-EMAILS.md`. Reutilizan este mismo sistema visual.
- **Qué hacer con `socket/unavidabrillante_web`**, la web antigua bajada de GitHub.
