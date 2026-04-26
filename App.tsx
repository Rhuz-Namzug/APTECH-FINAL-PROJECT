import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import "./Styles/Layout.css"

import FeedbackPage from "./Pages/Feedback"
import RegistrationPage from "./Pages/RegistrationPage"
import AdminPage from "./Pages/AdminPage"
import type { Registration } from "./Types/Type"

import "./styles/layout.css"

function App() {
  const [registrations, setRegistrations] = useState<Registration[]>([])

  const addRegistration = (reg: Registration) => {
    setRegistrations([...registrations, reg])
  }

  const deleteRegistration = (id: number) => {
    setRegistrations(registrations.filter((r) => r.id !== id))
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<FeedbackPage />} />
        <Route path="/registration" element={<RegistrationPage registrations={registrations} addRegistration={addRegistration} deleteRegistration={deleteRegistration} />} />
        <Route path="/admin" element={<AdminPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App