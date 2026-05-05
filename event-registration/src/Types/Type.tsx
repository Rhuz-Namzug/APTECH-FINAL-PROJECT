export interface Feedback {
  id: number
  name: string
  feedback: string
  comment: string
}

export interface Registration {
  id: number
  name: string
  venue: string
  date: string
  email: string
  event: string
  participants: Participant[]
}

export interface User {
  id: number
  username: string
  role: "admin" | "user"
}

export interface Participant {
  id: number
  name: string
  email: string
}

export interface Props {
  feedbacks: Feedback[]
  addFeedback: (f: Feedback) => void
  deleteFeedback: (id: number) => void
  editFeedback: (f: Feedback) => void
  updateFeedback: (id: number, comment: string) => void
  editing: Feedback | null
}