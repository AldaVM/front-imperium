import styled from "@emotion/styled"

export const StepContent = styled("li")`
  list-style-type: none;
  float: left;
  width: 33%;
  position: relative;
  text-align: center;
  font-weight: var(--textBold);

  &::before{
    content: "${props => props.numberStep}";
    line-height: 30px;
    border-radius: 50%;
    position: relative;
    width: 40px;
    height: 40px;
    border: 2px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 10px;
    background-color: #ddd;
    font-weight: var(--textBold);
    
  }

  &::after{
    content: " ";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: -1;
  }

  &:first-child::after {
    content: none;
  }

  &.active {
    color: #000;
  }

  &.active::before {
    border-color: #2ec4b6;
    background-color: #2ec4b6;;
  }

  &.active::after {
    background-color: #2ec4b6;
  }

  &.inactive {
    color: #000;
  }
  &.active span{
    color: #000;
  }

  & span{
    display: inline-block;
    line-hight: 1.5;
    color: #ccc;
    max-width: 75%;
    text-align: center;
  }


`