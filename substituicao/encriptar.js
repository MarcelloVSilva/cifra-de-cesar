var encrypt = require('./encrypt');

var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, "file.txt");

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,texto){
    if (!err) 
     var encryptedText = encrypt(texto);
     console.log(encryptedText);
});
