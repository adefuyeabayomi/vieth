let obj = {
    props:["home","account","login","fundwallet","history","prices","feedback","logged"],
    computed : {
        homeActive : function (){
            return this.home;
        },
        accountActive : function (){
            return this.account;
        },
        loginOrSignUpActive : function (){
            return this.login;
        },
        fundWalletActive : function (){
            return this.fundwallet;
        },
        transactionHistoryActive : function (){
            return this.history;
        },
        loggedIn : function (){
            return this.logged;
        },
        pricesActive : function (){
            return this.prices;
        },
        feedbackActive : function(){
            return this.feedback;
        }
    },
    methods : {
        isHome : function (){
            if(window.location.hash == "#home"){
                this.$emit("close-nav");
                this.$emit("update-ham-state");
            }
        },
        isAccount : function (){
            if(window.location.hash == "#account-settings"){
                this.$emit("close-nav");
                this.$emit("update-ham-state");
            }
        },
        isLogin : function (){
            if(window.location.hash == "#login"){
                this.$emit("close-nav");
                this.$emit("update-ham-state");
            }
        },
        isFundWallet: function (){
            if(window.location.hash == "#fund-wallet"){
                this.$emit("close-nav");
                this.$emit("update-ham-state");
            }
        },
        isTransaction: function (){
            if(window.location.hash == "#transaction-history"){
                this.$emit("close-nav");
                this.$emit("update-ham-state");
            }
        },
        IsPrices: function (){
            if(window.location.hash == "#pricing_section"){
                this.$emit("close-nav");
                this.$emit("update-ham-state");
            }
        },
        isFeedback: function (){
            if(window.location.hash == "#customer-care-section"){
                this.$emit("close-nav");
                this.$emit("update-ham-state");
            }
        }
    },
    template : "         <nav>             <div>                <div class=\"nav_list_container\">                    <ul>                        <p id=\"navigation_header\">EXPLORE</p>                        <li v-on:click=\"isHome()\" v-bind:class=\"{active : homeActive}\" class=\"w-12 nav-items\"><a href=\"#home\"><span class=\"fas fa-home\"></span>Home</a></li>                        <li v-on:click=\"isAccount()\" v-bind:class=\"{active : accountActive}\" class=\"w-12 nav-items\" v-if=\"loggedIn\"><a href=\"#account-settings\"><span class=\"fas fa-user-alt\"></span>My Account</a></li>                        <li v-on:click=\"isLogin()\" v-bind:class=\"{active : loginOrSignUpActive}\" class=\"w-12 nav-items\" v-if=\"!loggedIn\"><a href=\"#login\"><span class=\"fas fa-plus-circle\"></span>Login / Sign Up</a></li>                        <li v-on:click=\"isFundWallet()\" v-bind:class=\"{active : fundWalletActive}\" class=\"w-12 nav-items\"><a href=\"#fund-wallet\"><span class=\"fas fa-credit-card\"></span> <span class=\"fab fa-cc-stripe\" id=\"ico-stripe\"></span> <span class=\"fab fa-cc-visa\" id=\"ico-visa\"> </span><span class=\"fab fa-cc-amazon-pay\" id=\"ico-amazon-pay\"></span> <span class=\"fas cc-amazon-pay\"></span> Fund Wallet</a></li>                        <li v-on:click=\"isTransaction()\" v-bind:class=\"{active : transactionHistoryActive}\" class=\"w-12 nav-items\"><a href=\"#transaction-history\"><span class=\"fas fa-align-justify\"></span>My Transaction History</a></li>                        <li v-on:click=\"isPrices()\" v-bind:class=\"{active : pricesActive}\" class=\"w-12 nav-items\"><a href=\"#pricing_section\"><span class=\"fas fa-dollar-sign\"></span>Prices</a></li>                        <li v-on:click=\"isFeedback()\" v-bind:class=\"{active : feedbackActive}\" class=\"w-12 nav-items\"><a href=\"#customer-care-section\"><span class=\"fas fa-envelope-square\"></span>Send a Feedback / Complaint</a></li>                    </ul>                </div>                <div class=\"about_container\">                    <p id=\"about_header\">ABOUT US</p>                    <p class=\"about_text\">Vieth Data and Bills Aims to bring you a fast and easy way to buy data and pay your bills and perform other transactions easily with amazing discounts to all our customers</p>                    <p class=\"about_text\">Please use the feedback/complaint page to get your messages across to us and we will respond to them soonest. Or call us on <a href=\"tel://08136243796\"><span class=\"fas fa-phone-alt\"></span> 08136243796</a> , or reach us on whatsapp via <a href=\"https://wa.me/+2348136243796\"><span class=\"fas fa-whatsapp\"></span>https://wa.me/+234813624379</a></p>                 </div>            </div>        </nav>         "
}
export default obj;