# Nubi · Landing page

Landing page de **Nubi**, un producto de Macally para acompañar a niños y adolescentes neurodivergentes y a sus cuidadores durante episodios de desregulación.

Es un sitio estático: HTML y CSS en un solo archivo, sin frameworks ni paso de compilación. El único JavaScript es un `onsubmit` en el formulario de contacto que evita que la página se recargue.

## Estructura

```
landing_completa/
├── index.html      # Página completa (HTML + CSS embebido)
├── README.md
└── images/
    ├── logo-nubi.png            # Logo de la barra de navegación
    ├── logo-blanco.png          # Logo del footer
    ├── hero-izquierda.png       # Ilustración izquierda del hero
    ├── hero-derecha.png         # Ilustración derecha del hero
    ├── problema.png             # Sección "El problema"
    ├── seguimiento.png          # Sección "Seguimiento y recomendaciones"
    ├── faq.png                  # Sección de preguntas frecuentes
    ├── corazones-cuidador.png   # Beneficios · tarjeta del cuidador
    ├── corazones-usuario.png    # Beneficios · tarjeta del usuario
    ├── footer-arcoiris.png      # Footer
    └── equipo-*.jpg|jpeg|png    # Fotos del equipo
```

## Cómo verla

Abre `index.html` con doble clic en cualquier navegador moderno. No necesita servidor.

Si prefieres servirla localmente:

```bash
npx http-server "C:/Users/Leonardo Lopez/Desktop/landing_completa" -p 8080
```

## Secciones

| Sección | `id` | Enlazada desde |
|---|---|---|
| Hero | `inicio` | Logo |
| Perfil personalizado | `perfil` | Menú, footer |
| Modo SOS | `sos` | Menú, footer |
| Estímulos de autorregulación | `autocuidado` | Menú, footer |
| Tablero de pictogramas (CAA) | `comunicacion` | Menú, footer |
| Seguimiento para cuidadores | `apoyo` | Menú, footer |
| Planes (Free, Premium, Instituciones) | `planes` | Menú, botones, footer |
| Preguntas frecuentes | `faq` | Botones, footer |
| Equipo | `equipo` | Footer |
| Contacto | `contacto` | Menú, footer |

Las secciones "El problema", "Cómo funciona", testimonios, beneficios y la llamada a la acción no tienen `id` porque nada enlaza a ellas.

## Personalización

**Colores.** Están definidos como variables CSS al inicio del `<style>`:

```css
--dark:  #00373E;   /* texto y fondos oscuros */
--mint:  #4CCBBB;   /* acento principal */
--peach: #F9E6D0;   /* hero y tarjetas cálidas */
--cream: #FDF7F1;   /* paneles y formulario */
--page:  #F7F6F4;   /* fondo de la página */
--yellow: #EFC01D;  /* plan Free y etiqueta "Más elegido" */
--pink:   #F39CAC;  /* plan Instituciones */
```

**Tipografía.** Plus Jakarta Sans, cargada desde Google Fonts. Sin conexión cae a la fuente del sistema (`system-ui`).

**Textos y precios.** Se editan directamente en `index.html`. El precio del plan Premium es `S/ 29.90 / mes`.

**Equipo.** Cada integrante es un bloque `<article class="member">` dentro de `#equipo`. Para cambiar una foto, reemplaza el archivo en `images/` o ajusta el `src`. Joan Payano Puchuri usa un avatar con iniciales porque aún no tiene foto.

**Iconos.** Son SVG inline definidos una sola vez en el bloque `<svg>` al inicio del `<body>` y reutilizados con `<use href="#i-...">`.

## Diseño responsive

El diseño base está pensado para **1440 px** de ancho, con contenido máximo de 1440 px centrado. Hay dos puntos de quiebre:

- **≤ 1180 px:** las tarjetas pasan a una columna, el equipo a 3 columnas y se reduce el menú.
- **≤ 820 px:** se oculta el menú lateral izquierdo, el equipo pasa a 2 columnas y los planes, testimonios y preguntas frecuentes se apilan.

Los puntos de quiebre son adicionales al diseño original y solo se revisaron a 1440 px.

## Pendiente

- Las preguntas frecuentes solo muestran el "+", sin respuestas ni comportamiento de acordeón.
- El formulario de contacto no envía datos: falta conectarlo a un backend o a un servicio de formularios.
- Los enlaces de Términos, Política de privacidad, Aviso de accesibilidad y redes sociales apuntan a `#`.
- Los datos de contacto (correo, teléfono y dirección) son los del diseño y hay que reemplazarlos por los reales.
- Falta la foto de Joan Payano Puchuri.

## Créditos

Diseño original en Figma. Ilustraciones y fotos proporcionadas por el equipo Macally (estudiantes de Ingeniería de Software de la UPC).
