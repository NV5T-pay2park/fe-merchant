import React, { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";

var stompClient = null;
const Socket = (parkingLotID) => {
  const [messages, setMessages] = useState([]);
  const [connection, setConnection] = useState(false);

  const connect = () => {
    if (connection === true) {
      console.log("Connection is ready");
      return;
    }

    console.log(`Connecting to ${process.env.REACT_APP_SOCKET_BASE_URL}`);
    let Sock = new SockJS(process.env.REACT_APP_SOCKET_BASE_URL);
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);

    setConnection(true);
  };

  const onConnected = () => {
    stompClient.subscribe(
      "/user/" + parkingLotID + "/merchant",
      onMessageReceived
    );
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      parkingLotID: parkingLotID,
      message: "CONNECT",
    };
    stompClient.send("/app/connect", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    const payloadData = JSON.parse(payload.body);
    setMessages(payloadData);
  };

  const onError = (err) => {
    console.log(err);
  };
  return { connect, messages, setMessages };
};

export default Socket;
