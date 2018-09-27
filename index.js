const fs = require('fs');
var parser = require('xml2json');
const inputFile = './input.xml'
const outputFile = 'result.csv'

fs.readFile(inputFile, function(err, data) {
    var json = JSON.parse(parser.toJson(data));
    var list = json['test-suite']['test-case'];
    var out = '';
    for(var x=0;x<list.length;++x){
        var obj = list[x];
        out+=obj.class+","+obj.description+"\n";
    }
    
let writeStream = fs.createWriteStream(outputFile);
writeStream.write(out, 'UTF-8');
writeStream.on('finish', () => {  
    console.log('wrote all data to file');
});
writeStream.end();  
 });