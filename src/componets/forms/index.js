import styled from "@emotion/styled"
import { BREAKPOINTS, sizeMediaQuery } from "../shared"


export const Form = styled("form")`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth};
  padding: 1rem;
  width: 100%;

  ${sizeMediaQuery(BREAKPOINTS.s)}{
    flex-direction: column;
  }
`

export const Select = styled.select`
  border: ${(props) => props.error ? "2px solid #9e2a2b" : "2px solid #2ec4b6"};
  border-radius: 0.3em;
  padding: 0.8em;
  background-color: #fff;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  font-size: var(--fontSize);
  margin: 0.3rem 0;
  -webkit-appearance: none;
  &:focus {
    border-color: #00b4d8;
  }
  &[disabled] {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
  }
  option {
    padding: 0;
    font-size: var(--fontSize);
  }
`;

export const Label = styled.label`
  font-size: var(--fontSize);
  color: #000000;
  font-weight: var(--textBold);
`;

export const Input = styled.input`
  border: ${(props) => props.error ? "2px solid #9e2a2b" : "2px solid #2ec4b6"};
  border-radius: 0.3em;
  padding: 0.8em;
  width: 100%;
  margin: 0.3rem 0;
  max-width: ${(props) => props.maxWidth};
  font-size: var(--fontSize);
  &:focus {
    border-color: 2px solid #00b4d8;
  }
  &[disabled] {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
  }
  &::placeholder {
    color: inherit;
  }
`;

export const Textarea = styled.textarea`
  border: ${(props) => props.error ? "2px solid #9e2a2b" : "2px solid #2ec4b6"};;
  font-size: var(--fontSize);
  border-radius: 0.3em;
  padding: 0.6em;
  margin: 0.3rem 0;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  &:focus {
    border-color: #00b4d8;
  }
  &[disabled] {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
  }
  &::placeholder {
    color: inherit;
    font-size: var(--fontSize);
  }
`;

export const WrapperInput = styled.div`
  display: block;
  width: 100%;
  margin-top: .5rem;
  margin-bottom: .5rem;
  max-width: ${props => props.maxWidth};

  ${sizeMediaQuery(BREAKPOINTS.s)}{
    max-width: 100%;
  }
`;

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




