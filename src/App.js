import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import Body from "./components/Body.js";
import Chatbot from "./components/Chatbot.js";

//19
function App() {
  return (
    <div className="AppCh">
      <Chatbot /> {/* This will display the chatbot */}
    </div>
  );
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <App /> {/* This will display the chatbot */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
