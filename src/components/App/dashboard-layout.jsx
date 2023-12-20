import React, {useEffect} from 'react'
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"
 
export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()
 
  console.log('test', userId)
 
  useEffect(() => {
    if (!userId) {
      navigate("/sign-in")
    }
  }, [userId, navigate])
 
  if (!isLoaded) return "Loading..."
 
  return (
    <Outlet />
  )
}