# Portafolio de Facundo Barrios

Un portafolio moderno y responsivo desarrollado con React, que muestra mis proyectos, habilidades y experiencia como desarrollador Full Stack Junior.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y efectos visuales
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Animaciones Suaves**: Animaciones con Framer Motion para una mejor experiencia de usuario
- **Navegación Intuitiva**: Menú de navegación fijo con scroll suave
- **Secciones Completas**: Hero, Sobre mí, Proyectos, Habilidades y Contacto
- **Formulario de Contacto**: Formulario funcional para recibir mensajes
- **Iconos y Tecnologías**: Visualización clara de las tecnologías utilizadas

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework principal
- **Framer Motion**: Animaciones y transiciones
- **React Icons**: Iconos para la interfaz
- **CSS3**: Estilos modernos con variables CSS
- **HTML5**: Estructura semántica

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/DFacundoBarrios/portafolio-react.git
   cd portafolio-react
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto en modo desarrollo**
   ```bash
   npm start
   ```

4. **Abre tu navegador**
   El proyecto se abrirá automáticamente en `http://localhost:3000`

## 🏗️ Scripts Disponibles

- `npm start`: Ejecuta el proyecto en modo desarrollo
- `npm build`: Construye el proyecto para producción
- `npm test`: Ejecuta las pruebas
- `npm eject`: Expone la configuración de webpack (irreversible)

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.js       # Navegación principal
│   ├── Hero.js         # Sección de presentación
│   ├── About.js        # Información personal
│   ├── Projects.js     # Proyectos realizados
│   ├── Skills.js       # Habilidades técnicas
│   ├── Contact.js      # Formulario de contacto
│   └── Footer.js       # Pie de página
├── App.js              # Componente principal
├── index.js            # Punto de entrada
└── index.css           # Estilos globales
```

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... más variables */
}
```

### Contenido
- **Información personal**: Modifica `src/components/Hero.js` y `src/components/About.js`
- **Proyectos**: Actualiza el array de proyectos en `src/components/Projects.js`
- **Habilidades**: Edita las categorías en `src/components/Skills.js`
- **Contacto**: Cambia la información en `src/components/Contact.js`

## 📱 Responsive Design

El portafolio está optimizado para:
- **Desktop**: 1024px y superior
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Despliegue

### Netlify (Recomendado)
1. Conecta tu repositorio de GitHub a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `build`

### Vercel
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`

### GitHub Pages
1. Instala gh-pages: `npm install --save-dev gh-pages`
2. Agrega al package.json:
   ```json
   "homepage": "https://tuusuario.github.io/turepo",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Ejecuta: `npm run deploy`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Facundo Barrios**
- Email: facundobarrios27@gmail.com
- GitHub: [@DFacundoBarrios](https://github.com/DFacundoBarrios)
- LinkedIn: [facundobarrios27](https://www.linkedin.com/in/facundobarrios27/)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

## 📞 Contacto

¿Tienes alguna pregunta o sugerencia? ¡No dudes en contactarme!

- 📧 Email: facundobarrios27@gmail.com
- 💼 LinkedIn: [Facundo Barrios](https://www.linkedin.com/in/facundobarrios27/)
- 🐙 GitHub: [DFacundoBarrios](https://github.com/DFacundoBarrios) 