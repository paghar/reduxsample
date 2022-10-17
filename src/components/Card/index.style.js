import styled from "styled-components"

export const CardWrapper = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const CardContent = styled.div`
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
`

export const CardTitle = styled.h2`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-left: 1rem;
`
export const CardImage = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: middle;
`

export const CardText = styled.p`
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0rem 0.2rem 1.25rem 1rem;
  font-weight: 400;
`
export const RankWrapper = styled.div`
  color: #ffffff;
  padding: 0.8rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  background-color: rgba(255, 255, 255, 0.12);
  margin: 0rem 0.5rem 1.25rem 0.5rem;
`
