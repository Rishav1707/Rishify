/* eslint-disable react/prop-types */
import icon from "./assets/icons.svg";

export default function Login({
  client_id,
  redirect_uri,
  auth_endpoint,
  response,
}) {
  function login() {
    window.location.href = `${auth_endpoint}client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response}`;
  }
  return (
    <div className="button">
      <button onClick={login}>
        <img src={icon}></img> Login
      </button>
    </div>
  );
}
