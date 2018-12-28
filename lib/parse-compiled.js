"use strict";

var _pdf2json = require("pdf2json");

var _pdf2json2 = _interopRequireDefault(_pdf2json);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pdfParser = new _pdf2json2.default();
pdfParser.on("pdfParser_dataError", function (errData) {
  return console.error(errData.parserError);
});
pdfParser.on("pdfParser_dataReady", function (pdfData) {
  parseToSonglist(pdfData);
});
pdfParser.loadPDF("./1.-P-series-Volume-59-FULL-LIST.pdf");

function parseToSonglist(pdfData) {
  console.log('pdfData', pdfData.formImage.Pages);
}

function writeToFile(parsedPdf) {
  _fs2.default.writeFile("test.csv", parsedPdf, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Song =
/*#__PURE__*/
function () {
  function Song(title, artist, number) {
    _classCallCheck(this, Song);

    this.title = title;
    this.artist = artist;
    this.number = number;
  }

  _createClass(Song, [{
    key: "getValue",
    value: function getValue(key) {
      return this[key];
    }
  }]);

  return Song;
}();
