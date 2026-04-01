# Guía de integración de exportaciones de Obsidian

Esta guía documenta todos los pasos y reemplazos necesarios para integrar una nueva exportación del Digital Garden de Obsidian en el portfolio Jekyll de GitHub Pages.

---

## Contexto general

- **Exportador:** Obsidian Digital Garden (genera HTML + `site-lib/` + carpetas de anexos)
- **Destino:** Jekyll site en `_projects/cloud/<proveedor>/<slug>.html`
- **Profundidad de ruta:** Los archivos de proyecto están 3 niveles profundos → `base href="../../../"`
- **Imágenes:** Se copian a `assets/projects/resources/` (sin subcarpetas)
- **Site-lib:** Se reemplaza completamente con la nueva versión exportada, excepto por 4 patches críticos en `webpage.js`

> ⚠️ **Orden recomendado:** Copiar site-lib (Paso 1) → Aplicar patches webpage.js (Paso 6) → Crear/actualizar HTMLs (Paso 2) → Actualizar file-tree, metadata, search-index (Pasos 3-5)

---

## PASO 1 — Copiar archivos físicos

### 1.1 Reemplazar `site-lib/`
Copiar y sobreescribir el contenido completo de la carpeta `site-lib/` exportada sobre la del repositorio.

> ⚠️ Después de reemplazar, aplicar obligatoriamente los patches de `webpage.js` (Paso 5).

### 1.2 Copiar imágenes de anexos
Copiar todos los archivos de las carpetas `anexos/` exportadas a `assets/projects/resources/` (sin subcarpetas):

| Origen (ejemplo) | Destino |
|---|---|
| `gcp/proyecto-de-seguridad/anexos/*.png` | `assets/projects/resources/*.png` |
| `oracle/proyectos-oci/anexos/*.png` | `assets/projects/resources/*.png` |

---

## PASO 2 — Crear/actualizar archivos de proyecto HTML

Cada archivo exportado por Obsidian debe adaptarse al formato Jekyll. Tomar como referencia el archivo `_projects/cloud/gcp/gcp-secure-infrastructure.html`.

### 2.1 Agregar front matter de Jekyll

Insertar al inicio del archivo (antes del `<head>`):

```yaml
---
title: <Título del proyecto>
description: <Descripción breve>
layout: project
modal-id: <número único>
date: <YYYY-MM-DD>
img: <slug>.png
thumbnail: <slug>.png
alt: <slug>
project-date: <Mes Año>
github_url:
has_project_url: true
role: '<Rol en el proyecto>'
technologies: ['Tech1', 'Tech2']
category: Cloud
subcategory: <GCP|Oracle|AWS>
tags: ['tag1', 'tag2']

---
```

### 2.2 Transformaciones en el `<head>` del HTML exportado

Aplicar estos reemplazos en cada archivo de proyecto:

| Campo | Buscar (valor exportado) | Reemplazar por |
|---|---|---|
| `base href` | `<base href="../../">` | `<base href="../../../">` |
| `pathname` | `content="<proveedor>/proyecto/slug-obsidian"` | `content="cloud/<proveedor>/<slug-jekyll>"` |
| `og:url` | `content="<proveedor>/proyecto/slug-obsidian"` | `content="cloud/<proveedor>/<slug-jekyll>"` |
| `og:image` | `content="<proveedor>/proyecto/anexos/<imagen>.png"` | `content="/assets/projects/resources/<imagen>.png"` |

### 2.3 Transformaciones de rutas en el cuerpo del HTML

Reemplazos globales dentro del archivo HTML del proyecto:

| Buscar | Reemplazar por | Descripción |
|---|---|---|
| `src="<proveedor>/proyecto/anexos/` | `src="/assets/projects/resources/` | Rutas de imágenes `<img>` |
| `href="site-lib/` | `href="/site-lib/` | Rutas de CSS/JS en `<link>` y `<script>` |
| `src="site-lib/` | `src="/site-lib/` | Rutas de scripts |

### 2.4 Ejemplo concreto — GCP

**Archivo:** `_projects/cloud/gcp/gcp-secure-infrastructure.html`
**Origen:** `proyectos_exportados/gcp/proyecto-de-seguridad/gcp-solución-segura.html`

| Buscar | Reemplazar por |
|---|---|
| `<base href="../../">` | `<base href="../../../">` |
| `content="gcp/proyecto-de-seguridad/gcp-solución-segura"` | `content="cloud/gcp/gcp-secure-infrastructure"` |
| `src="gcp/proyecto-de-seguridad/anexos/` | `src="/assets/projects/resources/` |
| `href="site-lib/` | `href="/site-lib/` |
| `src="site-lib/` | `src="/site-lib/` |

### 2.5 Ejemplo concreto — OCI Análisis de Costos

**Archivo:** `_projects/cloud/oracle/oci-analisis-costos-en-la-nube.html`
**Origen:** `proyectos_exportados/oracle/proyectos-oci/análisis-de-costos-en-la-nube.html`

| Buscar | Reemplazar por |
|---|---|
| `<base href="../../">` | `<base href="../../../">` |
| `content="oracle/proyectos-oci/análisis-de-costos-en-la-nube"` | `content="cloud/oracle/oci-analisis-costos-en-la-nube"` |
| `src="oracle/proyectos-oci/anexos/` | `src="/assets/projects/resources/` |
| `href="site-lib/` | `href="/site-lib/` |
| `src="site-lib/` | `src="/site-lib/` |

### 2.6 Ejemplo concreto — OCI Infraestructura Web Segura

**Archivo:** `_projects/cloud/oracle/oci-infraestructura-web-segura.html`
**Origen:** `proyectos_exportados/oracle/proyectos-oci/infraestructura-web-segura.html`

| Buscar | Reemplazar por |
|---|---|
| `<base href="../../">` | `<base href="../../../">` |
| `content="oracle/proyectos-oci/infraestructura-web-segura"` | `content="cloud/oracle/oci-infraestructura-web-segura"` |
| `src="oracle/proyectos-oci/anexos/` | `src="/assets/projects/resources/` |
| `href="site-lib/` | `href="/site-lib/` |
| `src="site-lib/` | `src="/site-lib/` |

---

## PASO 3 — Actualizar `site-lib/html/file-tree-content.html`

Este archivo contiene los enlaces de navegación del árbol de archivos en el sidebar.

| Buscar | Reemplazar por |
|---|---|
| `href="gcp/proyecto-de-seguridad/gcp-solución-segura"` | `href="cloud/gcp/gcp-secure-infrastructure"` |
| `href="oracle/proyectos-oci/análisis-de-costos-en-la-nube"` | `href="cloud/oracle/oci-analisis-costos-en-la-nube"` |
| `href="oracle/proyectos-oci/infraestructura-web-segura"` | `href="cloud/oracle/oci-infraestructura-web-segura"` |

---

## PASO 4 — Actualizar `site-lib/metadata.json`

### 4.1 Sección `shownInTree` (array en línea)

| Buscar | Reemplazar por |
|---|---|
| `"gcp/proyecto-de-seguridad/gcp-solución-segura"` | `"cloud/gcp/gcp-secure-infrastructure"` |
| `"oracle/proyectos-oci/análisis-de-costos-en-la-nube"` | `"cloud/oracle/oci-analisis-costos-en-la-nube"` |
| `"oracle/proyectos-oci/infraestructura-web-segura"` | `"cloud/oracle/oci-infraestructura-web-segura"` |

> **Nota:** Los mismos 3 reemplazos de slugs de la sección 4.1 también aplican al array `"allFiles"` (que está en la misma línea del archivo). Usar **Replace All** en el editor para que cubra ambos arrays (`shownInTree` y `allFiles`) en una sola operación.

### 4.2 Sección `webpages` — claves del objeto

| Buscar | Reemplazar por |
|---|---|
| `"gcp/proyecto-de-seguridad/gcp-solución-segura": {` | `"cloud/gcp/gcp-secure-infrastructure": {` |
| `"oracle/proyectos-oci/análisis-de-costos-en-la-nube": {` | `"cloud/oracle/oci-analisis-costos-en-la-nube": {` |
| `"oracle/proyectos-oci/infraestructura-web-segura": {` | `"cloud/oracle/oci-infraestructura-web-segura": {` |

### 4.3 Sección `webpages` — campos internos de cada entrada

> El campo `fullURL` en la exportación de Obsidian incluye el dominio completo del sitio (`https://cesar-florian.github.io/`). El reemplazo es solo el sufijo de la ruta.

Para la entrada **GCP**:

| Buscar | Reemplazar por |
|---|---|
| `"fullURL": "https://cesar-florian.github.io/gcp/proyecto-de-seguridad/gcp-solución-segura"` | `"fullURL": "https://cesar-florian.github.io/cloud/gcp/gcp-secure-infrastructure"` |
| `"pathToRoot": "../.."` *(dentro del bloque GCP)* | `"pathToRoot": "../../.."` |
| `"exportPath": "gcp/proyecto-de-seguridad/gcp-solución-segura.html"` *(en webpages)* | `"exportPath": "cloud/gcp/gcp-secure-infrastructure"` |

Para la entrada **OCI Análisis de Costos**:

| Buscar | Reemplazar por |
|---|---|
| `"fullURL": "https://cesar-florian.github.io/oracle/proyectos-oci/análisis-de-costos-en-la-nube"` | `"fullURL": "https://cesar-florian.github.io/cloud/oracle/oci-analisis-costos-en-la-nube"` |
| `"pathToRoot": "../.."` *(dentro del bloque OCI costos)* | `"pathToRoot": "../../.."` |
| `"exportPath": "oracle/proyectos-oci/análisis-de-costos-en-la-nube.html"` *(en webpages)* | `"exportPath": "cloud/oracle/oci-analisis-costos-en-la-nube"` |

Para la entrada **OCI Infraestructura Web**:

| Buscar | Reemplazar por |
|---|---|
| `"fullURL": "https://cesar-florian.github.io/oracle/proyectos-oci/infraestructura-web-segura"` | `"fullURL": "https://cesar-florian.github.io/cloud/oracle/oci-infraestructura-web-segura"` |
| `"pathToRoot": "../.."` *(dentro del bloque OCI web)* | `"pathToRoot": "../../.."` |
| `"exportPath": "oracle/proyectos-oci/infraestructura-web-segura.html"` *(en webpages)* | `"exportPath": "cloud/oracle/oci-infraestructura-web-segura"` |

### 4.4 Sección `fileInfo` — claves del objeto (3 entradas de proyectos)

| Buscar | Reemplazar por |
|---|---|
| `"gcp/proyecto-de-seguridad/gcp-solución-segura": {` *(en fileInfo)* | `"cloud/gcp/gcp-secure-infrastructure": {` |
| `"oracle/proyectos-oci/análisis-de-costos-en-la-nube": {` *(en fileInfo)* | `"cloud/oracle/oci-analisis-costos-en-la-nube": {` |
| `"oracle/proyectos-oci/infraestructura-web-segura": {` *(en fileInfo)* | `"cloud/oracle/oci-infraestructura-web-segura": {` |

### 4.5 Sección `fileInfo` — campos `exportPath` de las 3 entradas de proyectos

| Buscar | Reemplazar por |
|---|---|
| `"exportPath": "gcp/proyecto-de-seguridad/gcp-solución-segura.html"` *(en fileInfo GCP)* | `"exportPath": "cloud/gcp/gcp-secure-infrastructure"` |
| `"exportPath": "oracle/proyectos-oci/análisis-de-costos-en-la-nube.html"` *(en fileInfo OCI costos)* | `"exportPath": "cloud/oracle/oci-analisis-costos-en-la-nube"` |
| `"exportPath": "oracle/proyectos-oci/infraestructura-web-segura.html"` *(en fileInfo OCI web)* | `"exportPath": "cloud/oracle/oci-infraestructura-web-segura"` |

### 4.6 Rutas de imágenes — Reemplazo global (Replace All)

Estas dos operaciones afectan decenas de ocurrencias en `attachments`, `allFiles`, `fileInfo` y `sourcePathMap`:

| Buscar | Reemplazar por | Tipo |
|---|---|---|
| `oracle/proyectos-oci/anexos/` | `assets/projects/resources/` | Replace All |
| `gcp/proyecto-de-seguridad/anexos/` | `assets/projects/resources/` | Replace All |

---

## PASO 5 — Actualizar `site-lib/search-index.json`

### 5.1 Sección `documentIds`

| Buscar | Reemplazar por |
|---|---|
| `"gcp/proyecto-de-seguridad/gcp-solución-segura"` | `"cloud/gcp/gcp-secure-infrastructure"` |
| `"oracle/proyectos-oci/análisis-de-costos-en-la-nube"` | `"cloud/oracle/oci-analisis-costos-en-la-nube"` |
| `"oracle/proyectos-oci/infraestructura-web-segura"` | `"cloud/oracle/oci-infraestructura-web-segura"` |

### 5.2 Sección `storedFields` — campo `"path"`

| Buscar | Reemplazar por |
|---|---|
| `"path": "gcp/proyecto-de-seguridad/gcp-solución-segura.html"` | `"path": "cloud/gcp/gcp-secure-infrastructure"` |
| `"path": "oracle/proyectos-oci/análisis-de-costos-en-la-nube.html"` | `"path": "cloud/oracle/oci-analisis-costos-en-la-nube"` |
| `"path": "oracle/proyectos-oci/infraestructura-web-segura.html"` | `"path": "cloud/oracle/oci-infraestructura-web-segura"` |

---

## PASO 6 — Patches críticos en `site-lib/scripts/webpage.js`

Estos 4 cambios deben aplicarse **siempre** después de reemplazar `site-lib/`, ya que la nueva exportación sobreescribe el archivo. Buscar y reemplazar exactamente:

### Patch 1 — fetch de search-index.json (ruta absoluta)

| Buscar | Reemplazar por |
|---|---|
| `const t = await ObsidianSite.fetch(x.libFolderName + "/search-index.json");` | `const t = await ObsidianSite.fetch("/" + x.libFolderName + "/search-index.json");` |

### Patch 2 — generación de IDs de encabezados (eliminar caracteres `:`)

> Línea ~2252. La línea contiene `i.href = e + "#" +` — buscar ese fragmento para ubicarla.

| Buscar | Reemplazar por |
|---|---|
| `i.href = e + "#" + t.replaceAll(' ', '_') + '_0'` | `i.href = e + "#" + t.replaceAll(' ', '_').replaceAll(':', '') + '_0'` |

### Patch 3 — fetch de metadata.json (ruta absoluta)

| Buscar | Reemplazar por |
|---|---|
| `const t = await fetch(x.libFolderName + "/metadata.json");` | `const t = await fetch("/" + x.libFolderName + "/metadata.json");` |

### Patch 4 — resolución de ruta ignorando fragmentos de anchor (`#`)

| Buscar | Reemplazar por |
|---|---|
| `const e = this.metadata.webpages[t];` | `const e = this.metadata.webpages[t.split('#')[0]];` |

---

## Regla general de slug

Para derivar el slug Jekyll a partir del nombre del archivo exportado de Obsidian:

| Regla | Ejemplo |
|---|---|
| Minúsculas | `GCP Solución segura` → `gcp-solución-segura` |
| Espacios → guiones | `análisis de costos` → `análisis-de-costos` |
| Agregar prefijo de proveedor | `gcp-` / `oci-` |
| Sin extensión `.html` en rutas de metadata | `cloud/gcp/gcp-secure-infrastructure` |
| Con extensión `.html` solo en `exportPath` de `fileInfo` de la versión anterior | ya corregido |

---

## Estructura de permalink Jekyll

```
_projects/cloud/<proveedor>/<slug>.html
→ permalink: cloud/<proveedor>/<slug>
→ base href: "../../../"   (3 niveles arriba)
→ pathToRoot en metadata: "../../.."
```

---

## Checklist de verificación post-integración

Después de completar todos los pasos, verificar que no queden rutas antiguas:

### En `site-lib/metadata.json`
Buscar los siguientes strings — no deben encontrar resultados:
- `gcp/proyecto-de-seguridad/gcp-solución-segura`
- `oracle/proyectos-oci/análisis-de-costos-en-la-nube`
- `oracle/proyectos-oci/infraestructura-web-segura`
- `"pathToRoot": "../.."` *(solo 2 niveles — debe ser 3 para proyectos en `cloud/<proveedor>/`)*

### En `site-lib/search-index.json`
Buscar — no deben encontrar resultados:
- `gcp/proyecto-de-seguridad`
- `oracle/proyectos-oci/análisis`
- `oracle/proyectos-oci/infraestructura`

### En `site-lib/html/file-tree-content.html`
Buscar — no deben encontrar resultados:
- `href="gcp/proyecto-de-seguridad`
- `href="oracle/proyectos-oci`

### En cada archivo HTML de proyecto (`_projects/cloud/...`)
Buscar — no deben encontrar resultados:
- `href="site-lib/` *(debe ser `/site-lib/`)*
- `src="site-lib/` *(debe ser `/site-lib/`)*
- `src="gcp/` o `src="oracle/` *(imágenes deben apuntar a `/assets/projects/resources/`)*
- `<base href="../../">` *(debe ser `"../../../"`)*

### En `site-lib/scripts/webpage.js`
Confirmar que estas 4 líneas existen exactamente:
- `ObsidianSite.fetch("/" + x.libFolderName + "/search-index.json")`
- `t.replaceAll(' ', '_').replaceAll(':', '') + '_0'`
- `fetch("/" + x.libFolderName + "/metadata.json")`
- `this.metadata.webpages[t.split('#')[0]]`
