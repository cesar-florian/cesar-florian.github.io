# Portafolio Personal - César Florian

[![Licencia](https://img.shields.io/badge/Licencia-Apache%202.0-blue.svg)](LICENSE)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.x-red.svg)](https://jekyllrb.com/)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222222.svg)](https://pages.github.com/)

Sitio web de portafolio profesional que presenta proyectos de desarrollo de software, experiencia laboral, educación y certificaciones.

**Sitio en vivo:** [https://cesar-florian.github.io](https://cesar-florian.github.io)

---

## Tabla de contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación y configuración local](#instalación-y-configuración-local)
- [Cómo actualizar contenido](#cómo-actualizar-contenido)
- [Despliegue](#despliegue)
- [Integración con Obsidian](#integración-con-obsidian)
- [Licencia](#licencia)
- [Créditos](#créditos)

---

## Descripción

Este portafolio es un sitio web estático construido con Jekyll y desplegado en GitHub Pages. Presenta información profesional incluyendo:

- **Habilidades técnicas** 
- **Experiencia laboral** 
- **Educación** 
- **Certificaciones** 
- **Portafolio de proyectos** 

---

## Características

- Diseño responsivo y moderno basado en Bootstrap
- Interfaz de una sola página (single-page) con navegación fluida
- Sistema de proyectos con categorías y filtros dinámicos
- Modales para presentación detallada de proyectos
- Integración con redes sociales (GitHub, LinkedIn, Email)
- Optimizado para dispositivos móviles
- Despliegue automático mediante GitHub Pages
- Soporte para exportaciones de Obsidian Digital Garden

---

## Tecnologías utilizadas

### Core
- **Jekyll:** Generador de sitios estáticos
- **Liquid:** Motor de plantillas de Jekyll
- **HTML5/CSS3:** Estructura y estilos
- **JavaScript/jQuery:** Interactividad del sitio

### Frontend
- **Bootstrap 3:** Framework CSS para diseño responsivo
- **Font Awesome:** Iconografía
- **Google Fonts:** Tipografías personalizadas (Montserrat, Droid Serif, Roboto Slab)

### Herramientas y servicios
- **GitHub Pages:** Hosting y despliegue
- **Git:** Control de versiones
- **Obsidian Digital Garden:** Generador de documentación de proyectos

---

## Estructura del proyecto

```
.
├── _config.yml                    # Configuración principal de Jekyll (info personal, experiencia, educación)
├── _data/                         # Datos estructurados del template
│   └── template.yml               # Configuración de colores y fuentes del tema
├── _includes/                     # Componentes reutilizables
│   ├── about.html                 
│   ├── certifications.html        
│   ├── clients.html               
│   ├── contact.html               
│   ├── css/
│   │   ├── agency.css             # Estilos personalizados del tema Agency
│   │   └── bootstrap.min.css      
│   ├── education.html             
│   ├── experience.html            
│   ├── footer.html                # Pie de página con redes sociales
│   ├── head.html                  # Meta tags, CSS y configuración del <head>
│   ├── header.html                # Encabezado y navegación principal
│   ├── js.html                    # Carga de scripts JavaScript
│   ├── modals.html                # Ventanas modales para detalles de proyectos
│   ├── portfolio_grid.html        # Grilla de proyectos del portafolio
│   ├── services.html              
│   └── skills.html                
├── _layouts/                      # Plantillas de página
│   ├── default.html               # Layout principal del sitio
│   ├── feed.xml                   
│   ├── project.html               # Layout para páginas de proyectos individuales
│   └── style.css                  
├── _projects/                     # Proyectos del portafolio
│   ├── cloud/                     # Proyectos de infraestructura en la nube
│   │   ├── gcp/
│   │   │   └── gcp-secure-infrastructure.html
│   │   └── oracle/
│   │       ├── oci-analisis-costos-en-la-nube.html
│   │       └── oci-infraestructura-web-segura.html
│   └── personal-portfolio.md      # Proyecto del portafolio personal (este sitio)
├── assets/                        # Recursos de proyectos
│   └── projects/
│       └── resources/             # Imágenes y recursos de proyectos
├── css/                           # Estilos CSS
│   └── font-awesome/              # Librería de iconos Font Awesome
│       ├── css/
│       │   ├── font-awesome.css
│       │   └── font-awesome.min.css
│       └── fonts/
│           └── fontawesome-webfont.svg
├── docs/                          # Documentación adicional
│   └── obsidian-export-integration-guide.md  
├── img/                           # Imágenes del sitio
│   ├── about/
│   │   └── me.jpg                 # Foto de perfil
│   ├── certifications/            # Imágenes de certificaciones
│   │   ├── OCI AI Foundations Associate.png
│   │   ├── OCI Architect Associate.png
│   │   ├── OCI Foundations Associate.png
│   │   ├── ODP Foundations Associate.png
│   │   └── SFC Scrum.webp
│   ├── education/
│   │   └── umg.png                # Logo Universidad Mariano Gálvez
│   ├── experience/                # Logos de empresas
│   │   ├── airpak.jpg
│   │   ├── airpak.svg
│   │   ├── airpak.webp
│   │   ├── bancopromerica.svg
│   │   ├── circle-arrow-up.svg
│   │   ├── itprofis.png
│   │   ├── itprofis.svg
│   │   ├── promerica.png
│   │   ├── promerica.svg
│   │   └── promerica.svg.png
│   ├── logos/                     # Logos de clientes/servicios
│   │   ├── envato.jpg
│   │   └── wordpress.jpg
│   ├── portfolio/                 # Thumbnails de proyectos del portafolio
│   │   ├── gcp-secure-infrastructure.png
│   │   ├── portfolio-personal.png
│   │   ├── proyecto-calculadora-de-costos-2.png
│   │   └── web-escalable-y-segura.png
│   ├── header-bg.jpg              # Imagen de fondo del encabezado
│   └── map-image.png              # Imagen del mapa de contacto
├── js/                            # Scripts JavaScript
│   ├── agency.js                  # Scripts personalizados del tema
│   ├── bootstrap.js               # Bootstrap JavaScript completo
│   ├── bootstrap.min.js           
│   ├── cbpAnimatedHeader.js       # Animación del header al hacer scroll
│   ├── cbpAnimatedHeader.min.js   
│   ├── classie.js                 # Utilidades para manipulación de clases CSS
│   ├── contact_me.js              # Lógica del formulario de contacto
│   ├── jqBootstrapValidation.js   # Validación de formularios con Bootstrap
│   ├── jquery-1.11.0.js           # Librería jQuery
│   └── jquery.easing.min.js       # Efectos de animación suavizada
├── site-lib/                      # Librería de Obsidian Digital Garden
│   ├── fonts/                     # Fuentes tipográficas de Obsidian
│   ├── html/
│   │   └── file-tree-content.html # Árbol de archivos de proyectos
│   ├── media/                     # Recursos multimedia de Obsidian
│   │   ├── 2308ab1944a6bfa5c5b8.svg
│   │   ├── 6155340132a851f6089e.svg
│   │   └── favicon.png
│   ├── scripts/
│   │   ├── graph-render-worker.js # Worker para renderizado de grafos
│   │   ├── graph-wasm.js          # WebAssembly para grafos de conocimiento
│   │   └── webpage.js             # Script principal de páginas de Obsidian
│   ├── styles/                    # Estilos de Obsidian Digital Garden
│   │   ├── global-variable-styles.css
│   │   ├── main-styles.css
│   │   ├── obsidian.css
│   │   ├── other-plugins.css
│   │   ├── snippets.css
│   │   └── supported-plugins.css
│   ├── metadata.json              # Metadata de proyectos exportados
│   ├── rss.xml                    
│   └── search-index.json          # Índice de búsqueda de proyectos
├── favicon.png                    # Icono del sitio
├── feed.xml                       
├── index.html                     # Página principal del portafolio
├── style.css                      # Estilos CSS raíz
├── LICENSE                        # Licencia Apache 2.0
└── README.md                      # Documentación del proyecto
```

---

## Instalación y configuración local

### Prerrequisitos

- Ruby (>= 2.7)
- RubyGems
- Jekyll
- Bundler

### Pasos de instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/cesar-florian/cesar-florian.github.io.git
   cd cesar-florian.github.io
   ```

2. **Instalar dependencias de Jekyll:**
   ```bash
   gem install jekyll bundler
   bundle install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   jekyll serve
   ```
   O alternativamente:
   ```bash
   bundle exec jekyll serve
   ```

4. **Abrir en el navegador:**
   Visita [http://localhost:4000](http://localhost:4000)

### Configuración adicional

El archivo `_config.yml` contiene toda la configuración del sitio:
- Información personal (nombre, email, descripción)
- Configuración de redes sociales
- Experiencia laboral
- Educación
- Habilidades
- Certificaciones

---

## Cómo actualizar contenido

### Información personal

Edita el archivo `_config.yml` para actualizar:
- **Datos básicos:** `title`, `email`, `description`, `summary`
- **Redes sociales:** Sección `social`
- **Experiencia laboral:** Sección `experience`
- **Educación:** Sección `university`
- **Habilidades:** Sección `skills`
- **Certificaciones:** Sección `certifications`

### Proyectos del portafolio

#### Proyectos en Markdown

Crear archivos `.md` en `_projects/` con el siguiente front matter:

```yaml
---
title: Título del proyecto
description: Descripción breve del proyecto
layout: project
modal-id: 1
date: 2025-12-13
img: nombre-imagen.png
thumbnail: nombre-imagen.png
alt: texto alternativo
project-date: Diciembre 2025
github_url: "https://github.com/usuario/repo"
has_project_url: true
role: 'Rol en el proyecto'
technologies: ['Tech1', 'Tech2', 'Tech3']
category: Web
subcategory: ux
tags: ['tag1', 'tag2']
---
```

#### Proyectos en HTML (desde Obsidian)

Para proyectos exportados desde Obsidian Digital Garden, seguir la [Guía de integración de exportaciones de Obsidian](docs/obsidian-export-integration-guide.md).

### Imágenes

- **Proyectos:** `/assets/projects/resources/`
- **Experiencia:** `/img/experience/`
- **Educación:** `/img/education/`
- **Certificaciones:** `/img/certifications/`
- **Sobre mí:** `/img/about/`
- **Logos:** `/img/logos/`

---

## Despliegue

Este sitio está configurado para desplegarse automáticamente en GitHub Pages.

### Despliegue automático

1. Hacer push a la rama `master` (o rama configurada en GitHub Pages)
2. GitHub Pages construye y despliega automáticamente el sitio
3. El sitio estará disponible en: `https://cesar-florian.github.io`

### Configuración de GitHub Pages

1. Ir a Settings → Pages en el repositorio
2. Seleccionar la rama fuente (típicamente `master`)
3. Seleccionar carpeta raíz `/` según configuración
4. Guardar cambios

---

## Integración con Obsidian

Este portafolio soporta la integración de proyectos exportados desde Obsidian utilizando el plugin Digital Garden.

Para documentación detallada sobre cómo integrar nuevas exportaciones, consultar:
- [docs/obsidian-export-integration-guide.md](docs/obsidian-export-integration-guide.md)

**Resumen del proceso:**
1. Exportar proyecto desde Obsidian con Digital Garden
2. Copiar `site-lib/` al repositorio
3. Aplicar patches necesarios en `webpage.js`
4. Crear/actualizar archivo HTML del proyecto en `_projects/`
5. Copiar imágenes a `assets/projects/resources/`
6. Actualizar `file-tree-content.html`, `metadata.json` y `search-index.json`

---

## Licencia

Este proyecto está licenciado bajo la **Apache License 2.0**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

```
Copyright 2017-2026 César Florian

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

---

## Créditos

### Template base

**Agency Jekyll Theme**  
- Creado por: [y7kim](https://github.com/y7kim)
- Repositorio original: [https://github.com/y7kim/agency-jekyll-theme](https://github.com/y7kim/agency-jekyll-theme)

### Modificaciones y desarrollo

**César Florian**  
- GitHub: [cesar-florian](https://github.com/cesar-florian)

---

## Contacto

Para consultas, sugerencias o colaboraciones:

- LinkedIn: [cesar-florian](https://www.linkedin.com/in/cesar-florian)
- Email: ce.florian.27@gmail.com

