import { useState} from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(8)
    const [review, setReview] = useState("This is a Feedback text testing !")

    const handleClick = () =>{
        setRating(9)
    }

  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">
            {review}
        </div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem;
