var fs = require('fs');
var color = require('colors');

fs.readdir('./','utf-8', function(err, data){
    if (err) throw err;
    console.log('Zawartość katalogu:'.rainbow)
    console.log(data);
    fs.writeFile('./new.txt','\n' + data, function(err){
      if (err) throw err;
      console.log('Zapisano!'.blue);
    });
});
