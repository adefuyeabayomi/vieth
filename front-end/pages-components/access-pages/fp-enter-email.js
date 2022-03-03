let obj = {
    data : function(){
        return {
            email : "",
            notDone : false,
        }
    },
    template : "         <div class='password_recovery_page'>            <div>                <p class='std_header_1'>Recover Your Password</p>            </div>            <div>                <form>                    <div>                        <p>Please input the email you used to open the account below</p>                        <input v-model='email' type='email' placeholder=' Email :'>                    </div>                    <div class='submit_container'>                        <button>Reset Password</button>                    </div>                </form>            </div>            <div v-bind:class='{hidden: notDone}' class='success-modal modal_bg'>                <div class='modal_container'>                    <div>We have Emailed you a new password, please check your email and login using that password. We advice you to change it using the user setting provided on this site. Thank you</div>                    <div class='cta_modal_cont'>                        <button>OK, Got that! <span class='fas fa-thumbs-up'></span></button>                    </div>                </div>            </div>        </div>         "
}
export default obj;