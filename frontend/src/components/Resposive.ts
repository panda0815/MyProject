import { css } from "@emotion/react";

export const HOME_SLIDER_HEIGHT = {
  base: "250px",
  sm: "350px",
  md: "450px",
  lg: "550px",
  xl: "650px",
};

export const SLIDE_PROGRESS_HEIGHT = {
  base: "50px",
  sm: "60px",
  md: "70px",
  lg: "80px",
  xl: "90px",
};

export const BODY_TOP_MARGIN = {
  base: "60px",
  sm: "60px",
  md: "60px",
  lg: "100px",
  xl: "100px",
};

export const PRODUCT_GRID_COLUMN = css`
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 2000px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 2400px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (min-width: 2800px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;
