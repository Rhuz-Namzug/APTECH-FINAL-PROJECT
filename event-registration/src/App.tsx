import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import FeedbackPage from "./Pages/Feedback"
import RegistrationPage from "./Pages/RegistrationPage"
import EventsPage from "./Pages/Events"
import AdminPage from "./Pages/AdminPage"

import type { Feedback, Registration } from "./Types/Type"

import "./Styles/layout.css"

function App() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [editing, setEditing] = useState<Feedback | null>(null)

  const addFeedback = (f: Feedback) => {
    setFeedbacks((prev) => [...prev, f])
  }

  const deleteFeedback = (id: number) => {
    setFeedbacks((prev) => prev.filter((f) => f.id !== id))
  }

  const editFeedback = (f: Feedback) => {
    setEditing(f)
  }

  const updateFeedback = (id: number, comment: string) => {
    setFeedbacks((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, comment } : f
      )
    )
    setEditing(null)
  }

  const [registrations, setRegistrations] = useState<Registration[]>([])

  const addRegistration = (reg: Registration) => {
    setRegistrations((prev) => [...prev, reg])
  }

  const updateRegistration = (updated: Registration) => {
    setRegistrations(
      registrations.map((r) =>
        r.id === updated.id ? updated : r
      )
    )
  }

  const deleteRegistration = (id: number) => {
    setRegistrations((prev) =>
      prev.filter((r) => r.id !== id)
    )
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* FEEDBACK PAGE */}
        <Route
          path="/"
          element={
            <FeedbackPage
              feedbacks={feedbacks}
              addFeedback={addFeedback}
              deleteFeedback={deleteFeedback}
              editFeedback={editFeedback}
              updateFeedback={updateFeedback}
              editing={editing}
            />
          }
        />

        {/* REGISTRATION PAGE */}
        <Route
          path="/registration"
          element={
            <RegistrationPage
              registrations={registrations}
              addRegistration={addRegistration}
              updateRegistration={updateRegistration}
              deleteRegistration={deleteRegistration}
            />
          }
        />

        {/* EVENTS PAGE */}
        <Route
          path="/events"
          element={
            <EventsPage registrations={registrations} />
          }
        />

        {/* ADMIN PAGE */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App