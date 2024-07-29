declare const Papa: any;
import { DataEntry } from "../models/csv.model.js";



export const processCSVFile = (csvFile: File): Promise<DataEntry[]> => {
    return new Promise((resolvePromise, rejectPromise) => {
        Papa.parse<DataEntry>(csvFile, {
            header: true,
            skipEmptyLines: true,
            complete: (results: ParseResult<DataEntry>) => {
                resolvePromise(results.data);
            },
            error: (error: Error) => {
                rejectPromise(error);
            },
        } as ParseConfig<DataEntry>);
    });
};