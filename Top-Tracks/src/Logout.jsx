/* eslint-disable react/prop-types */
export default function Logout({ setToken }) {
  function logout() {
    setToken("");
    window.localStorage.removeItem("token");
  }
  return (
    <div className="button">
      <button onClick={logout}>Log out</button>
    </div>
  );
}
