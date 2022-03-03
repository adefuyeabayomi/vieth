import priceObj from "../../priceObj.js";
let obj = {
    data : function(){
        let price = priceObj
        return {
            priceObj : price,
            network : "mtn",
            dataVolume : "",
            paymentChannel : "",
        }
    },
    computed : {
        price : function (){
           return this.dataVolume !== "" ? this.priceObj[this.network][this.dataVolume] : 0;
        }
    },
    template : "         <div id=\"buy_data_section\">            <div class=\"std_header_1\">                <p>Buy Data</p>            </div>              <div  id=\"first\" class=\"left-pad-std\">                <p class=\"p_header_std\">Network  : <i>select your preferred network below</i></p>                <select class=\"input_std buy_select\" name=\"select-network\" v-model=\"network\">                    <option value=\"mtn\">Mtn NG</option>                    <option value=\"airtel\">Airtel NG</option>                    <option value=\"9mobile\">9mobile NG</option>                    <option value=\"glo\">Glo Ng</option>                </select>            </div>            <div class=\"left-pad-std\">                <p class=\"p_header_std\">Amount :</p>                <div id=\"mtn-amount\" v-if=\"network == 'mtn'\">                    <select  class=\"input_std buy_select\" name=\"mtn-amount\" v-model=\"dataVolume\">                        <option disabled value=\"\">Please select one</option>                        <option value=\"1gig\">2GB</option>                    </select>                </div>                <div id=\"airtel-amount\"  v-if=\"network == 'airtel'\">                    <select  class=\"input_std buy_select\" name=\"airtel-amount\"  v-model=\"dataVolume\">                        <option disabled value=\"\">Please select one</option>                        <option value=\"1gig\">1GB</option>                    </select>                </div>                <div id=\"9mobile-amount\"  v-if=\"network == '9mobile'\">                    <select  class=\"input_std buy_select\" name=\"9mobile-amount\" v-model=\"dataVolume\">                        <option disabled value=\"\">Please select one</option>                        <option value=\"1gig\">1GB</option>                    </select>                </div>                <div id=\"glo-amount\"   v-if=\"network == 'glo'\">                    <select  class=\"input_std buy_select\" name=\"glo-amount\" v-model=\"dataVolume\">                        <option disabled value=\"\">Please select one</option>                        <option value=\"1gig\">1GB</option>                    </select>                </div>            </div>            <div class=\"left-pad-std\">                <p>Price : NGN {{price}}</p>            </div>            <div  class=\"left-pad-std\" id=\"pay\">                <p class=\"p_header_std\">How are you paying</p>                <form>                    <input type=\"radio\" name=\"paymentChannel\" v-model=\"paymentChannel\" value=\"directly\"> Directly                     <input type=\"radio\" name=\"paymentChannel\" v-model=\"paymentChannel\" value=\"wallet\"> From Wallet                 </form>            </div>            <div class=\"proceed_button_container\">                <button>Proceed</button>            </div>            <div id=\"modal_bg\">                <div class=\"loading modal\">                    <p id=\"rolling_anim\"><span class=\"fas fa-half-round-arrow\"></span></p>                </div>            </div>        </div>         "
}
export default obj;