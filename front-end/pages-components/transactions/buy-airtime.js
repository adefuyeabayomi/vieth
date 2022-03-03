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
    template : "        <div id='buy_airtime_section'>            <div>                <p class='std_header_1'>Buy Airtime</p>            </div>              <div>                <p>Network : <i>select your preferred network below</i></p>                <select class='buy_select' name='select-network' v-model='network'>                    <option value='mtn'>Mtn NG</option>                    <option value='airtel'>Airtel NG</option>                    <option value='ninemobile'>9mobile NG</option>                    <option value='glo'>Glo Ng</option>                </select>            </div>            <div>                <p>Amount :</p>                <div id='amount_input_container'>                  <input type='text' v-model='buyAirtimeAmount'>                </div>            </div>            <div>                <p>Price : NGN {{curAirtimePrice}} <i>( {{discount[network]}}% discount on {{network}} airtime purchase )</i></p>            </div>            <div id='pay'>                <p>How are you paying</p>                <form>                    <input type='radio' id='directly' value='directly' name='payment_channel' checked='checked' v-model='paymentChannel'> Directly                     <input type='radio' id='wallet' value='wallet' name='payment_channel' v-model='paymentChannel'> From Wallet                 </form>            </div>            <div class='proceed_button_container'>                <button>Proceed <span class='fas fa-arrow-left'></span></button>            </div>            <div id='modal_bg'>                <div class='loading modal'>                    <p id='rolling_anim'><span class='fas fa-half-round-arrow'></span></p>                </div>            </div>        </div>        ",
    computed : {
        curAirtimePrice : function (){
            let discount = this.discount[this.network];
            let amount = Number(this.buyAirtimeAmount);
            function getDiscount(amount,discount){
                return (amount) * (discount/100);
            }
            return amount - getDiscount(amount,discount);
        }
    }
}
export default obj;