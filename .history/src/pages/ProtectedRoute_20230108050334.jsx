import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuthContext();
  if (user) {
    console.log(user);
    return chil;
  } else {
    return <Navigate to="/" />;
  }
}
