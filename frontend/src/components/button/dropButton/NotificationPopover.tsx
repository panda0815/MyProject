import {
  Box,
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import styled from "styled-components";
import NotificationList from "../../list/NotificationList";
import ScrollContainer from "react-indiana-drag-scroll";

const AlarmBox = styled(Flex)`
  position: relative;
`;

const BadgeBox = styled(Box)`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: red;
`;

const NotificationBox = styled(Box)`
  max-height: 150px;
`;

const NotificationPopover = () => {
  const [show, setShow] = useState(false);

  const testTexts = [
    "There is some notifications. There is some notifications. There is some notifications.",
    "There is some notifications. There is some notifications.",
  ];

  useEffect(() => {
    setShow(testTexts.length > 0);
  }, [testTexts.length]);

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <AlarmBox>
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme={"inherit"}
            color={"inherit"}
            aria-label="Done"
            fontSize="25px"
            icon={<HiOutlineBell />}
          />
          {show && <BadgeBox />}
        </AlarmBox>
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Notification
        </PopoverHeader>
        <PopoverArrow bg="blue.800" />
        <PopoverCloseButton />
        <PopoverBody>
          {show ? (
            <ScrollContainer>
              <NotificationBox>
                <NotificationList items={testTexts} />
              </NotificationBox>
            </ScrollContainer>
          ) : (
            <NotificationList>There is no notification.</NotificationList>
          )}
        </PopoverBody>
        <PopoverFooter borderTop="1px solid">
          <Text textAlign={"center"}>See All Notifications</Text>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
