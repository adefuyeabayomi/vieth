function query(entry,value){
    let query = {};
    query[entry] = value;
    return query;
}
function updateDocument(type,document){
    let updateDoc = {}
    updateDoc[type]=document;
    return updateDoc;
}
function baseFormHandler(req,res,form,callback){ // takes an error argument, request , response, and a dataObject which contains the fields and the files stored.
    // callback(err,request,response,dataobject)
    // where req is an instance of an http request and form is an initialized formidable form instance.
    form.parse(req,(err,fields,files) => {
        if(err){
            callback(err);
            console.log("form handling error passed to callback");
            return false;
        }
        else{
            let dataObject = {fields,files};
            callback(undefined,req,res,dataObject)
            console.log( {fields,files} );
            return true;          
        // this is where all the fun happens.
        }
    })
};
function generateOTPCode(){
    let random = Math.floor(Math.random()*10000);
    return "0" + String(random);
}
function retry (action) {

}
function viethHttpclientRequest (http,url,callback){
    let  request= http.request(url);
    request.on("error",(err)=>{
        callback(err);
    })
    request.on("response",(response) => {
        callback(undefined,response);
    })
 }
// any form handler that is create will draw from the base handler and add extra functionalities at the area where the comment the magic happens here says.
exports.viethHttpclientRequest = viethHttpclientRequest;
exports.query = query ;
exports.updateDocument = updateDocument ;
exports.baseFormHandler = baseFormHandler ;
exports.generateOTPCode = generateOTPCode ;