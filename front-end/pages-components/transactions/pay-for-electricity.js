let obj = {
    data : function(){
        return {
            electricityCompany : "ike"
            ,meterType : "prepaid"
            ,meterNumber : ""
            ,amountToPay : ""
            ,phoneNumber : ""
            ,email : "",
            paymentChannel: ""

        }
    },
    template : "         <div class=\"pay_for_electricity_section\">            <!--distribution,meter type (prepaid, postpaid),meter-number,company, amounttopay-->            <div class=\"std_header_1\">                <p>Pay Electricity Bills</p>            </div>            <div class=\"left-pad-std\">                <p class=\"p_header_std\"> Electricity Company <i>Please select one below.</i></p>                <select class=\"input_std\" name=\"eCompany\" v-model=\"electricityCompany\">                    <option disabled value=\"\">--select--</option>                    <option value=\"ike\"> Ikeja Electric - IE</option>                    <option value=\"ibe\"> Ibadan Electric - IBE</option>                    <option value=\"ae\"> Abuja Electric - AE</option>                    <option value=\"phe\">Portharcourt Electric - PHE</option>                     <option value=\"ke\">Kano Electric - KE</option>                    <option value=\"kae\">Kaduna Electric - KAE</option>                    <option value=\"ee\">Enugu Electric - EE</option>                    <option value=\"je\">Jos Electric</option>                </select>            </div>            <div class=\"left-pad-std\">                <p class=\"p_header_std\"> Meter type : <i>Please select one below.</i></p>                <select class=\"input_std\" name=\"meterType\" v-model=\"meterType\">                    <option disabled value=\"\">--select--</option>                    <option value=\"prepaid\"> Prepaid</option>                    <option value=\"postpaid\"> Postpaid</option>                </select>            </div>            <div class=\"left-pad-std\">                <p class=\"p_header_std\">Meter Number : </p>                <input class=\"input_std\" type=\"text\" v-model=\"meterNumber\" placeholder=\"...\">            </div>            <div class=\"left-pad-std\">                <p class=\"p_header_std\">Amount To pay</p>                <input class=\"input_std\" type=\"number\" v-model=\"amountToPay\" placeholder=\"...\">            </div>            <div class=\"left-pad-std\">                <p class=\"p_header_std\">Phone Number :</p>                <input class=\"input_std\" type=\"number\" v-model=\"phoneNumber\" placeholder=\"...\">            </div>            <div class=\"button_container_std\">                <button>Proceed <span class=\"fas fa-arrow-right\"></span></button>            </div>            <div id=\"modal_bg\">                <div class=\"loading modal\">                    <p id=\"rolling_anim\"><span class=\"fas fa-half-round-arrow\"></span></p>                </div>            </div>        </div>         "
}
export default obj;