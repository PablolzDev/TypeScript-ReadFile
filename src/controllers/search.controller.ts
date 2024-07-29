// search.controller.js

import { DataEntry } from "../models/csv.model.js";

// Función para filtrar los datos en función del término de búsqueda
export const filterDataBySearchTerm = (dataEntries: DataEntry[], searchTerm: string): DataEntry[] => {
    // Obtener los nombres de las columnas desde la primera entrada
    const columns = Object.keys(dataEntries[0] || {});

    return dataEntries.filter((entry) =>
        columns.some((column) => 
            entry[column] && entry[column].toLowerCase().includes(searchTerm)
        )
    );
};
