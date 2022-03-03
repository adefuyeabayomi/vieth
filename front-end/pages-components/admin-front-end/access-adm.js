let obj = {
    data : function (){
        return {
            emailVerified : false,
            email : "",
            otp  :"",
        }
    },
    methods: {
        authenticate(){
            if(this.emailVerified){
                //send otp,
            }
        }
    },
    template : "         <div class=\"std_header_1\">             <p>Admin Login</p>            <div v-if=\"!emailVerified\" class=\"left-pad-std\">                <p>Email</p>                <input class=\"input_std\" v-model=\"email\" type=\"email\">                <div class=\"button_container_std\">                    <button v-on:click=\"authenticate()\" class=\"adm-login\">Proceed <span class=\"fas fa-arrow-right\"></span></button>                </div>            </div>            <div v-if=\"emailVerified\" class=\"left-pad-std\">                <p class=\"p_header_std\">Enter OTP</p>                <input class=\"input_std\" v-model=\"otp\" type=\"number\">                <div class=\"button_container_std\">                    <button v-on:click=\"authenticate()\" class=\"adm-login\">Proceed <span class=\"fas fa-arrow-right\"></span></button>                </div>            </div>                               </div>         "
}
export default obj;