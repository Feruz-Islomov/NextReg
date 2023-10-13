import { useContext, useEffect, useRef, useState } from "react";
// import { auth } from "../../config/firebase-config";
import { v4 } from "uuid";
import {
  GettingData,
  emptyMyDocument,
  updateMyDocument,
} from "../firebase/getPost";
import sendMessageToTelegram from "../msgToBot";
import { playSound } from "../Notification/NotifySound";
import { StatusAdmin } from "../../pages/_app";

export default function ChatBox() {
  const { ok } = useContext(StatusAdmin);

  const [show, setShow] = useState(false);
  const [msgText, setMsgText] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [msgId, setMsgId] = useState("");
  //get msg from firestore
  useEffect(() => {
    if (isAdmin === false) {
      setMsgId(v4());
    }
    GettingData("chatbox", setMsgs, ok, setMsgId);
  }, []);

  // realtime msging
  const ws = useRef(null);
  const handleMsgToFirebase = () => {
    if (msgText.trim() !== "") {
      // Send the message to the server
      const msgServer = { id: msgId, text: msgText, isdispatch: isAdmin };
      ws.current.send(JSON.stringify(msgServer));
      setMsgs([...msgs, msgServer]);
      setMsgText("");
      sendMessageToTelegram(`chat: ${msgText}`);
      updateMyDocument([...msgs, msgServer]);
    }
  };
  useEffect(() => {
    // Connect to the WebSocket server
    ws.current = new WebSocket("ws://localhost:3030");
    // Handle messages received from the server
    ws.current.onmessage = (event) => {
      // console.log(event.data);
      const data = JSON.parse(event.data);
      // Handle the parsed data
      if (msgId === "") {
        setMsgId(data.id);
      }
      if (isAdmin) {
        setMsgId(data.id);
      }
      setMsgs([...msgs, data]);
      playSound();
    };

    return () => {
      // Close the WebSocket connection when the component unmounts
      ws.current.close();
    };
  }, [msgs]);

  //push with enter msg text
  const messageContainerRef = useRef();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleMsgToFirebase();
    }
  };
  useEffect(() => {
    // Ensure messageContainerRef.current is defined before attempting to access scrollHeight
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [msgs]);

  return (
    <div className="chatbox">
      {ok && (
        <>
          <span
            className="badge rounded-pill bg-success cursorpointer mx-2"
            onClick={() => {
              setIsAdmin(true);
              GettingData("chatbox", setMsgs, ok, setMsgId);
            }}
          >
            get
          </span>
          <span
            className="badge rounded-pill bg-danger cursorpointer"
            onClick={() => {
              setMsgId("");
              setIsAdmin(true);
              setMsgs([]);
              emptyMyDocument();
            }}
          >
            delete
          </span>
        </>
      )}
      {!show ? (
        <button onClick={() => setShow(!show)} className="chat-container">
          <i className="fas fa-paper-plane sitecolor fs-4"></i>
        </button>
      ) : (
        <div className="chat-container">
          <span
            onClick={() => setShow(!show)}
            className="position-absolute top-0 start-0 translate-middle"
          >
            <i className="rounded-circle px-1 border bg-secondary cursorpointer text-light fas fa-times"></i>
          </span>
          <div className="chattext" ref={messageContainerRef}>
            <div className="chat-message dispatch">
              Welcome! dispatcher is here...
            </div>

            {msgs.map((msg, i) => {
              if (msg.id === msgId && !isAdmin) {
                return (
                  <div
                    key={i}
                    className={`chat-message ${
                      msg.isdispatch ? "dispatch" : "client"
                    }`}
                  >
                    {msg.text}
                  </div>
                );
              }
              if (isAdmin) {
                return (
                  <div
                    key={i}
                    className={`chat-message cursorpointer ${
                      msg.isdispatch ? "dispatch" : "client"
                    }`}
                    onClick={() => setMsgId(msg.id)}
                  >
                    {msg.text}
                  </div>
                );
              }
            })}
          </div>

          <div className="input-group">
            <input
              id="msg"
              className="form-control"
              type="text"
              placeholder="Type your message..."
              value={msgText}
              onChange={(e) => setMsgText(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <span
              onClick={handleMsgToFirebase}
              className="btn input-group-text sitebackcolor"
              role="button"
            >
              <i className="fas fa-paper-plane"></i>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
