var fs = require('fs');

console.log('Hello World');

console.log('Hello World - ' + process.argv);

fs.readFile('HelloWorld.txt','utf8', function(err, data) {
	
	if(err) 
	{
		return console.log("Error - " + err);
	}
	
	console.log(data);
	
});