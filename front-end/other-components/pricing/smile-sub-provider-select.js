let obj = {
    props : ["providerPrices"],
    data : function (){
        return {
            providerPricesDP : this.providerPrices,
        }
    },
    template : "         <div class='data_provider_select'>            <div>                <p class='Decision_header'>Service Provider : SMILE_NG</p>            </div>             <div>            <three-cols-table v-bind:data-object='providerPricesDP.smile'></three-cols-table>        </div>        </div>                "
}
export default obj;