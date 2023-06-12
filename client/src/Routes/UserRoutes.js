import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import UserHomePage from "../pages/user/UserHomePage";
import UserSearchPage from "../pages/user/UserSearchPage";
import UserDoctorPage from "../pages/user/UserDoctorPage";
import UserHospitalPage from "../pages/user/UserHospitalPage";
import UserDepartmentPage from "../pages/user/UserDepartmentPage";
import UserProfilePage from "../pages/user/UserProfilePage";
import Chat from "../components/Chat/Chat";
import LoginPage from "../pages/user/UserLoginPage";
import UserSignupPage from "../pages/user/UserSignupPage";
import UserForgotPage from "../pages/user/UserForgotPage";
import UserAuthCallbackPage from "../pages/user/UserAuthCallbackPage";
import ProtectedUserRoutes from "../utils/ProtectedUserRoutes";

export default function UserRoutes() {
  const { refresh, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      let { data } = await axios.get("/user/auth/check");
      dispatch({
        type: "user",
        payload: { login: data.loggedIn, details: data.user },
      });
    })();
  }, [refresh]);
  console.log(user)
  return (
    <Routes>
      <Route element={<ProtectedUserRoutes user={user} />}>
        <Route path="/" element={<UserHomePage />} />
        <Route path="/search" element={<UserSearchPage />} />
        <Route path="/doctor/:id" element={<UserDoctorPage />} />
        <Route path="/hospital/:id" element={<UserHospitalPage />} />
        <Route path="/department/:id" element={<UserDepartmentPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/chat" element={<Chat />} />
      </Route>

      {user.login === false && (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<UserSignupPage />} />
          <Route path="/forgot" element={<UserForgotPage />} />
          <Route path="/callback" element={<UserAuthCallbackPage />} />
        </>
      )}
      {user.login && (
        <>
          <Route path="/login" element={<Navigate to={"/"} />} />
          <Route path="/signup" element={<Navigate to="/" />} />
          <Route path="/forgot" element={<Navigate to="/" />} />
          <Route path="/callback" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}
