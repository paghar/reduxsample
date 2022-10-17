import React from "react"
import StarRating from "../StarRating"
import {
  CardWrapper,
  CardContent,
  CardImage,
  CardTitle,
  CardText,
  RankWrapper
} from "./index.style"
const Card = ({ image, title, context, rateValue, clicked }) => {
  return (
    <CardWrapper>
      <CardContent>
        <CardImage src={image} />
        <CardTitle>{title}</CardTitle>
        <CardText>{context}</CardText>
        <RankWrapper>
          <StarRating totalStars={5} rateValue={rateValue} clicked={clicked} />
        </RankWrapper>
      </CardContent>
    </CardWrapper>
  )
}

export default Card
