# VetStation Core — Landing Site

Landing comercial independiente para **VetStation Core**.

> Proyecto separado del repo de la app. Sin dependencias de navegación,
> layout, providers ni comportamiento del producto.

## Stack

- **Vite** (bundler / dev server)
- HTML + CSS puro + JS vanilla
- Google Fonts (Inter) vía CDN
- Sin framework, sin componentes externos

## Comandos

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Arrancar en local (hot reload)
npm run dev
# → abre en http://localhost:5173

# Build de producción
npm run build
# → genera /dist/

# Preview del build
npm run preview
```

## Estructura

```
vetstation-core-landing-site/
├── index.html          ← Única página HTML con todo el contenido
├── src/
│   ├── style.css       ← Todos los estilos (tokens, layout, secciones)
│   └── main.js         ← Animaciones scroll, nav activo
├── vite.config.js
├── package.json
└── .gitignore
```

## Secciones

1. Hero + CTA
2. Problema
3. Propuesta de valor (5 pilares)
4. Flujo cita → consulta → seguimiento
5. Qué incluye
6. Diferenciación
7. Para quién es
8. Implementación + capas de crecimiento
9. CTA final

## Polish opcional (futuro)

- Capturas/mockups reales de la app en las secciones de flujo
- Animaciones más elaboradas (GSAP o Motion One)
- Formulario de demo con backend o Tally/Typeform embed
- Favicon y meta OG completos
- Dominio y deploy (Vercel/Netlify, un comando)
- Modo oscuro
