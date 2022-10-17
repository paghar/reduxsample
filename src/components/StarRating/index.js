import React from "react"
import "./styles.css"

const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
)

const StarRating = ({ totalStars, rateValue, clicked }) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={i < rateValue} onClick={() => clicked(i + 1)} />
      ))}
    </div>
  )
}

export default StarRating
