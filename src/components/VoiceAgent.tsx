import React, { useEffect } from 'react';

const VoiceAgent: React.FC = () => {
  useEffect(() => {
    // Load the Eleven Labs script
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <elevenlabs-convai agent-id="Rl0KuuRJHCeUzkCeMoOV"></elevenlabs-convai>
    </div>
  );
};

export default VoiceAgent;
