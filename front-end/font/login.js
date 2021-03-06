let obj = {
    /*m*/
       data : function(){
        return {
            email : "",
            emailOkay : false,
            emailNotCorrectOnBlur: false,
            password : "",
            passwordNotEmptyOnBlur: false,
            passwordEmptyOnSubmit: false, 
            requestSent: false,
            responseRecieved: false,
            loading: false,
            responseMessage:""    
        }
    },
    methods: {
        validateEmail : function (){ 
            function ValidateEmail(mail) 
        {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
            {
            return (true)
            }
            return (false)
        }
        ValidateEmail(this.email) ? this.emailOkay = true : this.emailOkay = false;
        ValidateEmail(this.email) ? this.emailNotCorrectOnBlur = false : this.emailNotCorrectOnBlur = true;
        },
        validatePassword : function (){
            this.password !=="" ? this.passwordNotEmptyOnBlur = true : this.passwordNotEmptyOnBlur = false;
            this.password !=="" ? this.passwordEmptyOnSubmit = false : this.passwordEmptyOnSubmit = false;
        },
        submitLogin : function (){
            if(this.password == ""){
                this.passwordEmptyOnSubmit = true;
            }
            else{
                // perform xmlhttprequest here
            }
        },
        closeModal : function (){
            this.requestSent=false;
            this.responseRecieved = false;
            this.loading = false;
            this.responseMessage = "";
        }

    }, 
    /*m*/
    template : "         <div id=\"login_section\">            <div class=\"std_header_1\">                <p>LOGIN</p>            </div>            <div class=\"container\">                 <div class=\"row\">                    <div class=\"f-1\">                        <form>                            <div id=\"login_manual_form\">                                <input v-on:blur=\"validateEmail()\" v-model=\"email\" placeholder=\"Your Email\" type=\"email\"> <span v-if=\"emailOkay\" class=\"fas fa-check-circle ux-okay floatRight\"></span>                                 <div v-if=\"emailNotCorrectOnBlur\" class=\"ux-text ux-notOkay text-center\">Please input a valid email</div>                                <input v-on:blur=\"validatePassword()\" v-model=\"password\" placeholder=\"Password\" type=\"password\"><span v-if=\"passwordNotEmptyOnBlur\" class=\"fas fa-check-circle ux-okay floatRight\"></span>                                <div v-if=\"passwordEmptyOnSubmit\" class=\"ux-text ux-notOkay  text-center\">Password Space Cannot Be Empty, please input your password</div>                            </div>                            <div class=\"submit_container\">                                <button v-on:click=\"submitLogin()\">Login</button>                            </div>                        </form>                    </div>                    <div class=\"social_login_divider\"></div>                    <div class=\"f-1\">                        <div id=\"social_login_box\">                            <!--<div class=\"hidden\" id=\"gmail_login\">                                <p><span class=\"fab fa-google\"></span> Login with Gmail</p>                            </div>-->                             <div id=\"myGoogleLogin\"></div>                            <div class=\"h-10px\"></div>                            <div id=\"facebook_login\">                                <p><span class=\"fab fa-facebook-square colorBlue\"></span> Login with facebook</p>                            </div>                             <!--<div class=\"fb-login-button\" data-size=\"large\" data-button-type=\"continue with\" data-layout=\"default\" data-auto-logout-link=\"false\" data-use-continue-as=\"false\"></div>                                                       <div  class=\"hidden\"  id=\"twitter_login\">                                <p><span class=\"fab fa-twitter-square\"></span> Login with twitter</p>                            </div>                           -->                        </div>                    </div>                </div>                <div id=\"util_access_links\">                    <p>Don't have an account? <a class=\"sign_up_util_link\" href=\"#signup\">Sign Up Now!</a></p>                    <p>Forgot your password? <span class=\"recover_link_text\"><a class=\"sign_up_util_link\" href=\"#fp\">Recover it here.</a></span></p>                </div>                <div v-if=\"requestSent\" class=\"success-modal modal_bg\">                    <div v-if=\"loading\" class=\"modal_container_loading\">                        <div id=\"loading-box\">                            <div class=\"ui active loader\"></div>                        </div>                    </div>                    <div v-if=\"responseRecieved\" class=\"modal_container_info\">                        <div>ResponseMessage</div>                        <div class=\"cta_modal_cont\">                            <button v-on:click=\"closeModal()\">OK, Got that! <span class=\"fas fa-thumbs-up\"></span></button>                        </div>                    </div>                </div>                <script>                    function onSuccess(googleUser){                        console.log(\"logged in as \" + googleUser.getBasicProfile().getName());                        app.loginDetails = googleUser.getBasicProfile();                        app.loginType = \"gmail\";                        app.userEmail = googleUser.getBasicProfile().getEmail();                        app.navState.loggedIn = true;                    }                    function onError(err){                        console.error(err);                    }                    function renderButton(){                        gapi.signin2.render(\"myGoogleLogin\",{                            scope : \"profile email\",                            width: 280,                            height: 50,                            longtitle: true,                            theme: light,                            onsuccess: onSuccess,                            onerror : onError                        })                    }                </script>                <script>                    function checkLoginStatus(){                        FB.getLoginStatus(function (response){                            if(response.status == \"connected\"){                                app.loginType = \"facebook\";                                 app.userEmail = response.email;                                app.navState.loggedIn = true;                            }                        });                    }                    function fbLogin(){                        FB.login(function (response){                            if(response.status == \"connected\"){                                app.loginType = \"facebook\";                                 app.userEmail = response.email;                                app.navState.loggedIn = true;                                }                            else{                                showLoginErrorModal();                            }                        });                    }                    function showLoginErrorModal(){                        document.querySelector('#loginErr').classList.remove(\"hidden\");                    }                    function hideLoginErrModal(){                        document.querySelector(\"#loginErr\").classList.add(\"hidden\");                    }                    // send Account data to the server to add to the database.                    // email,loginType                    //then fetch the user Account DAta from the database.                    function sendDataToServer(){                        let request = new XMLHttpRequest()                        let password = app.password == \"\" ?  \"-\" : app.password;                        let loginType = app.loginType;                        let email = app.userEmail;                        let url = `http://localhost/login?password=true&email=true&loginType=manual`;                        request.open(\"GET\",url);                        request.send();                        // add all the ux for the pending state of the request                    }                </script>            </div>        </div>         "
}
export default obj;