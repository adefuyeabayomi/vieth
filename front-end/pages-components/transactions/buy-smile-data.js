import price from "../../smile-price.js";
let obj = {
    data : function(){
        let priceObj = price;
        return {
            priceObj : priceObj,
            dataVolume : "igig",
            smileID : "",
            paymentChannel : "",
        }
    },
    computed : {
        price : function(){
            return this.priceObj[this.dataVolume];
        }
    },
    template : "         <div id='buy_smile_data_section'>            <div>                <p class='std_header_1'>Buy Smile Data Subscription</p>            </div>               <div>                <p>Service Provider Smile NG</p>                <p>Amount :</p>                <div id='smile-amount'>                    <select v-model='dataVolume' name='smile-amount'>                        <option value='1gig'>1GB</option>                    </select>                </div>            </div>            <div class='price_container'>                <p>Price : NGN {{price}}</p>            </div>            <div id='smileIDContainer'>                <p class='sidheader'>Please input your smile id : </p>                <input type='text' v-model='smileID' placeholder='...' class='sidinput'>            </div>            <div id='pay'>                <p>How are you paying : </p>                <form>                    <input v-model='paymentChannel' type='radio' id='directly' name='payment_channel' checked> Directly                     <input v-model='paymentChannel' type='radio' id='wallet' name='payment_channel'> From Wallet                 </form>            </div>            <div class='proceed_button_container'>                <button>Proceed</button>            </div>            <div id='modal_bg'>                <div class='loading modal'>                    <p id='rolling_anim'><span class='fas fa-half-round-arrow'></span></p>                </div>            </div>        </div>         "
}
export default obj;