import { useEffect, useState } from "react";
import TopTracks from "./TopTracks";
import Login from "./Login";
import Logout from "./Logout";
import logo from "./assets/Rishify.png";
import "./App.css";

function getToken() {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
}

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const access_token = getToken().access_token;
    window.location.hash = "";

    if (access_token) {
      setToken(access_token);
    }
  }, []);

  return (
    <>
      <h1>
        <img src={logo} className="logo"></img>Rishify
      </h1>
      {!token ? (
        <>
          <p>Get your top 5 tracks from the last 30 days</p>
          <Login />
        </>
      ) : (
        <>
          <p>Your top 5 tracks from the last 30 days</p>
          <TopTracks token={token} />
        </>
      )}
      {token && <Logout setToken={setToken} />}
    </>
  );
}

export default App;
