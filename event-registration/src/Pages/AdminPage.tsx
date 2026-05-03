import { useState } from "react"
import AdminDashboard from "../Components/AdminDashboard"
import type { User } from "../Types/Type"
import "../Styles/admin.css"

function AdminPage() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "Admin", role: "admin" }
  ])

  const [username, setUsername] = useState("")
  const [role, setRole] = useState<"admin" | "user">("user")

  const addUser = () => {
    if (!username.trim()) return

    const newUser: User = {
      id: Date.now(),
      username,
      role
    }

    setUsers((prev) => [...prev, newUser])

    // reset form
    setUsername("")
    setRole("user")
  }

  const changeRole = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, role: u.role === "admin" ? "user" : "admin" }
          : u
      )
    )
  }

const deleteUser = (id: number) => {
  setUsers((prev) => prev.filter((u) => u.id !== id))
}

  return (
    <div className="admin-page">
      
      {}
      <div className="admin-add">
        <h2>Add User</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value as "admin" | "user")
          }
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button onClick={addUser}>Add User</button>
      </div>

      <AdminDashboard
  users={users}
  changeRole={changeRole}
  deleteUser={deleteUser}
/>
    </div>
  )
}

export default AdminPage