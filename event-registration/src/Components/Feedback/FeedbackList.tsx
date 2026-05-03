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
    <div className="feedback-list">
      <h2>Feedback List</h2>
      <br />

      {feedbacks.map((f) => (
        <div key={f.id} className="card2">
          <h4>Name: {f.name}</h4>
          <p><b>Attended Event: </b> {f.feedback}</p>
          <p><b>Feedback: </b>{f.comment}</p>

          <button onClick={() => editFeedback(f)}>Edit</button>
          <button onClick={() => deleteFeedback(f.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default FeedbackList