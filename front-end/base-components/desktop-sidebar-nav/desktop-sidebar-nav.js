let obj = {
    props:["navigationState"],
    computed : {
        compState : function () {
            return this.navigationState;
        }
    },
    template : "         <div id=\"side_bar_section\" class=\"overflow-y\">            <!--learn how to customize the scrollbar-->            <!--offset here-->            <nav-comp v-bind=\"compState\"></nav-comp>        </div>         "
}
export default obj;