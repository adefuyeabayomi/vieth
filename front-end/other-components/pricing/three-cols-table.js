let obj = {
    props : ["dataObject"],
    data : function(){
        return {
            rows : this.dataObject,
        }
    },
    template : "         <table>            <tr v-for='row in rows'>                <td>{{row.first}}</td>                <td>{{row.second}}</td>                <td>{{row.third}}</td>            </tr>        </table>         "
}
export default obj;