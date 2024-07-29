var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { processCSVFile } from "../src/controllers/csv.controller";
// Variables globales
let dataEntries = [];
let filteredEntries = [];
let currentPageNumber = 1;
const entriesPerPage = 15;
// Elementos del DOM
const csvFileInput = document.getElementById("csvFile");
const dataSearchInput = document.getElementById("searchBar");
const dataTableHeaders = document.querySelector('thead tr');
const dataTableBody = document.getElementById('csvData');
const paginationContainer = document.getElementById('pagination');
// Función principal para actualizar la tabla
const updateTableDisplay = () => {
    dataTableHeaders.innerHTML = '';
    dataTableBody.innerHTML = '';
    if (filteredEntries.length === 0)
        return;
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
const handleFileUpload = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const target = event.target;
    if (target.files && target.files.length > 0) {
        const csvFile = target.files[0];
        const fileType = csvFile.type;
        const fileExtension = (_a = csvFile.name.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if ((fileType === "text/csv" || fileType === "application/vnd.ms-excel") && fileExtension === "csv") {
            try {
                dataEntries = yield processCSVFile(csvFile);
                filteredEntries = dataEntries;
                currentPageNumber = 1;
                updateTableDisplay();
                updatePaginationDisplay();
            }
            catch (error) {
                console.error("Error al procesar el archivo CSV:", error);
                alert("Hubo un error al procesar el archivo CSV.");
            }
        }
        else {
            alert("Por favor, suba un archivo CSV válido.");
            csvFileInput.value = '';
        }
    }
});
// Función para manejar la búsqueda en la tabla
const handleDataSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    filteredEntries = dataEntries.filter((entry) => Object.values(entry).some((value) => value.toLowerCase().includes(searchTerm)));
    currentPageNumber = 1;
    updateTableDisplay();
    updatePaginationDisplay();
};
// Event listeners
csvFileInput.addEventListener("change", handleFileUpload);
dataSearchInput.addEventListener('input', handleDataSearch);
