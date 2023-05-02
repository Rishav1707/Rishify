/* eslint-disable react/prop-types */
import icon from "./assets/icons.svg";

export default function Login() {
  function login() {
    window.location.href = "http://localhost:8888";
  }
  return (
    <div className="button">
      <button onClick={login}>
        <img src={icon}></img> Login
      </button>
    </div>
  );
}
