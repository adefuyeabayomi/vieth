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
import fp from "./pages-components/access-pages/fp.js";
//user-account
import userAccount from "./pages-components/user-account/account-settings.js";
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
Vue.component("print-recharge-card",printRechargeCard)
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
Vue.component("account-settings",userAccount); 
//adm
Vue.component("adm-home", admHome);
Vue.component("adm-access",admAccess);

let app = new Vue({
    el : "#app",
    data : {
        mobileNavOpen : false,
        currentPage : "homepage",
        transactionObject : {
            prevTransactionRequestURL : "http://localhost" ,
            msg : "none",
            status : "none",
            responseObj : {lol: "lol"}

        },
        navState : {  
            home: true,
            account : false,
            login : false,
            fundwallet : false,
            history : false,
            prices : false,
            feedback : false,
            logged: false,
        }
        
    },
    methods : {
        respond : function(){
            alert("got-that! viola!")
        },
        changePage : function (value){
            this.curP = value;
        },
        updateNavState : function (){
            if( window.innerWidth < 768 ){
                let currentNavState = this.mobileNavOpen;
                this.mobileNavState = !currentNavState;
                console.log('successfully updated the nav state', this.mobileNavState);
            }
        },
        switchToHome : function (){
            this.updateNavState();
            if(this.currentPage !== "homepage"){
                this.curP = "homepage";
                console.log("switched page to", this.curP);                
            }
        },
        switchToMyAccount : function(){
            this.updateNavState();
            if(this.currentPage !== "account-settings"){
                this.curP = "account-settings";
                console.log("switched page to", this.curP);                
            }
        },
        switchToTransactionHistory : function (){
            this.updateNavState();
            if(this.currentPage !== "transaction-history"){
                this.curP = "transaction-history";
                console.log("switched page to", this.curP);                
            }
        },
        switchToFundWallet : function (){
            this.updateNavState();
            if(this.currentPage !== "fund-wallet"){
                this.curP = "fund-wallet";
                console.log("switched page to", this.curP);                
            }
        },
        switchToLogin : function (){
            this.updateNavState();
            if(this.currentPage !== "login"){
                this.curP = "login";
                console.log("switched page to", this.curP);                
            }
        },
        switchToSignUp : function (){
            if(this.currentPage !== "signup"){
                this.curP = "signup";
                console.log("switched page to", this.curP);                
            }
        },
        switchToFP : function (){
            if(this.currentPage !== "fp"){
                this.curP = "fp";
                console.log("switched page to", this.curP);                
            }
        },
        switchToBuyData : function (){
            if(this.currentPage !== "buy-data"){
                this.curP = "buy-data";
                console.log("switched page to", this.curP);                
            }
        },
        switchToBuyAirtime : function (){
            if(this.currentPage !== "buy-airtime"){
                this.curP = "buy-airtime";
                console.log("switched page to", this.curP);                
            }
        },
        switchToPayForCableTv : function (){
            if(this.currentPage !== "pay-for-cable-tv"){
                this.curP = "pay-for-cable-tv";
                console.log("switched page to", this.curP);                
            }
        },
        switchToPayForElectricity : function (){
            if(this.currentPage !== "pay-for-electricity"){
                this.curP = "pay-for-electricity";
                console.log("switched page to", this.curP);                
            }
        },
        switchToBuySmileData : function (){
            if(this.currentPage !== "buy-smile-data"){
                this.curP = "buy-smile-data";
                console.log("switched page to", this.curP);                
            }
        },
        switchToPrintRechargeCard : function (){
            if(this.currentPage !== "print-recharge-card"){
                this.curP = "print-recharge-card";
                console.log("switched page to", this.curP);                
            }
        },

        switchAdmAccess : function (){
            if(this.currentPage !== "login"){
                this.curP = "login";
                console.log("switched page to", this.curP);                
            }
        },
        switchToAdmHome : function (){
            if(this.currentPage !== "login"){
                this.curP = "login";
                console.log("switched page to", this.curP);                
            }
        },
        switchToTransactionSuccess : function (){
            if(this.currentPage !== "transaction-success"){
                this.curP = "transaction-success";
                console.log("switched page to", this.curP);                
            }
        },
        switchToTransactionError : function (){
            if(this.currentPage !== "transaction-error"){
                this.curP = "transaction-error";
                console.log("switched page to", this.curP);                
            }
        },
        
    },
    computed : {
        curP: {
            get : function (){
                return this.currentPage;
            },
            set : function (newPage){
                this.currentPage = newPage;
            }
        },
        dD : function (){
            return airtimeDis;
        },
        mobileNavState : {
            get : function(){
                return this.mobileNavOpen;
            }
            ,
            set : function(newValue){
                this.mobileNavOpen = newValue; 
            }
        }   
     }
});
function returnpage (){
    let route = String(window.location);
      
    if(window.location == "/"){
      return "homepage";
    }else {
      return route.split("#")[1];  
    } }