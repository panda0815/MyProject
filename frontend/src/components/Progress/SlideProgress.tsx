import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
import ProgressGroup from "./ProgressGroup";
import { useEffect, useState } from "react";

const ProgressBox = styled(Flex)`
  position: absolute;
  bottom: 10px;
  width: 100%;
  justify-content: center;
`;

type Props = {
  count: number;
  onChangeId: (id: number) => void;
};

const SlideProgress: React.FC<Props> = ({ count, onChangeId }) => {
  const [values, setValues] = useState(Array(count).fill(0));
  const [currentId, setCurrentId] = useState(0);
  const maxValue = 100;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValues((prevValues) => {
        const newValues = [...prevValues];
        if (newValues[currentId] < maxValue) {
          newValues[currentId]++;
        } else {
          // newValues[currentId] = 0;
          if (currentId < count - 1) {
            setCurrentId(currentId + 1);
            onChangeId(currentId + 1);
          } else {
            for (let i = 0; i < count; i++) newValues[i] = 0;
            setCurrentId(0);
            onChangeId(0);
          }
        }
        return newValues;
      });
    }, 50);
    return () => clearInterval(intervalId);
  }, [currentId, count, onChangeId]);

  return (
    <ProgressBox>
      <ProgressGroup values={values} />
    </ProgressBox>
  );
};

export default SlideProgress;
