import { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient = null;
const Socket = (parkingLotID) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const connect = () => {
    console.log('Connecting to http://localhost:8080/ws');
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  }

  const onConnected = () => {
    stompClient.subscribe('/user/' + parkingLotID, onMessageReceived);
    userJoin();
  }

  const userJoin = () => {
    var chatMessage = {
      parkingLotID: parkingLotID,
      message: "CONNECT"
    };
    stompClient.send("/app/connect", {}, JSON.stringify(chatMessage));
  }

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    messages.push(payloadData);
    setMessages(messages);
    console.log(messages);
  }

  const onError = (err) => {
    console.log(err);
  }
  return {connect, messages, setMessages}
}

export default Socket
