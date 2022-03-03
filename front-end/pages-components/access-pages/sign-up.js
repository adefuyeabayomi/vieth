let obj = {
    data : function (){
        return {
            signupemail : "",
            emailOkay : "",
            emailNotCorrectOnBlur : false,
            signuppassword : "",
            confirmpassword: "",
            passwordIncorrectOnSubmit : false,
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
        ValidateEmail(this.signupemail) ? this.emailOkay = true : this.emailOkay = false;
        ValidateEmail(this.signupemail) ? this.emailNotCorrectOnBlur = false : this.emailNotCorrectOnBlur = true;
        },
        validatePassword : function (){
        return this.signuppassword == this.confirmpassword;
        },
        update : function (){
            this.validatePassword() ? this.passwordIncorrectOnSubmit = false: this.passwordIncorrectOnSubmit = true;
        },
        submitSignUp : function (){
            this.update();
            //perform all xmlhttpreqhere
        },
        closeModal : function (){
            this.requestSent=false;
            this.responseRecieved = false;
            this.loading = false;
            this.responseMessage = "";
        }

    },
    template : "         <div id=\"signup_section\">            <div class=\"std_header_1\">                <p>SIGN UP</p>            </div>            <div class=\"container\">                <div class=\"row\">                    <div class=\"f-1\">                        <form id=\"signup-form\">                            <div id=\"signup_manual_form\">                                <input v-on:blur=\"validateEmail()\" v-model=\"signupemail\" type=\"email\" placeholder=\"Email :\"><span v-if=\"emailOkay\" class=\"fas fa-check-circle ux-okay floatRight\"></span>                                <div v-if=\"emailNotCorrectOnBlur\" class=\"ux-text ux-notOkay text-center\">Please input a valid email</div>                                <input v-on:blur=\"update()\" v-model=\"signuppassword\" type=\"password\" placeholder=\"Set Password :\">                                <input v-on:blur=\"update()\" v-model=\"confirmpassword\" type=\"password\" placeholder=\"Confirm Password :\">                                <div  v-if=\"passwordIncorrectOnSubmit\" class=\"ux-text ux-notOkay text-center\">Please Check the password inputs again and make sure they match</div>                            </div>                            <div class=\"submit_container\">                                <button v-on:click=\"submitSignUp()\">Sign Up</button>                            </div>                        </form>                    </div>                    <div class=\"social_login_divider\"></div>                    <div class=\"f-1\">                        <div id=\"social_login_box\">                            <div id=\"gmail_login\">                                <p><span class=\"fab fa-google\"></span> Sign Up with Gmail</p>                            </div>                            <div id=\"facebook_login\">                                <p><span class=\"fab fa-facebook-square\"></span> Sign Up with facebook</p>                            </div>                            <div id=\"twitter_login\">                                <p><span class=\"fab fa-twitter-square\"></span> Sign Up with twitter</p>                            </div>                        </div>                    </div>                                   </div>                <div id=\"util_access_links\">                    <p>Already have an account? <a class=\"login_util_link\" href=\"#login\">Login Here!</a></p>                    <p>Forgot your password? <span class=\"recover_link_text\"><a class=\"sign_up_util_link\" href=\"#fp\">Recover it here.</a></span></p>                </div>            </div>            <div v-if=\"requestSent\" class=\"success-modal modal_bg\">                <div v-if=\"loading\" class=\"modal_container_loading\">                    <div id=\"loading-box\">                        <div class=\"ui active loader\"></div>                    </div>                </div>                <div v-if=\"responseRecieved\" class=\"modal_container_info\">                    <div>ResponseMessage</div>                    <div class=\"cta_modal_cont\">                        <button v-on:click=\"closeModal()\">OK, Got that! <span class=\"fas fa-thumbs-up\"></span></button>                    </div>                </div>        </div>  </div>       "
}
export default obj;