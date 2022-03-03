let obj = {
    data : function (){
        return {
            admPassword : ""
        }
    },
    template : "         <div>            <p>Admin Login</p>            <input v-model='admPassword'  type='password'>           <button id='admLoginButton'>Login</button>      </div>         "
}
export default obj;