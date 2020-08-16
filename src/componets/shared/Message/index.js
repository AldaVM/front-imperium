import styled from "@emotion/styled"

export const MessageResponse = styled("span")`
  display: inline-block;
  padding: 1em;
  text-align: center;
  font-size: 1.8em;
  width: 100%;
  color: ${props => props.color ? props.color : "#000000"};

`