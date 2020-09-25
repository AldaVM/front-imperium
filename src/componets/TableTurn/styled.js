import styled from "@emotion/styled";

export const Table = styled("table")`
  border-collapse: collapse;
  width: 95%;
  padding: 0 1rem;
  margin: 2rem auto;

  & td,
  & th {
    border: 2px solid #dd170e;
    padding: 8px;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  & th {
    padding: 1em 0;
    background-color: #000000;
    color: #eab847;
    font-weight: 700;
  }

  & tr {
    background: #6c757d;
    color: #000;
    font-weight: 700;
  }
`;
