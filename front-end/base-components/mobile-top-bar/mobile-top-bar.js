let obj = {
    props: ["hamState"],
    data : function (){
        return {
            hamstate : this.hamState
        }
    },
    template : "         <div class=\"container\" id=\"mobile_top_bar\">            <div class=\"row\">                <div id=\"logo_box\" class=\"f-6 p-1\">                    <div class=\"center w-11 h-40px\">                        <p id=\"logo_text\" class=\"p-top-2\"> VIETH.online</p>                    </div>                </div>                <div id=\"util_box\" class=\"f-4 p-1\">                    <div class=\"center w-11 h-40px\"><!--whatsapp, phone and chat head-->                        <p id=\"utils\">                            <a href=\"tel://08136243796\"><span class=\"fas fa-phone-square-alt phone-icon\"></span><span class=\"phone_no\">08136243796</span></a>                            <a href=\"https://wa.me/+2348136243796\"><span class=\"fab fa-whatsapp-square whatsapp-icon\"></span><span class=\"whatsapp_no\">08136243796</span></a>                            <a href=\"#customer-care-section\"><span class=\"fas fa-comment-alt comment-alt-icon\"></span><span class=\"chat_with_admin\">Leave A Complaint/Feedback</span></a>                        </p>                    </div>                </div>                <div id=\"hamburger_box\" class=\"f-2 p-1\">                    <div class=\"center w-11 h-40px\">                        <hamburger v-on:update-ham-state=\"$emit('update-ham-state')\" v-bind=\"hamstate\" v-on:update-nav-state=\"$emit('update-nav-state')\"></hamburger>                    </div>                </div>            </div>        </div>           "
}
export default obj;