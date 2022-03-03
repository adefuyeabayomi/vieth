let obj = {
    props : ["providerPrices"],
    data : function (){
        return {
            provider: "dstv",
            providerPricesDP : this.providerPrices,
        }
    },
    template : "         <div class='tv_provider_select'>            <div>                <p class='Decision_header'>Choose your tv service provider :</p>            </div>            <form>                <select class='pricing_select' v-model='provider' name='tv_service_provider'>                    <option value='dstv'>DSTV </option>                    <option value='gotv'>GOTV</option>                    <option value='startimes'>STARTIMES</option>                </select>            </form>       <div>            <three-cols-table v-bind:data-object='providerPricesDP.tv[provider]'></three-cols-table>        </div>        </div>              "
}
export default obj;
