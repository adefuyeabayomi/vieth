const http = require("http");
const fileSystem = require("fs");
const static = require("node-static");
const Formidable = require("formidable");
const dotenv = require("dotenv").config();
const viethAPIs = require("./api");
const Handler = require("./database-handler");
const nodemailer = require("nodemailer");
const staticFileServer = new static.Server ( "front-end" , { cache : 0 } );
const form = new Formidable({multiple: true});
const viethDBHandler = new Handler(process.env.databasename,process.env.databaseurl); 
const port = process.env.PORT;
const host = "0.0.0.0";
const successful = "successful";
const failed = "failed";

const server = http.createServer((request,response) => {
    let url = new URL(request.url,"http://vieth.online/");
    const searchParams = url.searchParams;
    let type = searchParams.get("type");
    let readQuery = searchParams.get("readQuery");
    let readCollection = searchParams.get("readCollection");
    let writeAction = searchParams.get("writeAction");
    let writeActionDocument = searchParams.get("writeActionDocument");
    let updateType = searchParams.get("updateType");
    let updateDocument = searchParams.get("updateDocument");
    let verificationType = searchParams.get("verificationType");
    let verifyDocument = searchParams.get("verifyDocument");
    let transactionType = searchParams.get("transactionType");
    // extract url parameters here
    // serve file 
    request.addListener("end",()=>{
        if( request.url == "/" ){
            staticFileServer.serveFile("index.html",200,{},request,response);
        }
        else if(request.url.indexOf("api") == -1 ){
            staticFileServer.serve(request,response);
        }
        else if(request.url.indexOf("api" !== -1)){
            response.writeHead(200,"ok");
            if(type == "read"){
                // get user data - collection , transaction history - collection, feedback - collection
                viethDBHandler.read(readCollection,readQuery).then(data => {
                    response.end(data);
                })
                .catch((err)=>{
                    console.error(err.message);
                    response.end(failed);
                });
            }
            else if(type == "write"){
                // write are sign up , change account settings , save customers feedback etc,forgot passoword reset
                response.writeHead(200,"ok");
                let transactionCol = "transactions",
                userCol = "users",
                feedbackCol = "feedbacks", 
                pendingUsersCollection = "pendingUsersCollection",
                passwordResetCollection = "forgotPasswordCollection";
                if( writeAction == "newSignUpRequest" ){
                    let otp = viethAPIs.generateOTPCode();
                    writeActionDocument.otp = otp;
                    viethDBHandler.addEntry(pendingUsersCollection,writeActionDocument)
                    .then((result)=>{
                        console.log(result);
                        response.end(otp);
                    })
                    .catch((err)=>{
                        console.error(err.message);
                        response.end(failed);
                    })
                }
                else if( writeAction == "signUpUser"){
                    let query = writeActionDocument;
                    let userEmail;
                    viethDBHandler.read(pendingUsersCollection,query)
                    .then((data)=>{
                        userEmail = data.email;
                        data.walletBalance = 0;
                        viethDBHandler.addEntry(userCol,data)
                        .then(()=>{
                            viethDBHandler.addEntry(transactionCol,{email : userEmail}).then(()=>{
                                console.log("opened users transaction history");
                            })
                            .catch(()=>{
                                response.end("successful-unableToOpenTransactionHistory")
                                console.log("could not initialize user transaction history");
                            })
                            response.end(successful)
                        })
                        .catch(()=>{
                            console.log()
                        })
                    })
                    .catch(()=>{
                        console.log("could not read data from pending users collection");
                        response.end(failed);
                    })
                }
                else if(writeAction == "openTransactionHistory"){
                    viethDBHandler.addEntry(transactionCol,writeActionDocument).then(()=>{
                        response.end(successful)
                    })
                    .catch(()=>{
                        console.log("transaction req : could not initialize user transaction history")
                        response.end(failed);
                    })
                }
                else if(writeAction == "forgotPasswordRequest"){
                    let otp = viethAPIs.generateOTPCode();
                    writeActionDocument["otp"] = otp;
                    viethDBHandler.addEntry(passwordResetCollection,writeActionDocument)
                    .then(()=>{
                        response.end(otp);
                        //send mail
                    })
                    .catch(()=>{
                        response.end(failed);
                    })
                }
                else if(writeAction == "addFeedBack"){
                    viethDBHandler.addEntry(feedbackCol,writeActionDocument)
                    .then(()=>{
                        response.end(successful);
                    })
                    .catch(()=>{
                        response.end("failed");
                    })
                }
                //handle changing user account info settings here
                if(writeAction == "changeAccountInfo"){
                    viethDBHandler.update(userCol,writeActionDocument,viethAPIs.updateDocument(updateType,updateDocument))
                    .then(()=>{
                        response.end(successful);
                    })
                    .catch(()=>{
                        response.end(failed);
                    })
                }
            }
            else if(type == "verification"){
                // verify payment made by customers , sign up verification with otp to the email , forgot password otp verification
                if(verificationType == "verifyPayment"){
                    let verifyURL;
                    viethAPIs.viethHttpclientRequest(http,verifyURL,(err,res)=>{
                        if(err){
                            console.error(err.message);
                            response.end(failed);
                        }
                        else{
                            // depending on the result, the response will be either failed or successful
                            
                        }
                    })
                }
                else if(verificationType == "verifyPasswordResetOTP"){
                    viethDBHandler.read(passwordResetCollection,verifyDocument)
                    .then((result)=>{
                        if(!result.otp){
                            response.end("wrong otp");
                        }
                        else{
                            response.end("right otp");
                        }
                    })
                    .catch(()=>{
                        response.end("error")
                    })
                }
            }
            else if(type = "transaction"){ /*

                let requestURL = `https://domain.com/${}${}${}${}`;

                // for every transaction there is the client request, our viethClientRequest which is used to perform the transaction. 
                // then updatethe client data i.e transctions, wallet balance while reporting the success to the client

                if(transactionType == "dataPurchase"){
                    requestURL = `https://domain.com/${}${}${}${}`;
                }
                else if(transactionType == "airtimePurchase"){
                    requestURL = `https://domain.com/${}${}${}${}`;
                }
                else if(transactionType == "electricityBills"){
                    requestURL = `https://domain.com/${}${}${}${}`;
                }
                else if(transactionType == "tvSubscription"){
                    requestURL = `https://domain.com/${}${}${}${}`;
                }
                else{
                    response.end("unknown request");
                }
                // fund wallet transaction is only possible if user saved card details, a feature which will be available in the future version.
                // transaction : buying data, airtime, paying bills, funding wallet ,
            */}
            else{
            }
        }
        else{
            response.writeHead(200,"ok","unknown request");
        }
    }).resume();
})

server.listen(port,host,()=>{
    console.log("server running on", host+port);
})