import FeedbackForm from "../Components/Feedback/FeedbackForm"
import FeedbackList from "../Components/Feedback/FeedbackList"
import type { Feedback } from "../Types/Type"
import "../Styles/FeedbackPage.css"

interface Props {
  feedbacks: Feedback[]
  addFeedback: (f: Feedback) => void
  deleteFeedback: (id: number) => void
  editFeedback: (f: Feedback) => void
  updateFeedback: (id: number, comment: string) => void
  editing: Feedback | null
}

function FeedbackPage({
  feedbacks,
  addFeedback,
  deleteFeedback,
  editFeedback,
  updateFeedback,
  editing
}: Props) {
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