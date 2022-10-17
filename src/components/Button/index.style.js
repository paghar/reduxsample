import styled from "styled-components"

export const Wrapper = styled.button`
  border-radius: 4px;
  background: linear-gradient(
    236deg,
    rgba(252, 201, 169, 1) 13%,
    rgba(255, 253, 252, 1) 28%,
    rgba(252, 201, 169, 1) 52%,
    rgba(255, 253, 252, 1) 78%,
    rgba(252, 201, 169, 1) 93%
  );
  border: 2px solid #ff66b3;
  color: #ff66b3;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px 30px;
  transition: all 0.4s;
  cursor: pointer;
  margin: 5px;
  -webkit-user-select: none;  
  -moz-user-select: none;    
  -ms-user-select: none;     
  user-select: none;         

  :hover {
    border: 2px solid #ff1a8c;
    color: #ff1a8c;
    -webkit-box-shadow: 0px 0px 26px -1px rgba(255, 102, 179, 0.45);
    box-shadow: 0px 0px 26px -1px rgba(255, 102, 179, 0.45);
  }
`
