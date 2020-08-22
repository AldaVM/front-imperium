import styled from "@emotion/styled"

export const Button = styled.button`
  align-self: ${props => props.alignSelf};
  cursor: pointer;
  display: block;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-weight: var(--textBold);
  letter-spacing: 1px;
  border-radius: 0.3em;
  box-shadow: none;
  margin-top: .5rem;
  padding: 1.3em 2em; 
  font-size: var(--fontSize);
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
  &:active {
    color: #000000;
    background-color: #2ec4b6;
  }
  &[disabled] {
    color: gray;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
    border: 2px solid 9e2a2b;
  }
  & i {
    margin-right: 0.3em;
  }
`;
