import React from "react"
import type { Feedback } from "../../Types/Type"

interface Props {
  feedbacks: Feedback[]
  deleteFeedback: (id: number) => void
  editFeedback: (feedback: Feedback) => void
}

const FeedbackList: React.FC<Props> = ({
  feedbacks,
  deleteFeedback,
  editFeedback
}) => {
  return (
    <div>
      <h2>Feedback List</h2>

      {feedbacks.map((f) => (
        <div key={f.id} className="card">
          <h3>{f.name}</h3>
          <p>Feedback: {f.feedback}</p>
          <p>{f.comment}</p>

          <button onClick={() => editFeedback(f)}>Edit</button>
          <button onClick={() => deleteFeedback(f.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default FeedbackList