"use strict";

var _pdfParse = require("pdf-parse");

var _pdfParse2 = _interopRequireDefault(_pdfParse);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataBuffer = _fs2.default.readFileSync('./1.-P-series-Volume-59-FULL-LIST.pdf');

(0, _pdfParse2.default)(dataBuffer).then(function (data) {
  var parsedPdf = data.text.split('\n');
  var shortArr = parsedPdf.slice(0, 20);
  var song = new Song('Let Me Love You', 'Mario', 12141);
  console.log(song); // shortArr
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
