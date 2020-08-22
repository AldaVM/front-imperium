import styled from "@emotion/styled"

export const WrapperPayments = styled("ul")`
  display: flex;
  justify-content: center;
  align-items: center,
  background: teal;
`

export const CardPayment = styled("li")`
  background-color: ${props => props.background};
  padding: 2em .5em;
  width: 160px;
  height: 160px;
  border-radius: .3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 1rem;
  font-weight: var(--textBold);
  cursor: pointer;
  border: 2px solid #000;
  color: ${props => props.color};
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0);
  transition: background linear 1s;

  & span{
    cursor: text;
    line-height: 1.5;
    font-size: 1.7em;
  }

  &.active {
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);
    background: #000;
    color: #fff;
  }
`


