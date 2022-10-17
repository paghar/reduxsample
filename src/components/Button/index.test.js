import React from "react"
import renderer from "react-test-renderer"
import Button from "."
import { shallow } from "enzyme"
describe("<Button />", () => {
  it("Button", () => {
    const tree = renderer.create(<Button isStartTimer={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  });

  it("Button Click Event", () => {
    const mockCallBack = jest.fn()
    const wrapper = shallow(
      <Button isStartTimer={false} clicked={mockCallBack} />
    )
    wrapper.simulate("click")
    expect(mockCallBack).toHaveBeenCalled()
  });
})
