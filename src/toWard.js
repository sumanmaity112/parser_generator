var Parser = require("jison").Parser;
var fs = require("fs");
var convertToWard = require("../lib/src/convertToWord.js");
var converter = require("../lib/src/converter.js");

var grammar = fs.readFileSync("./lib/src/generateParseTree.lex", "utf8");
var parser = new Parser(grammar);

var toWord = function (expressionSrcFile) {
    var expression = fs.readFileSync(expressionSrcFile, "utf8");
    var parseTree = parser.parse(expression);
    return converter(parseTree, convertToWard, "(", ")");
};

console.log(toWord(process.argv[2]));