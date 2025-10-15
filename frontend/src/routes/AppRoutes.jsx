import { Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoutes";
import SendEmail from "../pages/SendEmail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/send-email" element={<SendEmail />} />
      <Route
        path="/home"
        element={
          // <ProtectedRoute>
          <Home />
          // </ProtectedRoute>
        }
      />

      <Route
        path="/chats"
        element={<ProtectedRoute>{/* <Chats /> */}</ProtectedRoute>}
      />

      <Route
        path="/groups"
        element={<ProtectedRoute>{/* <Groups /> */}</ProtectedRoute>}
      />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
