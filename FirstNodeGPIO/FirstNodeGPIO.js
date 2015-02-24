var fs = require('fs');

//simple console log
console.log("Hello World");

//explore cmd-line args
console.log("Hello World - " + process.argv);

//read file
fs.readFile("HelloWorld.txt", "utf8", function(err, data) {
	
	if(err) 
	{
		return console.log("Error - " + err);
	}
	
	console.log(data);
	
});

//look at a folder
fs.readdir('/etc', function(err, list){
	
	if(err)
	{
		return console.log("Error - " + err);
	}
	
	list.forEach(function(item){
		console.log(item);
	});
	
});