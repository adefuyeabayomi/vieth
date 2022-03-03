import pricingObject from "./pricingData.js";

let obj = {
    data : function(){
        let pricing = pricingObject;
        return {
            service : "data-provider-select",
            pricesObj : pricing,
        }
    },
    template : "         <div id='pricing_section'>            <div>                <p class='prices_header'>PRICES</p>            </div>            <div>                <p class='Decision_header'>Choose a service.</p>                <form class='choose_service_form'>                    <div>                        <input name='service' id='data' type='radio' class='' v-model='service' checked='checked' value='data-provider-select'>                    <label for='data'>Data Subscriptions</label>                    </div>                    <div>                        <input name='service' id='smile_data_sub' type='radio' v-model='service' class='' value='smile-sub-provider-select'>                    <label for='smile_data_sub'>Smile Data Subscriptions</label>                    </div>                    <div>                         <input name='service' id='tv_sub' type='radio' v-model='service' class='' value='tv-provider-select'>                    <label for='tv_sub'>TV Subscriptions</label>                    </div>                    <div>                        <input name='service' id='electricity' type='radio' v-model='service' class='' value='electricity-provider-select'>                    <label for='electricity'>Electricity Bills</label>                    </div>                    <div>                    <input name='service' id='recharge_card_printing' type='radio' v-model='service' class='' value='recharge-card-printing-provider-select'>                    <label for='recharge_card_printing'>Recharge Card Printing</label>                    </div>                </form>            </div>            <div>                <!--remaining the service provider section and price table-->                <keep-alive>                    <component v-bind:is='service' v-bind:provider-prices='pricesObj'></component>                </keep-alive>            </div>        </div>         "
}
export default obj;