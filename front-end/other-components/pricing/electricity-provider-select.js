let obj = {
    props : ["providerPrices"],
    data : function (){
        return {
            provider: "ikejaElectric",
            providerPricesDP : this.providerPrices,
        }
    },
    template : "         <div class='electricity_distributor_select'>            <div>                <p class='Decision_header'>Choose your electricity distributor :</p>            </div>            <form>                <select class='pricing_select' v-model='provider' name='electricity_distributor'>                    <option value='ikejaElectric'>Ikeja Electric Distribution Company</option>                    <option value='generalElectric'>General Electric Distribution company</option>                </select>            </form>         <div>            <two-cols-table v-bind:data-object='providerPricesDP.electricity[provider]'></two-cols-table>        </div>        </div>                "
}
export default obj;