import { useState } from "react"
import FeedbackForm from "../Components/Feedback/FeedbackForm"
import FeedbackList from "../Components/Feedback/FeedbackList"
import type { Feedback } from "../Types/Type"
import "../Styles/FeedbackPage.css"

function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [editing, setEditing] = useState<Feedback | null>(null)

  const addFeedback = (f: Feedback) => {
    setFeedbacks([...feedbacks, f])
  }

  const deleteFeedback = (id: number) => {
    setFeedbacks(feedbacks.filter((f) => f.id !== id))
  }

  const editFeedback = (f: Feedback) => {
    setEditing(f)
  }

  const updateFeedback = (updated: Feedback) => {
    setFeedbacks(
      feedbacks.map((f) =>
        f.id === updated.id ? updated : f
      )
    )
    setEditing(null)
  }

  return (
    <div className="page">
      <FeedbackForm
        addFeedback={addFeedback}
        updateFeedback={updateFeedback}
        editing={editing}
      />

      <FeedbackList
        feedbacks={feedbacks}
        deleteFeedback={deleteFeedback}
        editFeedback={editFeedback}
      />
    </div>
  )
}

export default FeedbackPage