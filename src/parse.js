import PDFParser from 'pdf2json';
import fs from 'fs';
import { parse } from 'path';

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
  parseToSonglist(pdfData);
});

pdfParser.loadPDF("./1.-P-series-Volume-59-FULL-LIST.pdf");

function parseToSonglist(pdfData) {
  console.log('pdfData', pdfData.formImage.Pages);
}

function writeToFile(parsedPdf) {
  fs.writeFile("test.csv", parsedPdf, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  }); 
}