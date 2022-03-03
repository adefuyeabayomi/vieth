import transactionHistoryObj from "../../hisObj.js"
let obj = {
    data : function (){
        let transHisObj = transactionHistoryObj;
        return {
            transactions : transHisObj,
        }
    },
    computed :  {
        noTransactions : function(){
            return this.transactions == []
        }
    },
    template : "         <div class=\"transaction_history_section\">            <div class=\"std_header_1\">                <p>Transaction History</p>            </div>            <div id=\"transaction_history_content\">                <div v-if=\"noTransactions\">No transactions yet!</div>                <div v-else class=\"transaction_container\">                    <div class=\"transaction_box\" v-for=\"transaction in transactions\">                        <p>SN : {{transaction.sn}}</p>                        <p>Type : {{transaction.type}}</p>                        <p>Date : {{transaction.date}}</p>                        <p>Time : {{transaction.time}}</p>                        <p>Payment Channel : {{transaction.paymentChannel}}</p>                        <p>Amount : {{transaction.amount}}</p>                        <p>Status : {{transaction.status}}</p>                    </div>                </div>            </div>        </div>         "
}
export default obj;