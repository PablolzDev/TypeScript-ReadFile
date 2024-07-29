# Proyecto de Visualización de CSV

Este proyecto permite cargar un archivo CSV y mostrar su contenido en una tabla interactiva. Además, incluye una barra de búsqueda para filtrar los datos y paginación para una mejor navegación.

## Características

- **Carga de CSV**: Permite al usuario cargar un archivo CSV.
- **Visualización en Tabla**: Muestra el contenido del CSV en una tabla.
- **Barra de Búsqueda**: Filtra los datos en la tabla según las coincidencias.
- **Paginación**: Navega a través de los datos en la tabla de manera paginada.
- **Uso de PapaParse**: Utiliza PapaParse para convertir el archivo CSV (usando CDN).

## Tecnologías Utilizadas

- **HTML/CSS/JavaScript**: Estructura y estilo de la aplicación.
- **PapaParse**: Librería para parsear archivos CSV.
- **CDN**: Uso de PapaParse a través de CDN.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/PablolzDev/TypeScript-ReadFile.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd tu-repositorio
    ```
3. Abre `index.html` en tu navegador.

## Uso

1. Carga un archivo CSV usando el botón de carga.
2. El contenido del archivo se mostrará en una tabla.
3. Usa la barra de búsqueda para filtrar los datos.
4. Navega a través de las páginas de la tabla usando los controles de paginación.

## Ejemplo de Código

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Visualización de CSV</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
</head>
<body>
    <input type="file" id="csvFileInput" accept=".csv" />
    <input type="text" id="searchInput" placeholder="Buscar..." />
    <table id="dataTable">
        <!-- Contenido de la tabla -->
    </table>
    <div id="paginationControls">
        <!-- Controles de paginación -->
    </div>
    <script src="app.js"></script>
</body>
</html>













