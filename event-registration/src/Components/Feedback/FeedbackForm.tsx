import React, { useEffect, useState } from "react"
import type { Feedback } from "../../Types/Type"
import "../../Styles/Forms.css"

interface Props {
  addFeedback: (feedback: Feedback) => void
  updateFeedback: (id: number, comment: string) => void
  editing: Feedback | null
}


const FeedbackForm: React.FC<Props> = ({
  addFeedback,
  updateFeedback,
  editing
}) => {
  const [name, setName] = useState("")
  const [feedback, setFeedback] = useState("")
  const [comment, setComment] = useState("")

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  if (editing) {
    updateFeedback(editing.id, comment)
  } else {
    const newFeedback = {
      id: Date.now(),
      name,
      feedback,
      comment
    }

      setName("")
      setFeedback("")
      setComment("")

    addFeedback(newFeedback)
  }
}

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>
      <h4>Username</h4>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        <h4>Attended Event</h4>  
      <input
        type="text"
        placeholder="Event Attended"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <h4>Feedback</h4>
      <textarea
        placeholder="Feedback"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="submit">
        {editing ? "Update" : "Submit"}
      </button>
    </form>
  )
}

export default FeedbackForm