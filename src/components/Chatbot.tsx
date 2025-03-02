import React, { useEffect } from 'react';

const Chatbot: React.FC = () => {
  useEffect(() => {
    // Load the Jotform chatbot script
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize the chatbot after the script is loaded
    script.onload = () => {
      console.log("Jotform script loaded");
      window.AgentInitializer.init({
        agentRenderURL: "https://agent.jotform.com/019556aa5d93714fb02aa59e06d622367b5e",
        rootId: "JotformAgent-019556aa5d93714fb02aa59e06d622367b5e",
        formID: "019556aa5d93714fb02aa59e06d622367b5e",
        queryParams: ["skipWelcome=1", "maximizable=1"],
        domain: "https://www.jotform.com",
        isDraggable: false,
        background: "linear-gradient(180deg, #6C73A8 0%, #6C73A8 100%)",
        buttonBackgroundColor: "#0066C3",
        buttonIconColor: "#FFFFFF",
        variant: false,
        customizations: {
          "greeting": "Yes",
          "greetingMessage": "Hi! How can I assist you?",
          "openByDefault": "No",
          "pulse": "Yes",
          "position": "left",
          "autoOpenChatIn": "0"
        },
        isVoice: undefined
      });
    };

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="JotformAgent-019556aa5d93714fb02aa59e06d622367b5e" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}></div>
  );
};

export default Chatbot;
