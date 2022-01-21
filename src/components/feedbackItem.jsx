import { useState} from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(8)
  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">
            This is a Feedback text testing !
        </div>
    </div>
  )
}

export default FeedbackItem;
