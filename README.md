# JYMatrix — Sitio comercial

Sitio responsive construido con Next.js App Router, React y TypeScript. Conserva los recursos de marca originales.

## Ejecutar

El proyecto declara Node.js >=25.9.0 en package.json. Usá una versión que cumpla ese requisito en tu entorno de desarrollo y compilación.

```bash
npm ci
npm run dev
```

Abrir http://localhost:3000.

## Verificar producción

```bash
npm run build
npm run start
```

## Contenido

- `app/page.tsx`: portada, servicios, modalidades de contratación, experiencia, proceso, preguntas frecuentes y contacto.
- `app/globals.css`: estilos responsive, contraste, estados de foco y movimiento reducido.
- `app/layout.tsx`: metadatos, URL canónica, Open Graph y Twitter.
- `app/robots.ts` y `app/sitemap.ts`: rutas para buscadores.
- `public/`: logo, iconos e imagen para compartir originales.

## Contacto

Los enlaces de consulta abren la aplicación de correo del visitante y dirigen el mensaje a soporte@jymatrix.com. No hay formulario, backend de envío ni confirmación de entrega.

## Despliegue existente en Cloudflare

Este paquete contiene el código de la aplicación. Conservá el adaptador y la configuración de Workers, variables y comandos de tu despliegue actual. El ZIP recibido no incluía wrangler ni un adaptador de Next.js para Workers, por lo que este paquete no añade ni sustituye esa configuración. Si usás un repositorio, incorporá los cambios y el lockfile conservando los archivos específicos del despliegue.

La URL canónica y el sitemap usan https://jymatrix.com. Si cambia el dominio, actualizalos también en los datos estructurados de page.tsx. Los robots permiten indexación; mantené cualquier vista de prueba privada o con protección de acceso.

## Validación de esta entrega

Compilación de producción, tipos y revisión de enlaces internos/metadatos. La compilación se ejecutó con Node.js 24.22.1; npm mostró un aviso porque el requisito original del proyecto es superior. No se verificó el despliegue en Workers.

La revisión visual en navegador quedó pendiente: el entorno de previsualización agregó argumentos de Vite al comando de Next.js y no pudo iniciar. Revisar la página en escritorio y móvil antes de publicar.
