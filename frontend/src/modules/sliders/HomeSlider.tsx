import SlideProgress from "@/components/progress/SlideProgress";
import { HOME_SLIDER_HEIGHT } from "@/components/Resposive";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";

const Root = styled(Box)`
  position: relative;
  width: 100%;
  background: ${(props) => props.theme.colors.grey};
`;

const HomeSlider = () => {
  const [currentId, setCurrentId] = useState(0);

  const onChangeId = (id: number) => {
    setCurrentId(id);
  };

  return (
    <Root h={HOME_SLIDER_HEIGHT}>
      <Box textAlign={"center"}>image {currentId}</Box>
      <SlideProgress count={3} onChangeId={onChangeId} />
    </Root>
  );
};

export default HomeSlider;
