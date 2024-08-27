import { Grid, GridItem } from "@chakra-ui/react";
import styled from "styled-components";
import ProductCard from "../card/ProductCard";
import { css } from "@emotion/react";
import { PRODUCT_GRID_COLUMN } from "../Resposive";

const Root = styled(Grid)``;

const StyledGridItem = styled(GridItem)`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const DesktopProductContainer = () => {
  const testItems = Array(10).fill(0);

  return (
    <Root css={PRODUCT_GRID_COLUMN}>
      {testItems.map((item, index) => {
        return (
          <StyledGridItem key={index}>
            <ProductCard />
          </StyledGridItem>
        );
      })}
    </Root>
  );
};

export default DesktopProductContainer;
