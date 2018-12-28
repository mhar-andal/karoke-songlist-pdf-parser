"use strict";

var _pdfParse = _interopRequireDefault(require("pdf-parse"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataBuffer = _fs.default.readFileSync('./1.-P-series-Volume-59-FULL-LIST.pdf');

(0, _pdfParse.default)(dataBuffer).then(function (data) {
  var parsedPdf = data.text.split('\n');
  var shortArr = parsedPdf.slice(0, 20);
  shortArr.filter(function (slot) {
    console.log('slot', "\"".concat(slot, "\""));
    console.log('length', slot.length);
    console.log('-------------');
    return slot.trim() !== '';
  }).slice(5).map(function (slot) {
    console.log('slot', slot);
  });
});

function writeToFile(parsedPdf) {
  _fs.default.writeFile("test.txt", parsedPdf, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}
