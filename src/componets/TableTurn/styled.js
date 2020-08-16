import styled from "@emotion/styled"

export const Table = styled("table")`
  border-collapse: collapse;
  width: 100%;
  margin: 2rem 1rem;

  & td, & th{
    border: 3px solid #2ec4b6;
    padding: 8px;
    text-align: center;
    text-transform: uppercase;
  }

  & th {
    padding: 1em 0;
    background-color: #2A9D8F;
    color: white;
    font-weight: 700;
  }

  & tr:nth-child(even){background-color: #f2f2f2;}
`

