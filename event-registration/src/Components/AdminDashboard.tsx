import React from "react"
import type { User } from "../Types/Type"

interface AdminDashboardProps {
  users: User[]
  changeRole: (id: number) => void
  deleteUser: (id: number) => void 
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  users,
  changeRole,
  deleteUser
}) => {
  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Dashboard</h1>

      <div className="admin-users">
        {users.map((user) => (
          <div key={user.id} className="admin-card">
            <h3>{user.username}</h3>

            <p className={`admin-role ${user.role === "admin" ? "role-admin" : "role-user"}`}>
              Role: {user.role}
            </p>

            <div className="admin-actions">
              <button
                className="admin-btn"
                onClick={() => changeRole(user.id)}
              >
                Change Role
              </button>

              <button
                className="admin-delete"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default AdminDashboard