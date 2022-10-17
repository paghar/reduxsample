import React from "react"
import renderer from "react-test-renderer"
import CardGrid from "."
import { CardsData } from "../../constants/CardsData"

describe("<CardGrid />", () => {
  it("CardGrid", () => {
    const tree = renderer.create(<CardGrid CardsData={CardsData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
