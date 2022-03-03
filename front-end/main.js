import Vue from "./vue/dist/vue.esm.browser.js"; 
import hamburger from "./base-components/hamburger/hamburger.js";
import close from "./base-components/close-button/close-button.js";
import mobileTopBar from "./base-components/mobile-top-bar/mobile-top-bar.js";
import navComp from "./base-components/nav-comp/nav-comp.js";
import mobileNav from "./base-components/mobile-nav/mobile-nav.js";
import desktopSidebarNavigation from "./base-components/desktop-sidebar-nav/desktop-sidebar-nav.js";
import contentArea from "./base-components/content-area/content-area.js";
import bottomSection from "./base-components/bottom-section/bottom-section.js";
import prices from "./other-components/pricing/pricingData.js";


//homepage
import homePage from "./pages-components/homepage/homepage.js";
import pricing from "./other-components/pricing/pricing.js";
import dataProviderSelect from "./other-components/pricing/data-provider-select.js";
import electricityProviderSelect from "./other-components/pricing/electricity-provider-select.js";
import rechargeCardPrintingProviderSelect from "./other-components/pricing/recharge-card-printing-provider-select.js";
import smileSubProviderSelect from "./other-components/pricing/smile-sub-provider-select.js";
import threeColsTable from "./other-components/pricing/three-cols-table.js";
import twoColsTable from "./other-components/pricing/two-cols-table.js";
import tvProviderSelect from "./other-components/pricing/tv-provider-select.js";
//transactions
import buyAirtime from "./pages-components/transactions/buy-airtime.js";
import buyData from "./pages-components/transactions/buy-data.js";
import payForCableTv from "./pages-components/transactions/pay-for-cable-tv.js";
import PayForElectricity from "./pages-components/transactions/pay-for-electricity.js";
import fundWallet from "./pages-components/transactions/fund-wallet.js";
import transactionSuccess from "./pages-components/transactions/transaction-success.js";
import transactionError from "./pages-components/transactions/transaction-error.js";
import buySmileData from "./pages-components/transactions/buy-smile-data.js"
import printRechargeCard from "./pages-components/transactions/print-recharge-card.js";
//transaction-history
import transactionHistory from "./pages-components/transactions/t-his.js";
//access
import login from "./pages-components/access-pages/login.js";
import signup from "./pages-components/access-pages/sign-up.js";
import fp from "./pages-components/access-pages/fp-enter-email.js";
//user-account
import userAccount from "./pages-components/user-account/myaccount.js";
//feedback-chat
import feedBackChat from "./pages-components/feedback-chat/chat-page.js";
//adm-front-end
import admHome from "./pages-components/admin-front-end/adm-home.js";
import admAccess from "./pages-components/admin-front-end/access-adm.js";

Vue.component("hamburger",hamburger);
Vue.component("close-button",close);
Vue.component("mobile-top-bar",mobileTopBar);
Vue.component("nav-comp",navComp);
Vue.component("mobile-nav",mobileNav);
Vue.component("desktop-sidebar-navigation", desktopSidebarNavigation);
Vue.component("content-area",contentArea);
Vue.component("bottom-section", bottomSection);
//homepage
Vue.component("homepage",homePage);
Vue.component("pricing",pricing);
Vue.component("data-provider-select",dataProviderSelect);
Vue.component("electricity-provider-select",electricityProviderSelect);
Vue.component("recharge-card-printing-provider-select", rechargeCardPrintingProviderSelect);
Vue.component("smile-sub-provider-select",smileSubProviderSelect);
Vue.component("three-cols-table",threeColsTable);
Vue.component("two-cols-table",twoColsTable);
Vue.component("tv-provider-select",tvProviderSelect);
//transactions
Vue.component("buy-airtime",buyAirtime);
Vue.component("buy-data",buyData);
Vue.component("pay-for-cable-tv",payForCableTv);
Vue.component("pay-for-electricity",PayForElectricity);
Vue.component("fund-wallet",fundWallet);
Vue.component("buy-smile-data",buySmileData);
Vue.component("print-recharge-card",printRechargeCard);
Vue.component("transaction-success",transactionSuccess);
Vue.component("transaction-error",transactionError);
//transaction history
Vue.component("transaction-history",transactionHistory);
//access pages
Vue.component("login",login);
Vue.component("signup",signup);
Vue.component("fp",fp);
//feedbackChat
Vue.component("feedback-chat",feedBackChat);
//user-account
Vue.component("my-account",userAccount); 
//adm
Vue.component("adm-home", admHome);
Vue.component("adm-access",admAccess);

let app = new Vue({
    el : "#app",
    data : {
        mobileNavOpen : false,
        page : "homepage",
        transactionState : {
            prevTransactionRequestURL : "" ,
            msg : "",
            status : "",
            responseObj : {}

        },
        userEmail: "",
        userPassword : "",
        userLoginType : "",
        walletBalance : "",
        transactionHistory : [],
        navState : {  
            home: true,
            account : false,
            login : false,
            fundwallet : false,
            history : false,
            prices : false,
            feedback : false,
            logged: false,
        },
        hamState : {
            state : "ham",
            tttc : false,
            tmtc : false,
            tbtc : false,
            ttbth : false,
            tmbth : false,
            tbbth : false,
        },
        loginState : {
            requestSent : false,
            responseRecieved : false,
            networkError : false,
            passwordWrong : false,

        },
        signUpState : {

        },
        paymentState : {
            
        }
    },
    methods : {
        updateHamState : function(){
            if(this.hamState.state == "ham"){
                 this.hamState.tttc = true;
                this.hamState.tmtc = true;
                this.hamState.tbtc = true;
                this.hamState.ttbth = false,
                this.hamState.tmbth = false,
                this.hamState.tbbth = false,
                this.hamState.state = "close";
                
            }
            else {
                 this.hamState.tttc = false;
                this.hamState.tmtc = false;
                this.hamState.tbtc = false;
                this.hamState.ttbth = true;
                this.hamState.tmbth = true;
                this.hamState.tbbth = true;     
                this.hamState.state = "ham";
            }
        },
        updateNavState : function (){
                let currentNavState = this.mobileNavOpen;
                this.mobileNavState = !currentNavState;
                console.log('successfully updated the nav state', this.mobileNavState ? "mobile nav is open"  : "mobile nav is closed");
        },
        closeNav : function () {
            this.mobileNavState = false;
            if(this.hamState.state == "close"){
               this.updateHamState();
            }
            
            console.log("closed navigation successfully");
        },
        formatNavState(){
            this.navState.home = false;
            this.navState.account = false;
            this.navState.login = false;
            this.navState.fundwallet = false;
            this.navState.history = false;
            this.navState.prices = false;
            this.navState.feedback = false;
        }
    },
    computed : {
        currentPage: {
            get : function (){
                this.closeNav();
                return this.page;
                },
            set : function (newPage){
                this.page = newPage;
            }
        },
        mobileNavState : {
            get : function(){
                return this.mobileNavOpen;
            }
            ,
            set : function(newValue){
                this.mobileNavOpen = newValue; 
            }
        },
     }
});

window.addEventListener("hashchange",()=>{
    console.log("hash changed, new page is ",window.location.hash.split("#")[1])
    if(app.mobileNavState){
        app.closeNav();
    }
    let page = window.location.hash.split("#")[1];
    if(page == "home" || page =="pricing_section" || page == "customer-care-section"){
        app.currentPage = "homepage";
        if(page=="pricing_section"){
            setTimeout(()=>{
                scrollPricingToView();
                console.log("pricing section scroll To View Fired")
            },200)
        }
        else if(page == "customer-care-section"){
            setTimeout(()=>{
                scrollCustomerAreaToView();
                console.log("customer area scroll To View Fired")
            },200)
        }
    }
    else app.currentPage = page;
    app.formatNavState();
    if ( page !== "customer-care-section" && page !== "home" && page !== "pricing_section"  ){
        setTimeout(()=>{
            scrollPageComponentToTop();
            console.log("Page Component Scrolled to top");
        },200)
    }
    if(page == "home"){
        app.navState.home=true;
    }
    if(page == "pricing_section"){
        app.navState.prices = true;
    }
    if(page == "customer-care-section"){
        app.navState.feedback = true;
    }
    if(page == "login"){
        app.navState.login = true;
    }
    if(page == "fund-wallet"){
        app.navState.fundwallet = true;
    }
    if(page == "transaction-history"){
        app.navState.history = true;
    }
    if(page == "account-settings"){
        app.navState.account = true;
    }

})
function scrollPageComponentToTop(){
    let element =document.getElementById("otherFC");
    element.scrollIntoView(true);
}
function scrollPricingToView(){
    let element = document.getElementById("pricing_section");
    element.scrollIntoView(true);
}
function scrollCustomerAreaToView(){
    let element = document.getElementById("customer-care-section")
    element.scrollIntoView(true);
}

function loginRequest(email,type,password){
    let request = new XMLHttpRequest();
    let url = `http://localhost/login?email=${email}&type=read&loginType="${loginType}"&password=${password}`;
    request.open("GET",url);
    // response is the whole users data.
}