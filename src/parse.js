import pdf from 'pdf-parse';
import fs from 'fs';

const dataBuffer = fs.readFileSync('./1.-P-series-Volume-59-FULL-LIST.pdf');

pdf(dataBuffer).then(function (data) {
  const parsedPdf = data.text.split('\n');
  const shortArr = parsedPdf.slice(0, 20);
  const song = new Song('Let Me Love You', 'Mario', 12141);
  console.log(song);
  // shortArr
  //   .filter((slot) => {
  //     console.log('slot', `"${slot}"`);
  //     console.log('length', slot.length);
  //     console.log('-------------');
  //     return slot.trim() !== '';
  //   })
  //   .slice(5)
  //   .map((slot) => {
  //     console.log('slot', slot);
  //   });
});

function writeToFile(parsedPdf) {
  fs.writeFile("test.csv", parsedPdf, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  }); 
}