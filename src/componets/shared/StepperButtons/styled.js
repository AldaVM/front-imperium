import styled from "@emotion/styled"

export const WrapperStepsButtons = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4em 1rem;
`

export const ButtonStep = styled("span")`
  align-self: ${props => props.alignSelf};
  cursor: pointer;
  display: block;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-weight: var(--textBold);
  letter-spacing: 1px;
  border-radius: 0.3em;
  box-shadow: none;
  padding: 1.3em 2em; 
  font-size: var(--fontSize);
  &:active {
    color: #000000;
    background-color: #2ec4b6;
  }
  &[disabled] {
    color: gray;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
    border: 3px solid 9e2a2b;
  }
  & i {
    margin-right: 0.3em;
  }
`;