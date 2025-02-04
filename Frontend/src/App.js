import React, { useState, useEffect } from "react";
import Sidebar from "./components/common/Sidebar";
import Sidebar2 from "./components/common/Sidebar2";
import RealIndex from "./screens/RealIndex";
import MainIndex from "./screens/MainIndex";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [key, setKey] = useState(0); // Force re-renders using the key

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = document.cookie.split('; ').find(row => row.startsWith('jwt_token='));
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();

    // Listen for route changes and re-check login status
    const handlePathChange = () => {
      checkLoginStatus();
      setKey((prevKey) => prevKey + 1); // Force re-render
    };

    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  return (
    <div id="mytask-layout" className="theme-indigo">
      {isLoggedIn ? (
        <>
          <Sidebar key={key} activekey={window.location.pathname} history={props.history} />
          <RealIndex key={key} activekey={window.location.pathname} />
        </>
      ) : (
        <>
          <Sidebar2 key={key} activekey={window.location.pathname} history={props.history} />
          <MainIndex key={key} setIsLoggedIn={setIsLoggedIn} />
        </>
      )}
    </div>
  );
}

export default App;
