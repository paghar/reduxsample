import React from "react"
import { Wrapper } from "./index.style"
const Button = ({ clicked, isStartTimer }) => {
  return (
    <Wrapper onClick={clicked}>
      <span>
        {isStartTimer ? "Start Random Rating" : "Stop Random Rating"}{" "}
      </span>
    </Wrapper>
  )
}

export default Button
