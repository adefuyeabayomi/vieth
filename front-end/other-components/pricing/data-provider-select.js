let obj = {
    props : ["providerPrices"],
    data : function (){
        return {
            provider: "mtn",
            providerPricesDP : this.providerPrices,
        }
    },
    template : "         <div class='data_provider_select'>            <div>                <p class='Decision_header'>Choose your service provider :</p>            </div>            <form>                <select class='pricing_select' v-model='provider' name='data_provider'>                    <option value='mtn'>Mtn_NG</option>                    <option value='airtel'>Airtel_NG</option>                    <option value='glo'>Glo_NG</option>                    <option value='ninemobile'>9mobile_NG</option>                </select>            </form>            <div>            <three-cols-table v-bind:data-object='providerPricesDP.data[provider]'></three-cols-table>        </div>        </div>                 "
}
export default obj;