import NewProductCards from "@/components/cards/NewProductCards";
import { Box, Heading } from "@chakra-ui/react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";

const Root = styled(Box)`
  position: relative;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`;

const HScroll = styled(Box)`
  display: inline-flex;
  background: "none";
`;

const HeadTitle = styled(Heading)`
  padding: 10px;
`;

const News = () => {
  return (
    <Root>
      <HeadTitle>New Products</HeadTitle>
      <ScrollContainer>
        <HScroll>
          <NewProductCards />
        </HScroll>
      </ScrollContainer>
    </Root>
  );
};

export default News;
