import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import Socket from "../../../services/socket";


function SocketTestPage(params) {
  const { connect, messages, setMessages } = Socket(1);
  
  return (
    <div>
      <button onClick={connect}>Connect</button>
      {messages.map(message => (
        <div>
          {message.message}
        </div>
      ))}
    </div>
  )
}

export default SocketTestPage;