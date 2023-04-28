import { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import logo from "./assets/Rishify.png";
import "./App.css";

function App() {
  const client_id = "f9e4c56cb96e449cb94739383b54e32a";
  const redirect_uri = "http://localhost:5173";
  const auth_endpoint = "https://accounts.spotify.com/authorize?";
  const response = "token";
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let Token = window.localStorage.getItem("token");
    if (!Token && hash) {
      Token = hash
        .substring(1)
        ?.split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", Token);
    }
    setToken(Token);
  }, []);

  return (
    <>
      <h1>
        <img src={logo}></img>Rishify
      </h1>
      <p>Get your top 5 tracks from the last 30 days</p>
      {!token ? (
        <Login
          client_id={client_id}
          redirect_uri={redirect_uri}
          auth_endpoint={auth_endpoint}
          response={response}
        />
      ) : (
        <Logout setToken={setToken} />
      )}
    </>
  );
}

export default App;
