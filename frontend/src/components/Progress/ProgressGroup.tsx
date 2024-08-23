import { Progress } from "@chakra-ui/react";
import styled from "styled-components";
import { SLIDE_PROGRESS_HEIGHT } from "../Resposive";

const StyledProgress = styled(Progress)`
  margin: 5px;
`;

type Props = {
  values: Array<number>;
};

const ProgressGroup: React.FC<Props> = ({ values }) => {
  return (
    <>
      {values.map((value, index) => {
        return (
          <StyledProgress
            w={SLIDE_PROGRESS_HEIGHT}
            key={index}
            value={value}
            size={"xs"}
          />
        );
      })}
    </>
  );
};

export default ProgressGroup;
