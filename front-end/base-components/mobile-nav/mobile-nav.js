let obj = {
    props:["navigationState"],
    computed : {
        compState : function () {
            return this.navigationState;
        }
    },
    template : "         <div class=\"animate__animated animate__fadeIn vh-full\" id=\"mobile_nav_container\">            <!--ofset some space from the top to cover for the space taken by the top bar-->            <div style=\"height: 55px;\"></div>            <nav-comp v-on:update-ham-state=\"$emit('update-ham-state')\" v-bind=\"compState\" v-on:close-nav=\"$emit('close-nav')\"></nav-comp>        </div>         "
}
export default obj;