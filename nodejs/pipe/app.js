var fs = require('fs');

var zlib = require('zlib');

var random = fs.createReadStream(__dirname + '/random.txt');

var randomWrite = fs.createWriteStream(__dirname + '/randomcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/random.txt.gz');

var gzip = zlib.createGzip();

random.pipe(randomWrite);
random.pipe(gzip).pipe(compressed);