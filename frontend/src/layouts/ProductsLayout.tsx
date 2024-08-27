import DesktopCategory from "@/components/category/DesktopCategory";
import DesktopProductContainer from "@/components/list/DesktopProductContainer";
import { useStore } from "@/hooks/useStore";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import styled from "styled-components";

const Root = styled(Box)`
  padding: 15px;
`;

type Props = {
  children?: React.ReactNode;
};

const ProductsLayout: React.FC<Props> = ({ children }) => {
  const { store } = useStore();

  return (
    <Root>
      <Grid
        minH={"calc(100vh - 130px)"}
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} borderRight={"1px solid"} overflow="hidden">
          <DesktopCategory />
        </GridItem>
        <GridItem colSpan={5}>
          <DesktopProductContainer />
        </GridItem>
      </Grid>
    </Root>
  );
};

export default ProductsLayout;
