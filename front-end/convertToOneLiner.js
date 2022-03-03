const fs = require("fs");
let args = process.argv;
let file = args[2];
function convertToOneLiner( text ){
	let newStr = "";
	for (let each of text){
		each == "\"" ? each = "'" : true;
		if(each !== "\n" && each !== "\r" && each !=="\t"){
			newStr+=each;
		}
	}
	newStr = newStr.split("<!--main-->")[1];
	return newStr;
}
fs.readFile(file,(err,data)=>{
	if(err){
		console.log('error');
	}
	else{
		let newFile = file.split(".")[0] + 'OneLiner.html';
		
		fs.writeFile(newFile,convertToOneLiner(data.toString()),(err)=>{
			if(err){
				console.log("an error occured while saving file");
			}
		});
	}
});