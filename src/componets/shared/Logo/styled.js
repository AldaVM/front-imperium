import styled from "@emotion/styled";

export const LogoContainer = styled("div")`
  width: 100%;
  max-width: ${(props) => props.maxWidth};

  img {
    width: 100%;
    vertical-align: center;
  }

  @media (max-width: 800px) {
    max-width: 150px;
  }
`;
