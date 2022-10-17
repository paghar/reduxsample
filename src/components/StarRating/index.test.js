import React from "react"
import renderer from "react-test-renderer"
import StarRating from "."
import { shallow, mount } from "enzyme"
describe("<StarRating />", () => {
  it("StarRating", () => {
    const tree = renderer
      .create(<StarRating totalStars="5" rateValue="3" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("StarRating Click Event", () => {
    const mockCallBack = jest.fn()
    const wrapper = mount(
      <StarRating totalStars="5" rateValue="3" clicked={mockCallBack} />
    )

    wrapper
      .find("div")
      .at(1)
      .simulate("click")
    expect(mockCallBack).toHaveBeenCalled()
  })
})
