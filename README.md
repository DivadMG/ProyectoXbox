# PulseX — Landing inspirada en el estilo Xbox

Landing page de una tienda de videojuegos ficticia ("PulseX"), construida
con **HTML + CSS + JavaScript puro**, replicando la estructura y el look &
feel de un sitio de consolas moderno (navbar fija, hero, grid de consolas,
sección de suscripción, catálogo de juegos y footer).

> **Nota:** el contenido (nombre de marca, textos, colores exactos) es
> original, no una copia literal del sitio real de Xbox/Microsoft, para
> respetar derechos de marca y autor. La *estructura* y el *estilo visual*
> sí están inspirados en ese tipo de sitio, tal como pediste.

## Estructura del proyecto

```
xbox-style-landing/
├── index.html                 ← ensambla todos los componentes
├── main.js                    ← carga cada componente en su "slot"
├── styles/
│   └── tokens.css             ← colores, tipografías, espaciados globales
└── components/
    ├── Navbar/
    │   ├── Navbar.html
    │   ├── Navbar.css
    │   └── Navbar.js          ← lógica del menú mobile
    ├── Hero/
    │   ├── Hero.html
    │   └── Hero.css
    ├── Consoles/
    │   ├── Consoles.html
    │   └── Consoles.css
    ├── GamePass/
    │   ├── GamePass.html
    │   └── GamePass.css
    ├── Games/
    │   ├── Games.html
    │   └── Games.css
    └── Footer/
        ├── Footer.html
        └── Footer.css
```

Cada componente vive en su propia carpeta con su HTML y su CSS (y su JS
cuando aplica). `main.js` hace `fetch()` de cada `.html` y lo inserta en
el slot correspondiente de `index.html`.

## Cómo correr el proyecto

Como `main.js` usa `fetch()` para cargar los `.html` de cada componente,
**necesitas un servidor local** (no funciona abriendo el archivo con
doble clic por restricciones de CORS del navegador).

Con Python (ya viene instalado en Mac/Linux):

```bash
cd xbox-style-landing
python3 -m http.server 8000
```

Luego abre **http://localhost:8000** en tu navegador.

Alternativa con Node (si tienes `npx`):

```bash
npx serve .
```

## Personalización rápida

- **Colores/tipografía:** todo se controla desde `styles/tokens.css`.
- **Textos:** edita directamente el `.html` de cada componente.
- **Nuevo componente:** crea una carpeta en `components/`, agrega su
  `.html`/`.css`, y regístralo en el arreglo `COMPONENTS` de `main.js`
  y en el `<link>` de `index.html`.
