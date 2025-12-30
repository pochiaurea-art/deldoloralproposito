
# Del Dolor al Propósito - Web Personal

Esta es la página web personal de ROR Rodríguez.

## 📸 Cómo cambiar tus fotos personales

Para que las fotos de la sección "Sobre Mí" funcionen:

1. Ve a la carpeta **`public`** en la raíz de este proyecto.
2. Navega (o crea las carpetas) hacia: `public/assets/images/`.
3. Pega ahí tus 3 fotos y nómbralas exactamente:
   - `foto1.jpg`
   - `foto2.jpg`
   - `foto3.jpg`

*Nota: Si usas otros nombres o formatos (.png), deberás actualizar el archivo `components/About.tsx`.*

## 🚀 Guía de Despliegue Manual en NETLIFY (Gratis)

Para no consumir tus "minutos de construcción" en Netlify, usaremos el método manual. Esto utiliza la potencia de tu PC en lugar de los servidores de Netlify.

### Paso 1: Generar la web en tu computadora
1. Asegúrate de haber guardado tus fotos en `public/assets/images`.
2. Abre la terminal en la carpeta del proyecto.
3. Ejecuta: `npm run build`.
4. Espera a que termine. Se creará (o actualizará) una carpeta llamada **`dist`**.

### Paso 2: Subir a Netlify
1. Entra a tu cuenta de [Netlify](https://app.netlify.com/).
2. Ve a la pestaña **"Deploys"** de tu sitio.
3. Verás un recuadro con borde punteado que dice **"Need to update your site? Drag and drop your output folder here"**.
4. Arrastra la carpeta **`dist`** completa desde tu computadora y suéltala en ese recuadro.
5. Espera unos segundos a que diga "Published".

¡Listo! Tu web está actualizada y has gastado **0 minutos** de tu cuota mensual.

---

## 📧 Nota sobre el Newsletter
Recuerda que para que el formulario de suscripción funcione, debes haber configurado tu URL de Formspree en el archivo `components/Newsletter.tsx`.
Sitio desplegado automáticamente con GitHub Actions 🚀Sitio Que salga jajaj.

