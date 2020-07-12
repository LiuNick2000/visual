import Papa from 'papaparse';

export function fetchCsvData() {
    return fetch('./cut.csv')
      .then(res => res.text())
      .then(res => Papa.parse(res, {header: true}).data)
      .catch(e => console.error(e));
}
