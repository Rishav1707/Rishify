import { useEffect, useState } from "react";
import TopTracks from "./TopTracks";
import Login from "./Login";
import Logout from "./Logout";
import logo from "./assets/Rishify.png";
import "./App.css";

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize?";
const RESPONSE = "token";
const CLIENT_ID = "f9e4c56cb96e449cb94739383b54e32a";
const SCOPE = "user-read-private user-read-email user-top-read";
const REDIRECT_URI = "https://rishify.vercel.app/";

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
          <Login
            AUTH_ENDPOINT={AUTH_ENDPOINT}
            RESPONSE={RESPONSE}
            CLIENT_ID={CLIENT_ID}
            SCOPE={SCOPE}
            REDIRECT_URI={REDIRECT_URI}
          />
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
