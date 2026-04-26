import React from "react"
import type { User } from "../Types/Type"

interface Props {
  users: User[]
  changeRole: (id: number) => void
}

const AdminDashboard: React.FC<Props> = ({
  users,
  changeRole
}) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      {users.map((user) => (
        <div key={user.id} className="card">
          <h3>{user.username}</h3>
          <p>Role: {user.role}</p>

          <button onClick={() => changeRole(user.id)}>
            Change Role
          </button>
        </div>
      ))}
    </div>
  )
}

export default AdminDashboard