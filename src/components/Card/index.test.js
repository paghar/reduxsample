import React from "react"
import renderer from "react-test-renderer"
import Card from "."
import { mount } from "enzyme"
import Image1 from "../../assets/image/1.jpg"
describe("<Card />", () => {
  it("Card", () => {
    const tree = renderer
      .create(
        <Card
          image={Image1}
          title="Chicken fried steak"
          context="chicken fried steak was born"
          rateValue="1"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("Card Click Event", () => {
    const mockCallBack = jest.fn()
    const wrapper = mount(
      <Card
        image={Image1}
        title="Chicken fried steak"
        context="chicken fried steak was born"
        rateValue="1"
        clicked={mockCallBack}
      />
    )

    wrapper
      .find("div")
      .at(5)
      .simulate("click")
    expect(mockCallBack).toHaveBeenCalled()
  })
})
