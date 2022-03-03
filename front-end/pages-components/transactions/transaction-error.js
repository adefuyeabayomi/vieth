let obj = {
    props : ["transObj"],
    data : function (){
        return {
            transactionObject : this.transObj,
        }
    },
    template : "         <div v-bind:transaction-error='transSuccess'>            <p class='trans-header'>TRANSACTION SUCCESSFUL</p>            <p>                {{transactionObject.msg}}            </p>            <div>                <button>Go To Homepage</button>            </div>            <div>Try Again</div>        </div>         "
}
export default obj;