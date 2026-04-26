import React from "react"
import type { Registration } from "../../Types/Type"

interface Props {
  registrations: Registration[]
  deleteRegistration: (id: number) => void
}

const RegistrationList: React.FC<Props> = ({
  registrations,
  deleteRegistration
}) => {
  return (
    <div>
      <h2>Event List</h2>

      {registrations.map((r) => (
        <div key={r.id} className="card">
          <h3>{r.name}</h3>
          <p>Event: {r.event}</p>
          <p>Status: {r.status}</p>

          <button onClick={() => deleteRegistration(r.id)}>
            Unregister
          </button>
        </div>
      ))}
    </div>
  )
}

export default RegistrationList