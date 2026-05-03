import type { Registration } from "../Types/Type"

interface Props {
  registrations?: Registration[]
}

function Events({ registrations = [] }: Props) {
  const events = [...new Set(registrations.map(r => r.event))]

  return (
    <div className="page">
      <h1>Registered Events</h1>

      {events.length === 0 && <p>No events yet.</p>}

      {events.map((event, index) => (
        <div key={index} className="card">
          <h3>{event}</h3>

          <p>Participants:</p>
          <ul>
            {registrations
              .filter(r => r.event === event)
              .map(p => (
                <li key={p.id}>{p.name}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Events