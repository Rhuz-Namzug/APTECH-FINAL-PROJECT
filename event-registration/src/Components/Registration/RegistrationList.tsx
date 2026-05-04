import React, { useState } from "react"
import type { Registration, Participant } from "../../Types/Type"

interface Props {
  registrations: Registration[]
  deleteRegistration: (id: number) => void
  updateRegistration: (updated: Registration) => void
}

const RegistrationList: React.FC<Props> = ({
  registrations,
  deleteRegistration,
  updateRegistration
}) => {

  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")

  const addParticipant = (reg: Registration) => {
    if (!newName || !newEmail) return

    const updated: Registration = {
      ...reg,
      participants: [
        ...reg.participants,
        {
          id: Date.now(),
          name: newName,
          email: newEmail
        }
      ]
    }

    updateRegistration(updated)
    setNewName("")
    setNewEmail("")
  }

  const removeParticipant = (reg: Registration, pid: number) => {
    const updated: Registration = {
      ...reg,
      participants: reg.participants.filter(p => p.id !== pid)
    }

    updateRegistration(updated)
  }

  return (
    <div className="event-list">
      <h2>&nbsp;&nbsp;Event List</h2>

      {registrations.map((r) => (
        <div key={r.id} className="card">
          <table className="table">
            <tr>
              <td className="left">
          <h3>Host Name: {r.name}</h3>
          <p><b>Venue:</b> {r.venue}</p>
          <p><b>Date:</b> {r.date}</p>
          <p><b>Event:</b> {r.event}</p>
              </td>


              <td className="right">
                          <h4>Participants:</h4>
          <ul>
            {r.participants.map((p) => (
              <li key={p.id}>
                {p.name} ({p.email})
                <button onClick={() => removeParticipant(r, p.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <input
            placeholder="New Participant Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            placeholder="New Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button onClick={() => addParticipant(r)}>
            Add Participant
          </button>

          <br /><br />
              </td>
            </tr>
          </table>
          <button onClick={() => deleteRegistration(r.id)}>
            Unregister
          </button>
        </div>
      ))}
    </div>
  )
}

export default RegistrationList