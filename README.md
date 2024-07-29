# Proyecto de Visualización de CSV

Este proyecto permite cargar un archivo CSV y mostrar su contenido en una tabla interactiva. Además, incluye una barra de búsqueda para filtrar los datos y paginación para una mejor navegación.

## Características

- **Carga de CSV**: Permite al usuario cargar un archivo CSV.
- **Visualización en Tabla**: Muestra el contenido del CSV en una tabla.
- **Barra de Búsqueda**: Filtra los datos en la tabla según las coincidencias.
- **Paginación**: Navega a través de los datos en la tabla de manera paginada.
- **Uso de PapaParse**: Utiliza PapaParse para convertir el archivo CSV (usando CDN).

## Tecnologías Utilizadas

- **HTML/Tailwind/TypeScript**: Estructura y estilo de la aplicación.
- **PapaParse**: Librería para parsear archivos CSV.
- **CDN**: Uso de PapaParse a través de CDN
    ```bash
      <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"></script>
    ```


## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/PablolzDev/TypeScript-ReadFile.git
    ```
3. Abre `index.html` en tu navegador.

## Uso

1. Carga un archivo CSV usando el botón de carga.
2. El contenido del archivo se mostrará en una tabla.
3. Usa la barra de búsqueda para filtrar los datos.
4. Navega a través de las páginas de la tabla usando los controles de paginación.










