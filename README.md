# Nubi · Landing page

Landing page de **Nubi**, un producto de Macally para acompañar a niños y adolescentes neurodivergentes y a sus cuidadores durante episodios de desregulación.

Es un sitio estático: HTML, CSS y JavaScript sin frameworks ni paso de compilación. El idioma predeterminado es **inglés (en_US)** y también está disponible **español latinoamericano (es_419)** mediante el selector EN / ES.

- Sitio publicado: https://asi0729-2620-7793-open-source.github.io/landing-page/
- Informe del proyecto: https://github.com/ASI0729-2620-7793-Open-Source/Macally

## Estructura

```
docs/                       # Carpeta publicada en GitHub Pages
├── index.html              # Página principal (HTML + CSS embebido)
├── terms.html              # Términos de uso, privacidad y accesibilidad
├── i18n.js                 # Selector de idioma (en / es-419)
├── main.js                 # Menú móvil y rutas de los call-to-action hacia la Web Application
├── i18n/
│   ├── en.json             # Textos en inglés (idioma predeterminado)
│   └── es.json             # Textos en español latinoamericano
└── images/                 # Logos, ilustraciones y fotos del equipo
```

## Cómo verla

Los textos traducidos se cargan con `fetch`, así que para probar el selector de idioma hay que servir la carpeta `docs` por HTTP:

```bash
npx http-server docs -p 8080
```

Si se abre `docs/index.html` directamente con doble clic, la página se muestra en inglés y el botón ES no carga las traducciones.

## Secciones

| Sección | `id` | Enlazada desde |
|---|---|---|
| Hero | `inicio` | Logo, enlace "Skip to main content" |
| Perfil personalizado | `perfil` | Menú, footer |
| Modo SOS | `sos` | Menú, footer |
| Estímulos de autorregulación | `autocuidado` | Menú, footer |
| Tablero de pictogramas (CAA) | `comunicacion` | Menú, footer |
| Seguimiento para cuidadores | `apoyo` | Menú, footer |
| Planes (Free, Premium, Instituciones) | `planes` | Menú, botones, footer |
| Preguntas frecuentes | `faq` | Menú móvil, botones, footer |
| Equipo | `equipo` | Footer |
| Contacto | `contacto` | Menú móvil, footer |

Las secciones "El problema", "Cómo funciona", testimonios, beneficios y la llamada a la acción no tienen `id` porque nada enlaza a ellas.

## Internacionalización y accesibilidad

- Cada texto traducible lleva `data-i18n="clave"`; los atributos (`alt`, `aria-label`, `content`) usan `data-i18n-<atributo>`. Para agregar o cambiar un texto se edita la misma clave en `i18n/en.json` y `i18n/es.json`.
- Incluye enlace "Skip to main content", navegación por teclado, indicador de foco visible, atributos ARIA (`aria-label`, `aria-expanded`, `aria-pressed`), preguntas frecuentes con `<details>` y respeto a `prefers-reduced-motion`.
- Los enlaces legales del footer apuntan a `terms.html#terms`, `#privacy` y `#accessibility`.

## Personalización

**Colores.** Están definidos como variables CSS al inicio del `<style>`:

```css
--dark:  #00373E;   /* texto y fondos oscuros */
--mint:  #4CCBBB;   /* acento principal */
--peach: #F9E6D0;   /* hero y tarjetas cálidas */
--cream: #FDF7F1;   /* paneles y formulario */
--page:  #F7F6F4;   /* fondo de la página */
--yellow: #EFC01D;  /* plan Free y etiqueta "Most popular" */
--pink:   #F39CAC;  /* plan Instituciones */
```

**Tipografía.** Bricolage Grotesque (Design System, sección 4.1.1 del informe), cargada desde Google Fonts. Sin conexión cae a la fuente del sistema (`system-ui`).

**Textos y precios.** Se editan en `i18n/en.json` y `i18n/es.json` (y en `index.html` para el texto inglés inicial). El precio del plan Premium es `S/ 29.90 / month`.

**Equipo.** Cada integrante es un bloque `<article class="member">` dentro de `#equipo`. Para cambiar una foto, reemplaza el archivo en `images/` o ajusta el `src`. Joan Payano Puchuri usa un avatar con iniciales porque aún no tiene foto.

**Iconos.** Son SVG inline definidos una sola vez en el bloque `<svg>` al inicio del `<body>` y reutilizados con `<use href="#i-...">`.

## Diseño responsive

El diseño base está pensado para **1440 px** de ancho, con contenido máximo de 1440 px centrado. Puntos de quiebre:

- **≤ 1180 px:** las tarjetas pasan a una columna, el equipo a 3 columnas y el menú de secciones se reemplaza por un botón de menú.
- **≤ 820 px:** el equipo pasa a 2 columnas, los planes, testimonios y preguntas frecuentes se apilan, y "Log in" / "Get started free" pasan al menú desplegable.

Se verificó la ausencia de desbordamiento horizontal a 375, 1100 y 1440 px.

## Pendiente

- Definir `WEB_APP_URL` en `main.js` cuando se despliegue la Web Application: los botones "Get started" / "Log in" (`data-app-route`) pasarán a redirigir a `/sign-up` y `/login`.
- El formulario de contacto no envía datos: falta conectarlo a un backend o a un servicio de formularios.
- Los datos de contacto (correo, teléfono y dirección) y los enlaces de redes sociales siguen siendo los del diseño y hay que reemplazarlos por los reales.
- Los testimonios son de ejemplo: reemplazarlos por testimonios reales de las entrevistas de validación.
- Falta la foto de Joan Payano Puchuri.
- Videos About-the-Product y About-the-Team (entrega AV2).

## Créditos

Diseño original en Figma. Ilustraciones y fotos proporcionadas por el equipo Macally (estudiantes de Ingeniería de Software de la UPC).
