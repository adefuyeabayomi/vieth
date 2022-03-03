import chatObject from "./chatObj.js";
let obj = {
    data : function (){
        let chats = chatObject;
        return {
            chats : chats,
            clientMessage : "",
        }
    },
    template : "         <div class='chat_feedback_section h-m-content'>            <div>                <div class='chats'>                     <div class='msg_container' v-for='chat in chats'>                        <p v-bind:class='{client : chat.client,admin : chat.admin }'>{{chat.message}}</p>                    </div>                </div>                <div>                    <span><input v-model='clientMessage' type='text'></span><span><span class='fas fa-send'></span> Send</span>                </div>            </div>        </div>         "
}
export default obj;