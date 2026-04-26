export interface Feedback {
  id: number
  name: string
  feedback: string
  comment: string
}

export interface Registration {
  id: number
  name: string
  event: string
  status: string
}

export interface User {
  id: number
  username: string
  role: "admin" | "user"
}