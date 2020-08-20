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
  border: 3px solid transparent;
  cursor: pointer;

  & span{
    cursor: text;
    line-height: 1.5;
    font-size: 1.7em;
  }

  &.active {
    border: 3px solid teal;
  }
`


