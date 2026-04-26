import React, { useState } from "react"
import type { Registration } from "../../Types/Type"
import "../../Styles/Forms.css"

interface Props {
  addRegistration: (reg: Registration) => void
}

const RegistrationForm: React.FC<Props> = ({ addRegistration }) => {
  const [name, setName] = useState("")
  const [event, setEvent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newReg: Registration = {
      id: Date.now(),
      name,
      event,
      status: "Registered"
    }

    addRegistration(newReg)

    setName("")
    setEvent("")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Event Registration</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Event"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  )
}

export default RegistrationForm