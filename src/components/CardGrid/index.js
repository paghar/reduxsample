import React, { useState } from "react"
import { Main, Cards, CardsItem } from "./index.style"
import Card from "../Card"
import Button from "../Button"

const CardGrid = ({ CardsData, updateList, randomRatingButton }) => {
  const [isStartTimer, setStartTimer] = useState(true)
  const [timer, setTimer] = useState(null)

  function randomRating() {
    setStartTimer(!isStartTimer)
    if (isStartTimer) {
      setTimer(
        setInterval(() => {
          randomRatingButton()
        }, 3000)
      )
    } else {
      clearInterval(timer)
    }
  }

  return (
    <Main>
      <Button
        clicked={() => randomRating()}
        isStartTimer={isStartTimer}
      ></Button>
      <Cards>
        {CardsData.map(item => (
          <CardsItem key={item.id}>
            <Card
              image={item.image}
              title={item.title}
              context={item.context}
              rateValue={item.rate}
              clicked={value => updateList(value, item.id)}
            />
          </CardsItem>
        ))}
      </Cards>
    </Main>
  )
}

export default CardGrid
