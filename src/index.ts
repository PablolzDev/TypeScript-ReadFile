import * as Papa from 'papaparse';
import { DataEntry } from "../src/models/csv.model";
import { processCSVFile } from "../src/controllers/csv.controller";

// Variables globales
let dataEntries: DataEntry[] = [];
let filteredEntries: DataEntry[] = [];
let currentPageNumber = 1;
const entriesPerPage = 15;

// Elementos del DOM
const csvFileInput = document.getElementById("csvFile") as HTMLInputElement;
const dataSearchInput = document.getElementById("searchBar") as HTMLInputElement; 
const dataTableHeaders = document.querySelector('thead tr') as HTMLTableRowElement;
const dataTableBody = document.getElementById('csvData') as HTMLTableSectionElement; 
const paginationContainer = document.getElementById('pagination') as HTMLDivElement;

// Función principal para actualizar la tabla
const updateTableDisplay = () => {
    dataTableHeaders.innerHTML = '';
    dataTableBody.innerHTML = '';

    if (filteredEntries.length === 0) return;

    const columns = Object.keys(filteredEntries[0]);

    columns.forEach((column) => {
        const th = document.createElement('th');
        th.textContent = column;
        dataTableHeaders.appendChild(th);
    });

    const startIndex = (currentPageNumber - 1) * entriesPerPage;
    const endIndex = Math.min(startIndex + entriesPerPage, filteredEntries.length);

    for (let i = startIndex; i < endIndex; i++) {
        const entry = filteredEntries[i];
        const tr = document.createElement('tr');

        columns.forEach((column) => {
            const td = document.createElement('td');
            td.textContent = entry[column];
            tr.appendChild(td);
        });

        dataTableBody.appendChild(tr);
    }
};

// Función para actualizar la paginación
const updatePaginationDisplay = () => {
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(filteredEntries.length / entriesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i.toString();
        button.disabled = i === currentPageNumber;
        button.addEventListener('click', () => {
            currentPageNumber = i;
            updateTableDisplay();
        });
        paginationContainer.appendChild(button);
    }
};

// Función para manejar la carga del archivo
const handleFileUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        const csvFile = target.files[0];
        const fileType = csvFile.type;
        const fileExtension = csvFile.name.split('.').pop()?.toLowerCase();

        if ((fileType === "text/csv" || fileType === "application/vnd.ms-excel") && fileExtension === "csv") {
            try {
                dataEntries = await processCSVFile(csvFile);
                filteredEntries = dataEntries;
                currentPageNumber = 1;
                updateTableDisplay();
                updatePaginationDisplay();
            } catch (error) {
                console.error("Error al procesar el archivo CSV:", error);
                alert("Hubo un error al procesar el archivo CSV.");
            }
        } else {
            alert("Por favor, suba un archivo CSV válido.");
            csvFileInput.value = '';
        }
    }
};

// Función para manejar la búsqueda en la tabla
const handleDataSearch = (event: Event) => {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    filteredEntries = dataEntries.filter((entry) =>
        Object.values(entry).some((value) => value.toLowerCase().includes(searchTerm))
    );
    currentPageNumber = 1;
    updateTableDisplay();
    updatePaginationDisplay();
};

// Event listeners
csvFileInput.addEventListener("change", handleFileUpload);
dataSearchInput.addEventListener('input', handleDataSearch);