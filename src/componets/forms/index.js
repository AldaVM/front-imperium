import styled from "@emotion/styled";
import { BREAKPOINTS, sizeMediaQuery } from "../shared";

export const Form = styled("form")`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth};
  padding: 1rem;
  width: 100%;

  ${sizeMediaQuery(BREAKPOINTS.s)} {
    flex-direction: column;
  }
`;

export const Select = styled.select`
  border: ${(props) =>
    props.error ? "2px solid #9e2a2b" : "2px solid var(--colorPrimary)"};
  border-radius: 0.3em;
  padding: 0.6em;
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
  border: ${(props) =>
    props.error ? "2px solid #9e2a2b" : "2px solid var(--colorPrimary)"};
  border-radius: 0.3em;
  padding: 0.6em;
  width: 100%;
  margin: 0.3rem 0;
  max-width: ${(props) => props.maxWidth};
  font-size: var(--fontSize);

  &:focus {
    border: 2px solid #457b9d;
    box-shadow: 1px 0px 3px 0px #457b9d;
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
  border: ${(props) =>
    props.error ? "2px solid #9e2a2b" : "2px solid var(--colorPrimary)"};
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
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  max-width: ${(props) => props.maxWidth};

  ${sizeMediaQuery(BREAKPOINTS.s)} {
    max-width: 100%;
  }
`;
