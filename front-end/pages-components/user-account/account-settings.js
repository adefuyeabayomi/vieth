let obj = {
    data : function(){
        return {
            changeEmail : "",
            newPassword : "",
            noPasswordSet: true,
            email : "adefuyeabayomi16@gmail.com"
        }
    },
    template : "         <div id='account_settings_section'>   <div><p>User Account Settings</p> </div>         <div class='EmailContainer'>                <p><span class='fas fa-account'></span> {{email}}</p>                <p>Change Email : <input v-model='changeEmail' type='text'></p>                <div class='submit_container'>                    <button>Change Email</button>                </div>            </div>            <div class='changePasContainer'>                <p v-if='noPasswordSet'></p>                <p><span class='fas fa-key'></span> Password</p>                <p>Change Password : <input type='text' v-model='newPassword'></p>                <div class='submit_container'>                    <button>Change password</button>                </div>            </div>        </div>         "
}
export default obj;