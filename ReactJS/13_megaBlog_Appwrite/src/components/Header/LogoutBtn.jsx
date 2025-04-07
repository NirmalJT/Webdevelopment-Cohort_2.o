import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(`Logout component :: appwrite :: errorr :: ${error}`);
      });
  };

  return (
    <>
      <button
        onClick={logoutHandler}
        className="bg-blue-700 px-5 py-3 rounded-2xl outline-none"
      >
        Logout
      </button>
    </>
  );
}
export default LogoutBtn;
