
    let obj = {
        data : function (){
            return {
                walletFundAmount : ""
            }
        },
    template : "         <div class=\"fund_wallet_section\">            <div class=\"std_header_1\">                <p>Fund Wallet</p>            </div>            <div>                <p class=\"wallet_amount\">Amount To Fund : </p>                <input type=\"text\" v-model=\"walletFundAmount\" placeholder=\"...\" class=\"input_std\">            </div>            <div class=\"button_container_std\">                <button>Proceed</button>            </div>            <div id=\"modal_bg\">                <div class=\"loading modal\">                    <p id=\"rolling_anim\"><span class=\"fas fa-half-round-arrow\"></span></p>                </div>            </div>        </div>         "
}
export default obj;