let obj = {
    props : ["transObj"],
    data : function (){
        return {
            transactionObject : this.transObj,
        }
    },
    template : "         <div class='transaction_success_section'> <p class='trans-header'>TRANSACTION SUCCESSFUL</p>           <p class='success_message'>                {{transactionObject.msg}}            </p>            <div>                <button id='showGoToHome'>Go To Homepage</button>            </div>        </div>         "
}
export default obj;