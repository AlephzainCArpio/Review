import { useState } from "react";

function ToggleComponent() {
  const [showContent, setShowContent] = useState(false);

  const handleToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {showContent ? "Hide" : "Show"}
      </button>

      {showContent && (
        <p>Hi there!</p>
      )}
    </div>
  );
}

export default ToggleComponent;