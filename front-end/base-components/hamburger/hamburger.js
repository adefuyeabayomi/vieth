let obj = {
    props : ["tttc","tmtc","tbtc","ttbth","tbbth","tmbth"],
    computed : {
        tttcTrue: function () {
            console.log(this.tttc)
            return this.tttc;
        },
        tmtcTrue : function () {
            console.log(this.tmtc)
            return this.tmtc;
        },
        tbtcTrue: function () {
            console.log(this.tbtc)
            return this.tbtc;
        },
        ttbthTrue : function () {
            console.log(this.ttbth) 
            return this.ttbth;
        },
        tmbthTrue : function () {
            console.log(this.tmbth)
            return this.tmbth;
        },
        tbbthTrue : function () {
            console.log(this.tbbth)
            return this.tbbth;
        }
    },
    methods: {
        action(){
            this.$emit('update-ham-state');
            this.$emit('update-nav-state');
        }
    },
    template : "         <div id='hamburger_grouping'>            <div style=\"width: inherit; height : inherit;\" v-on:click=\"action()\">                <div v-bind:class=\"{tttc : tttcTrue, ttbth : ttbthTrue }\" id='hamburger_top_line'></div>                <div v-bind:class=\"{tmtc : tmtcTrue, tmbth : tmbthTrue}\" id='hamburger_mid_line'></div>                <div v-bind:class=\"{tbtc : tbtcTrue, tbbth : tbbthTrue }\" id='hamburger_bottom_line'></div>            </div>        </div>         "
}
export default obj;