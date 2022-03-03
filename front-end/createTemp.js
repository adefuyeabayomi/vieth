let args = process.argv;
let fs = require("fs");
let filePath  = args[2];
let fileName = args[3];
function convertToOneLiner( text ){
	let newStr = "";
	for (let each of text){
		each == "\"" ? each = "\\\"" : true;
		if(each !== "\n" && each !== "\r" && each !=="\t"){
			newStr+=each;
		}
	}
	newStr = newStr.split("<!--main-->")[1];
	return newStr;
}
fs.readFile("temp.js", (err,data)=>{
    if(err){
        console.log("an error occured 1");
    }
    else{
        let finalArray = [];
        let initData = data.toString();
        let splited = initData.split("xxx");
        console.log(splited)
        console.log(filePath+fileName);
        fs.readFile(filePath + fileName + ".html", (err,data)=>{
            if(err){
                console.log("an error occured 2");
            }
            else{
                let extracted = convertToOneLiner(data.toString());
                finalArray.push(splited[0]);
                finalArray.push(extracted);
                finalArray.push(splited[2]);
                let generatedFileContent = finalArray.join("");
                fs.writeFile(filePath + fileName + ".js", generatedFileContent , err => {
                    if(err){
                       console.log( "an error occured 3") 
                    }
                })
            }
        })
    }
})