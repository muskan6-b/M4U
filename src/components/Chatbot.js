import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi Foodie, how can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I will connect you to one of my agents.", sender: "bot" },
      ]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "No agent available right now.", sender: "bot" },
          {
            text: "Contact: +1234567890 | Email: support@example.com",
            sender: "bot",
          },
        ]);
      }, 4000);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thankuuu Foodies😍🤤,Let's chat again soon ,Till add Some Food In Your Belly🍕😂",
            sender: "bot",
          },
        ]);
      }, 5500);
    }, 2000);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: isOpen ? "450px" : "50px",
        height: isOpen ? "600px" : "50px",
        backgroundColor: "#f8f9fa",
        borderRadius: "40px",
        border: "2px solid black", // Added black border
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        transition: "all 0.3s",
        overflow: "hidden",
      }}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "#FF0000",
            color: "white",
            borderRadius: "50%",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          💬
        </button>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          {/* Header with close button */}
          <div
            style={{
              padding: "10px",
              backgroundColor: "#000000",
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="textalign"> Meals4U (M4U)</div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              ❌
            </button>
          </div>

          {/* Chat messages */}
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "5px 0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    backgroundColor:
                      msg.sender === "user" ? "#000000" : "#e9ecef",
                    color: msg.sender === "user" ? "white" : "black",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input box */}
          <div
            style={{
              padding: "10px",
              display: "flex",
              borderTop: "1px solid #ccc",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                marginLeft: "5px",
                backgroundColor: "#000000",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
