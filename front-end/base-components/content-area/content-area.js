let obj = {
    props: ["page","transactionState"],
    computed : {
        transactionObject : function () {
            return this.transactionState;
        },
        currentPage : function (){
            return this.page;
        },
    },
    template : "         <div id=\"content_area_section\" class=\"overflow-y\">            <div id=\"page_component_wrapper\">                    <keep-alive>                        <component class=\"animate__animated animate__fadeIn\" v-bind:transaction-state=\"transactionObject\" v-bind:is=\"currentPage\"></component>                    </keep-alive>            </div>            <bottom-section></bottom-section>                    </div>         "
}
export default obj;