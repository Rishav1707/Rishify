/* eslint-disable react/prop-types */
export default function Logout({ setToken }) {
  function logout() {
    setToken("");
    window.localStorage.removeItem("token");
  }
  return (
    <>
      <button onClick={logout}>LogOut</button>
    </>
  );
}
