import React, { useState } from "react";
import { useSelector } from "react-redux";

const TranslateButton = () => {
  const [clickCount, setClickCount] = useState(0);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleTranslateClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      {clickCount < 5 && (
        <button onClick={handleTranslateClick}>Translate</button>
      )}
      {clickCount >= 5 && !isLoggedIn && (
        <p>You need to login to continue translating.</p>
      )}
      {clickCount >= 5 && isLoggedIn && (
        <p>Logged in user can continue translating.</p>
      )}
    </div>
  );
};

export default TranslateButton;
