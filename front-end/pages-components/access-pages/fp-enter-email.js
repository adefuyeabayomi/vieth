let obj = {
    data : function (){
        return {
            email : "",
            loading : true,
            requestSent:  false,
            sent : false,
        }
    },
    methods  : {
        closeModal : function(){
            this.requestSent = false;
        },
        sendRequest : function(){
            this.requestSent=true;
            this.loading = true;
            setTimeout(()=>{
                this.loading = false;
                this.sent = true;
            }, 2000)
        }
    },
    template : "         <div class=\"password_recovery_page\">            <div class=\"std_header_1\">                <p >Recover Your Password</p>            </div>            <div>                <form>                    <div>                        <p>Please input the email you used to open the account below</p>                        <input v-model=\"email\" type=\"email\" placeholder=\" Email :\">                    </div>                    <div class=\"submit_container\">                        <button v-on:click=\"sendRequest()\">Reset Password</button>                    </div>                </form>            </div>            <div v-if=\"requestSent\" class=\"success-modal modal_bg\">                <div v-if=\"loading\" class=\"modal_container_loading\">                    <div id=\"loading-box\">                        <div class=\"ui active loader\"></div>                    </div>                </div>                <div v-if=\"sent\" class=\"modal_container_info\">                    <div>We have Emailed you a new password, please check your email and login using that password. We advice you to change it using the user setting provided on this site. Thank you</div>                    <div class=\"cta_modal_cont\">                        <button v-on:click=\"closeModal()\">OK, Got that! <span class=\"fas fa-thumbs-up\"></span></button>                    </div>                </div>            </div>        </div>         "
}
export default obj;