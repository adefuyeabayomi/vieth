let obj = {
    props: ["page","dis","transO","mns"],
    computed : {
        transactionObject : function () {
            return this.transO;
        },
        discount : function(){
            return this.dis;
        },
        currentPage : function (){
            return this.page;
        },
        mnOpen : function (){
            return this.mns;
        }
    },let obj = {
        methods: {
            respond : function(){
               alert("event");
            }
        },