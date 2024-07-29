import * as Papa from 'papaparse';
import { DataEntry } from "../models/csv.model";

// Función para analizar el archivo CSV y retornar los datos como una promesa
export const processCSVFile = (csvFile: File): Promise<DataEntry[]> => {
    return new Promise((resolvePromise, rejectPromise) => {
        Papa.parse(csvFile, {
            header: true, // Considera la primera fila como encabezados
            skipEmptyLines: true, // Ignora las líneas en blanco
            complete: (parseResults) => {
                resolvePromise(parseResults.data as DataEntry[]); // Resuelve la promesa con los datos analizados
            },
            error: (parseError) => {
                rejectPromise(parseError); // Rechaza la promesa si ocurre un error
            },
        });
    });
};