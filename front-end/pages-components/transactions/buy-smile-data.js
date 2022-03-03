import price from "../../smile-price.js";
let obj = {
    data : function(){
        let priceObj = price;
        return {
            priceObj : priceObj,
            dataVolume : "",
            smileID : "",
            paymentChannel : "",
        }
    },
    computed : {
        price : function(){
            return this.dataVolume == "" ? "" :  this.priceObj[this.dataVolume];
        }
    },
    template : "         <div id=\"buy_smile_data_section\">            <div class=\"std_header_1\">                <p>Buy Smile Data Subscription</p>            </div>               <div class=\"left-pad-std\">                <p  class=\"p_header_std\">Service Provider Smile NG</p>                <p  class=\"p_header_std\">Amount :</p>                <div id=\"smile-amount\">                    <select  class=\"input_std\" v-model=\"dataVolume\" name=\"smile-amount\">                        <option disabled value=\"\">--select--</option>                        <option value=\"1gig\">1GB</option>                    </select>                </div>            </div>            <div class=\"left-pad-std\">                <p>Price : NGN {{price}}</p>            </div>            <div class=\"left-pad-std\">                <p  class=\"p_header_std\">Please input your smile id : </p>                <input class=\"input_std\" type=\"text\" v-model=\"smileID\" placeholder=\"...\">            </div>            <div class=\"left-pad-std\" id=\"pay\">                <p  class=\"p_header_std\">How are you paying : </p>                <form>                    <input v-model=\"paymentChannel\" type=\"radio\" id=\"directly\" name=\"payment_channel\" checked> Directly                     <input v-model=\"paymentChannel\" type=\"radio\" id=\"wallet\" name=\"payment_channel\"> From Wallet                 </form>            </div>            <div class=\"button_container_std\">                <button>Proceed <span class=\"fas fa-arrow-right\"></span></button>            </div>            <div id=\"modal_bg\">                <div class=\"loading modal\">                    <p id=\"rolling_anim\"><span class=\"fas fa-half-round-arrow\"></span></p>                </div>            </div>        </div>         "
}
export default obj;