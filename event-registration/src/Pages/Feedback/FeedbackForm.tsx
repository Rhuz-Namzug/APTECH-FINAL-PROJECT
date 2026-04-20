import React, { useState } from "react"
import type { Feedback } from "../../Types/Type"

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
  const [formData, setFormData] = useState<Feedback>({
    id: 0,
    name: "",
    event: "",
    comment: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editing) {
      updateFeedback(formData)
    } else {
      addFeedback({ ...formData, id: Date.now() })
    }
    
    setFormData({
      id: 0,
      name: "",
      event: "",
      comment: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editing ? "Edit Feedback" : "Add Feedback"}</h2>
      
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="event">Event:</label>
        <input
          id="event"
          type="text"
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit">{editing ? "Update" : "Add"} Feedback</button>
    </form>
  )
}

export default FeedbackForm