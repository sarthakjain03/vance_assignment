import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx"

export default function PrivateRoute({ component }) {
  const { user } = useAuth()

  return user ? component : <Navigate to="/signin" />
}