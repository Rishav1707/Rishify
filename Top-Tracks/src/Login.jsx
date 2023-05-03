/* eslint-disable react/prop-types */
import icon from "./assets/icons.svg";

export default function Login({
  AUTH_ENDPOINT,
  RESPONSE,
  CLIENT_ID,
  SCOPE,
  REDIRECT_URI,
}) {
  function login() {
    // window.location.href = "http://localhost:8888";
    window.location.href = `${AUTH_ENDPOINT}client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE}`;
  }
  return (
    <div className="button">
      <button onClick={login}>
        <img src={icon}></img> Login
      </button>
    </div>
  );
}
