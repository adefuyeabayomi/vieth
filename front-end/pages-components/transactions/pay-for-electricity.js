let obj = {
    data : function(){
        return {
            electricityCompany : "ike"
            ,meterType : "prepaid"
            ,meterNumber : ""
            ,amountToPay : ""
            ,phoneNumber : "",

        }
    },
    template : "         <div class='pay_for_electricity_section'>            <!--distribution,meter type (prepaid, postpaid),meter-number,company, amounttopay-->            <div class='distribution_company'>                <p> Electricity Company <i>Please select one below.</i></p>                <select name='eCompany' v-model='electricityCompany'>                    <option disabled value=''>--select--</option>                    <option value='ike'> Ikeja Electric - IE</option>                    <option value='ibe'> Ibadan Electric - IBE</option>                    <option value='ae'> Abuja Electric - AE</option>                    <option value='phe'>Portharcourt Electric - PHE</option>                    <option value='ke'>Kano Electric - KE</option>                    <option value='kae'>Kaduna Electric - KAE</option>                    <option value='ee'>Enugu Electric - EE</option>                    <option value='je'>Jos Electric</option>                </select>            </div>            <div class='meter_type'>                <p> Meter type : <i>Please select one below.</i></p>                <select name='meterType' v-model='meterType'>                    <option disabled value=''>--select--</option>                    <option value='prepaid'> Prepaid</option>                    <option value='postpaid'> Postpaid</option>                </select>            </div>            <div class='meter_number'>                <p class=''>Meter Number : </p>                <input type='text' v-model='meterNumber' placeholder='...' class='mninput'>            </div>            <div class='amount_to_pay'>                <p class=''>Amount To pay</p>                <input type='number' v-model='amountToPay' placeholder='...' class='qsinput'>            </div>            <div class='phone_number'>                <p class=''>Phone Number :</p>                <input type='number' v-model='phoneNumber' placeholder='...' class='pninput'>            </div>            <div class='proceed_button_container'>                <button>Proceed</button>            </div>            <div id='modal_bg'>                <div class='loading modal'>                    <p id='rolling_anim'><span class='fas fa-half-round-arrow'></span></p>                </div>            </div>        </div>         "
}
export default obj;