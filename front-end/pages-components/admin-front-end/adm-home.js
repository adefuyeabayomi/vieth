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
    template : "         <!--view clients box + chat-->        <!-- top tab links-->        <div class=\"adm_home_section\">            <div class=\"container\">                 <div class=\"row\">                    <div v-bind:class=\"{active : clientViewBox}\" v-on:click=\"cvb()\" class=\"w-m-content\">Client Section</div> <!--done-->                    <div v-bind:class=\"{active : clientViewContainer}\" v-on:click=\"cvc()\" class=\"w-m-content\">View Current Client</div> <!--done-->                    <div v-bind:class=\"{active : admChatFeedback}\" v-on:click=\"acf()\" class=\"w-m-content\">Chat Section</div> <!--done-->                    <div v-bind:class=\"{active : transactionStats}\" v-on:click=\"ts()\" class=\"w-m-content\">Statistics Section</div> <!--done-->                    <div v-bind:class=\"{active : walletBalanceBox}\" v-on:click=\"wbx()\" class=\"w-m-content\">Wallet Balance</div><!--done-->                    <div v-bind:class=\"{active : transactionBox}\" v-on:click=\"tb()\" class=\"w-m-content\">Transactions {dateOfPreviousDay}</div> <!--done-->                </div>            </div>            <div v-if=\"clientViewBox\" class=\"animate__animated animate__fadeIn\" id=\"client_view_box\">                <div v-for=\"client in clients\">                    <p  class=\"p_header_std\">Email : {{ client.email }}</p>                    <div class=\"button_container_std\">                        <button v-bind:id=\"client.email\" v-on:click=\"getClientData(client.email)\">View This Client</button>                    </div>                </div>            </div>            <div v-if=\"clientViewContainer\" class=\"container animate__animated animate__fadeIn\" id=\"clientViewContainer\">                <p class=\"p_header_std\">Client Details</p>                <p class=\"p_header_std\">Email : {{clientData.email}}</p>                <p class=\"p_header_std\">transactions history count: {{clientData.transactions_count}}</p>                <p class=\"p_header_std\" v-for=\"transaction in clientData.transactions\">                    type : {{transaction.type}} <br>                    volume : {{transaction.volume}} <br>                    amount/price : NGN {{transaction.amount}} <br>                    paymentChannel : {{transaction.paymentChannel}}                </p>                <p class=\"p_header_std\">Last Logged in : {{clientData.lastLoggedIn}}</p>                <p class=\"p_header_std\">Wallet Balance : NGN {{clientData.walletBalance}}</p>            </div>                <!--recent transactions-->            <div v-if=\"transactionBox\" class=\"animate__animated animate__fadeIn\"  id=\"transaction_box\">                <div>                    <div class=\"transaction_container\" v-for=\"transaction in transactions\">                        <div>                            <p class=\"p_header_std\">SN : {{transaction.sn}}</p>                            <p class=\"p_header_std\">Type : {{transaction.type}}</p>                            <p class=\"p_header_std\">Date : {{transaction.date}}</p>                            <p class=\"p_header_std\">Time : {{transaction.time}}</p>                            <p class=\"p_header_std\">Payment Channel : {{transaction.paymentChannel}}</p>                            <p class=\"p_header_std\">Amount : {{transaction.amount}}</p>                            <p class=\"p_header_std\">Status : {{transaction.status}}</p>                        </div>                    </div>                </div>            </div>            <!--statistics box{{sales,logins,signups,guests with cta leads}}-->            <div v-if=\"transactionStats\" class=\"animate__animated animate__fadeIn\" id=\"transaction_stats\">                <div class=\"sdt_header_1\">                    <p  class=\"p_header_std\">Total Signups</p>                    <p  class=\"p_header_std\">{{totalSignups}}</p>                </div>                <div class=\"sdt_header_1\">                    <p  class=\"p_header_std\">Total Signups Today</p>                    <p  class=\"p_header_std\">{{signupstoday}}</p>                </div>                <div class=\"sdt_header_1\">                    <p class=\"p_header_std\" >Total Transactions</p>                    <p  class=\"p_header_std\">{{totalTransactions}}</p>                </div>                <div class=\"sdt_header_1\">                    <p class=\"p_header_std\" >Transactions Completed Today</p>                    <p class=\"p_header_std\">{{transactionsToday}}</p>                </div>                <div class=\"sdt_header_1\">                    <p class=\"p_header_std\">Total Guests</p>                    <p class=\"p_header_std\">{{TotalGuests}}</p>                </div>            </div>            <!--wallet balance-->            <div v-if=\"walletBalanceBox\" class=\"animate__animated animate__fadeIn\" id=\"wallet-balance-box\">                <div class=\"sdt_header_1\">                <p class=\"p_header_std\">Wallet balance</p>                <p> NGN {{walletBalance}} </p>                </div>            </div>            <div v-if=\"admChatFeedback\" class=\"animate__animated animate__fadeIn\" id=\"adm_chat_feedback\">                <div>                    <div class=\"chats\">                        <div class=\"p-2\" v-for=\"chat in chats\">                            <p v-bind:class=\"{clientAdm : chat.clientAdm,adminAdm : chat.adminAdm }\">{{chat.message}}</p>                        </div>                    </div>                    <div>                        <span><input class=\"input_std\" v-model=\"chatMsg\" type=\"text\"></span>                        <div class=\"button_container_std\">                            <button><span><span class=\"fas fa-paper-plane\"></span> Send</span></button>                        </div>                    </div>                </div>            </div>        </div>         "
}
export default obj;