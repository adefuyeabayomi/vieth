import prdObj from "../../prdObj.js";
let obj = {
    data : function (){
        let obj = prdObj;
        return {
            dis : obj,
            network : "mtn",
            "card_value" : 100,
            cardQuantity : 0,
            paymentChannel : "directly",
            email : "",
        }
    },
    computed : {
        getTotalPrice : function (){
            let tot = this["card_value"] * this.cardQuantity;
            return tot - (this.dis[this.network]/100) * tot;
        },
        discount : function(){
            return this.dis[this.network]
        }
    },
    template : "         <div class='print_recharge_card_section'>            <!-- network, value amount quantity total price payment channel email collection payment proceed download link -->            <div class='network-select-box'>                <p>Network  : <i>select your preferred network below</i></p>                <select class='buy_select' name='select-network' v-model='network'>                    <option value='mtn'>Mtn NG</option>                    <option value='airtel'>Airtel NG</option>                    <option value='9mobile'>9mobile NG</option>                    <option value='glo'>Glo Ng</option>                </select>            </div>            <div class='value-of-card-select'>                <p>Value of Card</p>                <select class='value-select' name='valule_select' v-model='card_value'>                    <option value='100'>100 naira credit</option>                    <option value='200'>200 naira credit</option>                    <option value='500'>500 naira credit</option>                </select>            </div>            <div class='quantity_select'>                <p class=''>Whats the quantity of {{network}} NGN{{card_value}} card you want to buy</p>                <input type='text' v-model='cardQuantity' placeholder='...' class='qsinput'>            </div>            <div class='price-container'>                <p>Price : </p>                <p>Total Price is NGN {{getTotalPrice}}</p>                <p> {{discount}}% discount on all {{network}} recharge card</p>            </div>            <div id='pay'>                <p>How are you paying : </p>                <form>                    <input v-model='paymentChannel' type='radio' id='directly' name='payment_channel' checked> Directly                     <input v-model='paymentChannel' type='radio' id='wallet' name='payment_channel'> From Wallet                 </form>            </div>            <div>                <p>Please input your email here</p>                <input type='email' v-model='email' placeholder='...' class='qsinput'>            </div>            <div class='proceed_button_container'>                <button>Proceed</button>            </div>            <div id='modal_bg'>                <div class='loading modal'>                    <p id='rolling_anim'><span class='fas fa-half-round-arrow'></span></p>                </div>            </div>        </div>         "
}
export default obj;