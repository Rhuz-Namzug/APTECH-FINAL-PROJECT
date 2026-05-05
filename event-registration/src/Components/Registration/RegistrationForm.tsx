import React, { useState, useEffect } from "react"
import type { Participant, Registration } from "../../Types/Type"
import "../../Styles/Forms.css"

interface Props {
  addRegistration: (reg: Registration) => void
  updateRegistration: (reg: Registration) => void
  editingRegistration: Registration | null
  cancelEditRegistration: () => void
}

const RegistrationForm: React.FC<Props> = ({ 
  addRegistration, 
  updateRegistration, 
  editingRegistration,
  cancelEditRegistration
}) => {
  const [name, setName] = useState("")
  const [venue, setVenue] = useState("")
  const [date, setDate] = useState("")
  const [email, setEmail] = useState("")
  const [event, setEvent] = useState("")

  const [participants, setParticipants] = useState<Participant[]>([])
  const [pName, setPName] = useState("")
  const [pEmail, setPEmail] = useState("")

  const addParticipant = () => {
  if (!pName || !pEmail) return

  setParticipants([
    ...participants,
    {
      id: Date.now(),
      name: pName,
      email: pEmail
    }
  ])

  setPName("")
  setPEmail("")
}

const handleCancel = () => {
  clearForm()
  cancelEditRegistration()
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  if (editingRegistration) {
    updateRegistration({
      ...editingRegistration,
      name,
      venue,
      date,
      email,
      event,
      participants
    })
  } else {
    addRegistration({
      id: Date.now(),
      name,
      venue,
      date,
      email,
      event,
      participants
    })
  }

  setName("")
  setVenue("")
  setDate("")
  setEmail("")
  setEvent("")
  setParticipants([])
}

const handleRegister = (e: React.FormEvent) => {
  e.preventDefault()

  addRegistration({
    id: Date.now(),
    name,
    venue,
    date,
    email,
    event,
    participants
  })

  clearForm()
}

const handleUpdate = (e: React.FormEvent) => {
  e.preventDefault()

  if (!editingRegistration) return

  updateRegistration({
    ...editingRegistration,
    name,
    venue,
    date,
    email,
    event,
    participants
  })

  clearForm()
  cancelEditRegistration()
}

  const clearForm = () => {
  setName("")
  setVenue("")
  setDate("")
  setEmail("")
  setEvent("")
  setParticipants([])
}

  useEffect(() => {
  if (editingRegistration) {
    setName(editingRegistration.name)
    setVenue(editingRegistration.venue)
    setDate(editingRegistration.date)
    setEmail(editingRegistration.email)
    setEvent(editingRegistration.event)
    setParticipants(editingRegistration.participants)
  }
}, [editingRegistration])

  return (
    <form className="form">
      <h2>Event Registration</h2>
      <h4>Host Name</h4>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h4>Venue</h4>
      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
      />
      <h4>Date</h4>
      <input
        type="text"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <h4>Event</h4>
      <input
        type="text"
        placeholder="Event"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />

      <h4>Participants</h4>

<input
  type="text"
  placeholder="Participant Name"
  value={pName}
  onChange={(e) => setPName(e.target.value)}
/>

<input
  type="text"
  placeholder="Participant Email"
  value={pEmail}
  onChange={(e) => setPEmail(e.target.value)}
/>

<button type="button" onClick={addParticipant}>
  Add Participant
</button>

<ul>
  {participants.map(p => (
    <li key={p.id}>
      {p.name} ({p.email})
    </li>
  ))}
</ul>


  {editingRegistration ? (
  <div>
    <button type="button" onClick={handleUpdate}>
      Update
    </button>

    <button type="button" onClick={handleCancel}>
      Cancel
    </button>
  </div>
) : (
  <button type="button" onClick={handleRegister}>
    Register
  </button>
)}
    </form>
  )
}

export default RegistrationForm