let obj = {
    data : function (){
        return {
            walletFundAmount : ""
        }
    },
    template : "         <div class='fund_wallet_section'>            <div>                <p>Fund Wallet</p>            </div>            <div>                <p class=''>Amount To Fund : </p>                <input type='text' v-model='walletFundAmount' placeholder='...' class='wfainput'>            </div>            <div class='proceed_button_container'>                <button>Proceed</button>            </div>            <div id='modal_bg'>                <div class='loading modal'>                    <p id='rolling_anim'><span class='fas fa-half-round-arrow'></span></p>                </div>            </div>        </div>         "
}
export default obj;