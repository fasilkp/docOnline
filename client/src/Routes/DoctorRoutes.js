import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import DoctorLoginPage from "../pages/doctor/DoctorLoginPage";
import DoctorForgotPage from "../pages/doctor/DoctorForgotPage";
import DoctorHomePage from "../pages/doctor/DoctorHomePage";
import DoctorProfilePage from "../pages/doctor/DoctorProfilePage";
import DoctorSchedulePage from "../pages/doctor/DoctorSchedulePage";
import DoctorBookingPage from "../pages/doctor/DoctorBookingPage";
import DoctorChat from "../components/DoctorChat/DoctorChat";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProtectedDoctorRoutes from "../utils/ProtectedDoctorRoutes";

export default function DoctorRoutes() {
  const { refresh, doctor } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      let { data: doctorData } = await axios.get("/doctor/auth/check");
      dispatch({
        type: "doctor",
        payload: { login: doctorData.loggedIn, details: doctorData.doctor },
      });
    })();
  }, [refresh]);
  return (
    <Routes>
      <Route element={<ProtectedDoctorRoutes doctor={doctor} />}>
        <Route path="/" element={<DoctorHomePage />} />
        <Route path="/profile" element={<DoctorProfilePage />} />
        <Route path="/schedule" element={<DoctorSchedulePage />} />
        <Route path="/booking" element={<DoctorBookingPage />} />
        <Route path="/chat" element={<DoctorChat />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>

      {doctor.login === false && (
        <>
          <Route path="/login" element={<DoctorLoginPage />} />
          <Route path="/forgot" element={<DoctorForgotPage />} />
        </>
      )}
      
      {doctor.login && (
        <>
          <Route path="/login" element={<Navigate to="/account/doctor/" />} />
          <Route path="/forgot" element={<Navigate to="/account/doctor/" />} />
        </>
      )}
    </Routes>
  );
}
