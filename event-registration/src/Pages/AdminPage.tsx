import { useState } from "react"
import AdminDashboard from "../Components/AdminDashboard"
import type { User } from "../Types/Type"

function AdminPage() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "Admin", role: "admin" },
    { id: 2, username: "User1", role: "user" }
  ])

  const changeRole = (id: number) => {
    setUsers(
      users.map((u) =>
        u.id === id
          ? {
              ...u,
              role: u.role === "admin" ? "user" : "admin"
            }
          : u
      )
    )
  }

  return (
    <div className="page">
      <AdminDashboard users={users} changeRole={changeRole} />
    </div>
  )
}

export default AdminPage