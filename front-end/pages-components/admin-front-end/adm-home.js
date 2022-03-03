let obj = {
    data : function(){
        return {
            currPage : "clientViewBox",
            clientData : {},
            clients : [{email : "adefuyeabayomi16@gmail.com"}],
            transactions : [{}],
            totalSignups : 0,
            signupstoday: 0,
            totalTransactions : 0,
            transactionsToday : 0,
            TotalGuests : 0,
            walletBalance : 0,
            chatMsg: "",
            chats :[
                {clientAdm : true,adminAdm : false,message : "good Evening, i want to make an enquiry"},
                {clientAdm : false,adminAdm : true,message : "Ok Ma'm"},
                {clientAdm : false,adminAdm : true,message : "What can i help you with"},
                {clientAdm : true,adminAdm : false,message : "good Evening, i want to make an enquiry"}
            ],
        }
    },
    computed : {
        currentClient : {
            get : function (){
            return this.clientData;
            },
            set : function (newData){
                this.clientData = newData; 
            }
        },
        currentPage : {
            get : function (){
                return this.currPage;
            }
            , set : function (pageName){
                this.currPage = pageName;
            }
        },
        walletBalanceBox : function (){
            return this.currentPage == "walletBalanceBox";
        },
        admChatFeedback : function (){
            return this.currentPage == "admChatFeedback";
        },
        transactionStats : function (){
            return this.currentPage == "transactionStats";
        },
        transactionBox : function (){
            return this.currentPage == "transactionBox";
        },
        clientViewContainer : function (){
            return this.currentPage == "clientViewContainer";
        },
        clientViewBox : function (){
            return this.currentPage == "clientViewBox";
        }

    },
    methods : {
        getClientData(email){
            this.clientData = {
                email : "adefuyeabayomi16@gmail.com",
                "transactions_count" : "4",
                transaction: [
                    {type : "fund wallet",
                    volume : "null",
                    amount : "2000",
                    paymentChannel : "directly"}
                ],
                lastLoggedIn: "2-07-21"
                ,walletBalance : "3569",
            }
        },
        cvb : function (){
            this.currentPage = "clientViewBox";
        },
        cvc : function (){
            this.currentPage = "clientViewContainer";
        },
        acf : function(){
            this.currentPage = "admChatFeedback";
        },
        ts : function (){
            this.currentPage = "transactionStats";
        },
        wbx : function (){
            this.currentPage ="walletBalanceBox";
        },
        tb : function () {
            this.currentPage = "transactionBox";
        }
        

    },
    template : "         <!--view clients box + chat-->        <!-- top tab links-->        <div class='adm_home_section'>            <div class='container'>                <div class='row'>                    <div v-bind:class='{active : clientViewBox}' v-on:click='cvb()' class='w-m-content'>Client Section</div> <!--done-->                    <div v-bind:class='{active : clientViewContainer}' v-on:click='cvc()' class='w-m-content'>View Current Client</div> <!--done-->                    <div v-bind:class='{active : admChatFeedback}' v-on:click='acf()' class='w-m-content'>Chat Section</div> <!--done-->                    <div v-bind:class='{active : transactionStats}' v-on:click='ts()' class='w-m-content'>Statistics Section</div> <!--done-->                    <div v-bind:class='{active : walletBalanceBox}' v-on:click='wbx()' class='w-m-content'>Wallet Balance</div><!--done-->                    <div v-bind:class='{active : transactionBox}' v-on:click='tb()' class='w-m-content'>Transactions {dateOfPreviousDay}</div> <!--done-->                </div>            </div>            <div v-if='clientViewBox' class='animate__animated animate__fadeIn' id='client_view_box'>                <div v-for='client in clients'>                    <p>Email : {{ client.email }}</p>                    <div class='view_client_button'>                        <button v-bind:id='client.email' v-on:click='getClientData(client.email)'>View This Client</button>                    </div>                </div>            </div>            <div v-if='clientViewContainer' class='container animate__animated animate__fadeIn' id='clientViewContainer'>                <p>Client Details</p>                <p>Email : {{clientData.email}}</p>                <p>transactions history count: {{clientData.transactions_count}}</p>                <p v-for='transaction in clientData.transactions'>                    type : {{transaction.type}} <br>                    volume : {{transaction.volume}} <br>                    amount/price : NGN {{transaction.amount}} <br>                    paymentChannel : {{transaction.paymentChannel}}                </p>                <p>Last Logged in : {{clientData.lastLoggedIn}}</p>                <p>Wallet Balance : NGN {{clientData.walletBalance}}</p>            </div>                <!--recent transactions-->            <div v-if='transactionBox' class='animate__animated animate__fadeIn'  id='transaction_box'>                <div>                    <div class='transaction_container' v-for='transaction in transactions'>                        <div>                            <p>SN : {{transaction.sn}}</p>                            <p>Type : {{transaction.type}}</p>                            <p>Date : {{transaction.date}}</p>                            <p>Time : {{transaction.time}}</p>                            <p>Payment Channel : {{transaction.paymentChannel}}</p>                            <p>Amount : {{transaction.amount}}</p>                            <p>Status : {{transaction.status}}</p>                        </div>                    </div>                </div>            </div>            <!--statistics box{{sales,logins,signups,guests with cta leads}}-->            <div v-if='transactionStats' class='animate__animated animate__fadeIn' id='transaction_stats'>                <div>                    <p class='sdt_header_1'>Total Signups</p>                    <p>{{totalSignups}}</p>                </div>                <div>                    <p class='sdt_header_1'>Total Signups Today</p>                    <p>{{signupstoday}}</p>                </div>                <div>                    <p class='sdt_header_1'>Total Transactions</p>                    <p>{{totalTransactions}}</p>                </div>                <div>                    <p class='sdt_header_1'>Transactions Completed Today</p>                    <p>{{transactionsToday}}</p>                </div>                <div>                    <p class='sdt_header_1'>Total Guests</p>                    <p>{{TotalGuests}}</p>                </div>            </div>            <!--wallet balance-->            <div v-if='walletBalanceBox' class='animate__animated animate__fadeIn' id='wallet-balance-box'>                <p class='sdt_header_1'>Wallet balance</p>                <p> NGN {{walletBalance}} </p>            </div>            <div v-if='admChatFeedback' class='animate__animated animate__fadeIn'  id='adm_chat_feedback'>                <div>                    <div class='chats'>                        <div v-for='chat in chats'>                            <p v-bind:class='{clientAdm : chat.client,adminAdm : chat.admin }'>{{chat.message}}</p>                        </div>                    </div>                    <div>                        <span><input v-model='chatMsg' type='text'></span><span><span class='fas fa-send'></span> Send</span>                    </div>                </div>            </div>        </div>         "
}
export default obj;