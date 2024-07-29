export const processCSVFile = (csvFile) => {
    return new Promise((resolvePromise, rejectPromise) => {
        Papa.parse(csvFile, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                resolvePromise(results.data);
            },
            error: (error) => {
                rejectPromise(error);
            },
        });
    });
};
