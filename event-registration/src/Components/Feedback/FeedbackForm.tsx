import React, { useState } from "react"
import type { Feedback } from "../../Types/Type"
import "../../Styles/Forms.css"

interface Props {
  addFeedback: (feedback: Feedback) => void
  updateFeedback: (feedback: Feedback) => void
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

    const newFeedback: Feedback = {
      id: editing ? editing.id : Date.now(),
      name,
      feedback,
      comment
    }

    if (editing) {
      updateFeedback(newFeedback)
    } else {
      addFeedback(newFeedback)
    }

    setName("")
    setFeedback("")
    setComment("")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Topic"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <textarea
        placeholder="Comment"
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