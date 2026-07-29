# Despliegue

El sitio se publica solo: cada `git push` a `main` dispara el workflow
`.github/workflows/deploy.yml`, que sube el contenido de `site/` a GitHub Pages.

## Qué se publica y qué no

Solo se publica la carpeta `site/`.

El repositorio es **público**, así que hay cosas que ni siquiera se suben a él.
Están excluidas en `.gitignore` y solo existen en tu disco:

- `textos/` — copy de ventas, secuencia de emails, guiones de anuncios y brief
- `fotos-originales/` — 28 MB de PNG sin comprimir (ya convertidos a WebP en `site/img/`)
- `.claude/skills/`, `skills-lock.json` — herramientas de trabajo local

```
site/                            →  unavidabrillante.com
├── CNAME                        dominio propio (no borrar)
├── .nojekyll                    evita que GitHub procese el sitio con Jekyll
├── index.html                   →  /            índice de productos
├── privacidad.html              →  /privacidad.html   compartida
├── terminos.html                →  /terminos.html     compartida
├── legal.css                    estilo de las dos legales
├── fonts/                       COMPARTIDAS por todas las landings
│                                (una sola descarga sirve para todo el sitio)
└── rincon-calma-estandar/       →  /rincon-calma-estandar/
    ├── index.html                  la landing de ventas
    └── img/                        sus fotos, solo suyas
```

Las tipografías viven en la raíz a propósito: si cada landing tuviera su copia,
el navegador se las bajaría otra vez al cambiar de página. Compartidas, la
segunda landing carga con las fuentes ya en caché.

## Añadir una landing nueva

Una carpeta por producto. El nombre de la carpeta **es** la URL:

```
site/rincon-calma-fe/index.html   →  unavidabrillante.com/rincon-calma-fe/
site/rincon-calma-fe/img/            sus imágenes
```

Lo más rápido es copiar `rincon-calma-estandar/` entera y cambiar, dentro del
`index.html` nuevo, estas cinco cosas:

1. **`CONFIG.producto`** — `id` y `nombre`. Es lo que separa los datos de esta
   landing de los de las demás en Analytics. Si se te olvida, los dos productos
   se mezclan en el mismo informe y no podrás comparar cuál vende mejor.
2. **`CONFIG.checkoutUrl`** — el link de Hotmart de *ese* producto.
3. **`CONFIG.precio`** — si el precio es distinto.
4. **`<link rel="canonical">`, `og:url` y `og:image`** — a la URL nueva. Si dos
   páginas declaran la misma canónica, Google indexa solo una.
5. **El texto de la página**, claro.

Las rutas relativas (`img/foto.webp`, `../fonts/…`, `../privacidad.html`) siguen
funcionando sin tocarlas, porque la profundidad de carpeta es la misma.

Por último, añade el producto a la lista `.catalogo` de `site/index.html`.

## Publicar un cambio

```bash
git add -A && git commit -m "Actualiza la landing" && git push
```

El despliegue tarda ~1 minuto. Se ve el progreso en la pestaña **Actions** del
repositorio en GitHub.

## DNS en Namecheap

Namecheap → Domain List → `unavidabrillante.com` → Manage → pestaña
**Advanced DNS** → sección *Host Records*.

**Antes de añadir nada, borra los registros que Namecheap pone por defecto:**
el `CNAME` de `www` a `parkingpage.namecheap.com` y el `URL Redirect Record`
de `@`. Si se quedan, el dominio nunca llegará a apuntar a GitHub.

| Tipo  | Host | Valor                | TTL       |
|-------|------|----------------------|-----------|
| A     | @    | 185.199.108.153      | Automatic |
| A     | @    | 185.199.109.153      | Automatic |
| A     | @    | 185.199.110.153      | Automatic |
| A     | @    | 185.199.111.153      | Automatic |
| CNAME | www  | paosua86.github.io.| Automatic |

Las cuatro `A` son obligatorias: son los cuatro servidores de GitHub Pages y
dan tolerancia a fallos. El punto final de `paosua86.github.io.` es parte
del valor, no una errata.

Opcional pero recomendable, para que el dominio también responda por IPv6:

| Tipo | Host | Valor                  |
|------|------|------------------------|
| AAAA | @    | 2606:50c0:8000::153    |
| AAAA | @    | 2606:50c0:8001::153    |
| AAAA | @    | 2606:50c0:8002::153    |
| AAAA | @    | 2606:50c0:8003::153    |

Dos condiciones fáciles de pasar por alto:

- En la pestaña **Domain**, los *Nameservers* tienen que estar en **Namecheap
  BasicDNS**. Si están en otros, la pestaña Advanced DNS no pinta nada.
- Los registros **MX** y los **TXT** de correo no se tocan: el buzón
  `hola@unavidabrillante.com` depende de ellos.

La propagación tarda entre 30 minutos y unas horas. Se comprueba con
`nslookup unavidabrillante.com`: cuando devuelva las IP `185.199.*`, ya está.

## GitHub Pages

En el repositorio → **Settings** → **Pages**:

1. *Source*: **GitHub Actions** — no «Deploy from a branch». El workflow usa
   `actions/deploy-pages`, y con la otra opción no publica nada.
2. *Custom domain*: `unavidabrillante.com`. El archivo `site/CNAME` ya lo
   declara, así que debería aparecer solo tras el primer despliegue.
3. Cuando GitHub termine de emitir el certificado (unos minutos tras
   validar el DNS), marca **Enforce HTTPS**. Sin HTTPS, Meta puede rechazar
   los anuncios que apunten aquí.
