let obj = {
    props : ["providerPrices"],
    data : function (){
        return {
            network: "mtn",
            providerPricesDP : this.providerPrices,
        }
    },
    template : "         <div class='recharge_card_select'>            <div>                <p class='Decision_header'>Service Provider : Vieth.online NG</p>            </div>            <div>                <p class='Decision_header'>Network :</p>            </div>            <form>                <select class='pricing_select' v-model='network' name='data_provider'>                    <option value='mtn'>Mtn_NG</option>                    <option value='airtel'>Airtel_NG</option>                    <option value='glo'>Glo_NG</option>                    <option value='ninemobile'>9mobile_NG</option>                </select>            </form>            <div>            <two-cols-table v-bind:data-object='providerPricesDP.rechargePrinting[network]'></two-cols-table>        </div>        </div>         "
}
export default obj;