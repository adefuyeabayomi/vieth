import airtimeDis from "../../airtimeDiscount.js";
let obj = {
    data : function(){
        return {
            discount : airtimeDis,
            prices : this.priceObj,
            network : "mtn",
            buyAirtimeAmount : "",
            paymentChannel: "directly"
        }
    },
    computed : {
    curAirtimePrice : function (){
        let discount = this.discount[this.network];
        let amount = Number(this.buyAirtimeAmount);
        function getDiscount(amount,discount){
            return (amount) * (discount/100);
        }
        return amount - getDiscount(amount,discount);
    },
},
    template : "         <div id=\"buy_airtime_section\">            <div class=\"std_header_1\">                <p>Buy Airtime</p>            </div>              <div id=\"first\" class=\"left-pad-std\">                <p class=\"p_header_std\">Network : <i>select your preferred network below</i></p>                <select  class=\"input_std buy_select\" name=\"select-network\" v-model=\"network\">                    <option value=\"mtn\">Mtn NG</option>                    <option value=\"airtel\">Airtel NG</option>                    <option value=\"ninemobile\">9mobile NG</option>                    <option value=\"glo\">Glo Ng</option>                </select>            </div>            <div class=\"left-pad-std\">                <p class=\"p_header_std\">Amount :</p>                <div id=\"amount_input_container\">                  <input class=\"input_std\" type=\"text\" v-model=\"buyAirtimeAmount\">                </div>            </div>            <div  class=\"left-pad-std\">                <p>Price : NGN {{curAirtimePrice}} <i>( {{discount[network]}}% discount on {{network}} airtime purchase )</i></p>            </div>            <div  class=\"left-pad-std\" id=\"pay\">                <p  class=\"p_header_std center\">How are you paying</p>                <form class=\"w-m-content center container\">                    <input type=\"radio\" id=\"directly\" value=\"directly\" name=\"payment_channel\" checked=\"checked\" v-model=\"paymentChannel\"> Directly                     <input type=\"radio\" id=\"wallet\" value=\"wallet\" name=\"payment_channel\" v-model=\"paymentChannel\"> From Wallet                 </form>            </div>            <div class=\"button_container_std\">                <button>Proceed <span class=\"fas fa-arrow-right\"></span></button>            </div>        </div>         "
}
export default obj;