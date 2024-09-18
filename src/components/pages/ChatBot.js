import React from "react";
import { useEffect } from "react";

function ChatBot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cloud.google.com/ai/gen-app-builder/client?hl=en_US";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="chatbot">
      <div className="main-content">
        <h1>Meet Our AI-Powered Election Chatbot!</h1>
        <p>
          Our intelligent chatbot is designed to give you quick and reliable
          information about upcoming Presidential Election. Whether you're
          curious about candidates, their manifestos, or key election details,
          our bot provides verified responses in real-time. It's the perfect
          tool to help you stay informed, make educated decisions, and
          understand the issues that matter most.
        </p>
      </div>

      <gen-search-widget
        configId="5ef0d2a6-b29d-434d-9a3b-aa301903f8ba"
        triggerId="searchWidgetTrigger"
        className="gen-search-widget" 
      ></gen-search-widget>

      <input placeholder="Ask something.." id="searchWidgetTrigger" />
    </div>
  );
}

export default ChatBot;
