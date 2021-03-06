import tvPrices from "../../tvPrices.js";
let obj = {
    data : function (){
        let price = tvPrices;
        return {
            prices : price,
            provider : "dstv",
            selectedpackage : "package1",
            smartCardNumber : "",
            paymentChannel : ""
        }
    },
    computed : {
        price : function(){
            return this.prices[this.provider][this.selectedpackage];
        }, 
        dstv :  function(){
            return this.provider == "dstv";
        } ,
        gotv :  function(){
            return this.provider == "gotv";
        } ,
        startimes :  function(){
            return this.provider == "startimes";
        }
    },
    template : "         <div id='pay_for_cable_tv_section'>            <div>                <p class='std_header_1'>Pay For TV Subscription</p>            </div>              <div>                <p>Service Provider :</p>                <select v-model='provider' name='select-provider'>                    <option value='dstv'> DSTV </option>                    <option value='gotv'> GOTV </option>                    <option value='startimes'> STARTIMES </option>                </select>            </div>            <div>                <p>Select Package</p>                <div v-if='dstv' id='dstv-packages'>                    <select v-model='selectedpackage' name='dstv'>                        <option value='package1'>package1</option>                     </select>                </div>                <div v-else-if='gotv' id='gotv-packages'>                    <select name='gotv' v-model='selectedpackage'>                        <option value='package1'>package1</option>                    </select>                </div>                <div v-else-if='startimes' id='startimes-packages'>                    <select name='startimes' v-model='selectedpackage'>                        <option value='package1'>package1</option>                    </select>                </div>                <div>                    <p>Price : NGN {{price}}</p>                </div>                <div>                    <p class=''>Your Smartcard Number / IUC </p>                    <input type='text' v-model='smartCardNumber' placeholder='...' class='smninput'>                </div>                <div id='pay'>                    <p>How are you paying : </p>                    <form>                        <input v-model='paymentChannel' type='radio' id='directly' name='payment_channel' checked> Directly                         <input v-model='paymentChannel' type='radio' id='wallet' name='payment_channel'> From Wallet                     </form>                </div>                <div class='proceed_button_container'>                    <button>Proceed</button>                </div>                <div id='modal_bg'>                    <div class='loading modal'>                        <p id='rolling_anim'><span class='fas fa-half-round-arrow'></span></p>                    </div>                </div>            </div>        </div>         "
}
export default obj;