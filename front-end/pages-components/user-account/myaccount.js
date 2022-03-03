let obj = {
    data : function(){
        return {
            changeEmail : "",
            newPassword : "",
            noPasswordSet: true,
            email : "adefuyeabayomi16@gmail.com",
            userObj: {}
        }
    },
    template : "         <div id=\"account_settings_section\">             <div class=\"std_header_1\">                <p>My Account</p>            </div>            <div>                <p class=\"p_header_std textcenter\">Wallet Balance : <span style=\"font-weight: bold;\">NGN {{userObj.walletBalance}}</span></p>                <div class=\"button_container_std\">                    <button>Fund Wallet <span class=\"fas fa-credit-card\"></span></button>                </div>            </div>            <div class=\"std_header_1\">                <p class=\"left-pad-std\">My Transactions</p>            </div>            <p class=\"w-m-content textcenter\"><a href=\"#transaction_history\" class=\"colorBlueLink\">Click Here To View Transactions History</a></p>            <div class=\"std_header_1\">                <p class=\"left-pad-std\">User Account Settings</p>             </div>            <div class=\"EmailContainer\">                <p class=\"p_header_std textcenter\"><span class=\"fas fa-user-alt\"></span> {{email}}</p>                <p><input class=\"input_std\" v-model=\"changeEmail\" type=\"text\"></p>                <div class=\"button_container_std\">                    <button>Change Email</button>                </div>            </div>            <div class=\"changePasContainer\">                <p v-if=\"noPasswordSet\"></p>                <p class=\"p_header_std textcenter\"><span class=\"fas fa-key\"></span> Change Password</p>                <p><input class=\"input_std\" type=\"text\" v-model=\"newPassword\"></p>                <div class=\"button_container_std\">                    <button class=\"w-m-content\">Change password</button>                </div>            </div>        </div>         "
}
export default obj;