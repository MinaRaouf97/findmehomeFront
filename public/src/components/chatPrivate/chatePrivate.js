import React ,{useEffect,useState} from "react";

function Chat(){
    const [messege, setMessage] = useState("");
  const [id, setId] = useState("");

  const history = useHistory() 
 useEffect(() =>{
     if(localStorage.getItem('message_info')){
         history.push('/message')
     }
 },[])
    async function chat() {

        let item = { messege, id };
        let result = await fetch("http://127.0.0.1:8000/api/chat", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("message_info",JSON.stringify(result))
        history.push("/message")

    }
    return (
        <>

            <div id="chatePrivate">
                <aside>
                    <header>
                        <input type="text" placeholder="search"/>
                    </header>
                    <ul>

                        <li>
                            <img class="PrivateChatimg" src="https://i.imgur.com/YbeeaJB.jpeg" alt=""/>
                                <div>
                                    <h2>Ahmed Ali</h2>
                                    <h3/>
                                </div>
                        </li>
                        <li>
                            <img class="PrivateChatimg" src="https://i.imgur.com/jkhb88Z.jpeg" alt="x"/>
                                <div>
                                    <h2>Osama Adel</h2>
                                    <h3/>
                                </div>
                        </li>
                        <li>
                            <img class="PrivateChatimg" class="PrivateChatImg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg" alt=""/>
                                <div>
                                    <h2>Sara Ashraf</h2>
                                    <h3/>


                                </div>
                        </li>
                    </ul>
                </aside>
                <main>
                    <header>

                        <img class="PrivateChatHeader" src="https://i.imgur.com/YbeeaJB.jpeg" alt=""/>
                            <div>
                                <h2>Chat with</h2>
                                <h3 onChange={(e)=> setId(e.target.value)}>Ahmed Ali</h3>
                            </div>

                    </header>
                    <ul id="chat">
                        <li class="you">
                            <div class="entete">
                                <h2>Ahmed Ali</h2>
                                <h3>10:12AM, Today</h3>
                            </div>
                            <div class="message" >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.
                            </div>
                        </li>

                        <li class="me">
                            <div class="entete">
                                <h3>10:12AM, Today</h3>
                                <h2>You</h2>
                            </div>
                            <div class="message">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </li>




                    </ul>
                    <footer>
                        <textarea placeholder="Type your message" onChange={(e)=> setMessage(e.target.value)}></textarea>

                        <a href="#" onClick={chat}>Send</a>
                    </footer>
                </main>
            </div>

        </>
    );
};

export default Chat;
