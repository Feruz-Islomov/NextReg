import { useState } from "react";

export default function ChatBox() {
  const [show, setShow] = useState(false);
  return (
    <div className="chatbox">
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
          <div className="chattext">
            <div className="chat-message dispatch">
              Welcome! dispatcher is here...
            </div>
            {/* <div className="chat-message client">
              This is a received message.
            </div> */}
          </div>

          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Type your message..."
            />
            <span className="btn input-group-text sitebackcolor">
              <i className="fas fa-paper-plane"></i>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
