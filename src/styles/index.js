import emotionReset from "emotion-reset";
import { css, Global } from "@emotion/core";

export const globalStyle = (
  <Global
    styles={css`
      ${emotionReset}
      /*Variables*/
      :root {
        /*Colores */
        --colorPrimary: #05544A;
        --colorSecondary: #eab847;
        --colorIsFail: #e63946;
        --colorIsValid: #0077b6;
        /*Tipografía */
        --fontFamily: "Roboto Condensed", sans-serif;
        --fontSize: 15px;
        --textBold: 700;
        --textLight: 300;
        --fontSizeH1: 2rem;
        --fontSizeH2: 1.5rem;
        --fontSizeH3: 1.2rem;
        --fontSizeH4: 1.1rem;
        --fontSizeSubtitle: 1rem;
        --fontSizeButton: 1rem;
        --fontSizeCaption: 0.75rem;
        --zIndex: 1;
        --zModal: 2000;
        @media (max-width: 800px) {
          --fontSizeH1: 2.3rem;
          --fontSizeH2: 1.8rem;
          --fontSizeH3: 1.5rem;
          --fontSizeH4: 1.2rem;
          --fontSizeSubtitle: 1rem;
          --fontSizeButton: 1rem;
          --fontSizeCaption: 0.75rem;
        }
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        font-family: var(--fontFamily);
      }
      body {
        font-family: var(--fontFamily);
        font-size: var(--fontSize);
        letter-spacing: 0.0125rem;
        background-image:
          radial-gradient(var(--colorPrimary) 1px, #fdfdfd 1px),
          radial-gradient(var(--colorPrimary) 1px, #fdfdfd 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
      }

      h1 {
        font-size: var(--fontSizeH1);
        font-weight: var(--textBold);
        letter-spacing: -0.09375rem;
        text-align: center;
      }
      h2 {
        font-size: var(--fontSizeH2);
        font-weight: var(--textBold);
        letter-spacing: -0.03125;
        margin-bottom: 1rem;
      }
      h3 {
        font-size: var(--fontSizeH3);
        font-weight: var(--textBold);
        margin-bottom: 1rem;
      }
      h4 {
        font-size: var(--fontSizeH4);
        font-weight: var(--textBold);
        letter-spacing: 0.015625rem;
      }
      button, input[type="submit"], input[type="reset"] {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }
    `}
  />
);