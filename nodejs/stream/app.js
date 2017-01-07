var fs = require('fs');

var random = fs.createReadStream(__dirname + '/random.txt',{encoding: 'utf8',highWaterMark: 32*1024});

var randomWrite = fs.createWriteStream(__dirname + '/randomcopy.txt');

random.on('data',function(chunk){
    console.log(chunk.length);
    randomWrite.write(chunk);
});