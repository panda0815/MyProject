import { CustomThemeContext } from "@/contexts/CustomThemeContext";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import UserAccountHeader from "../../textGroup/UserAccountHeader";
import ProfileLink from "../buttonGroup/ProfileLink";
import Setting from "../buttonGroup/Setting";
import styled from "styled-components";

const AlarmBox = styled(Flex)`
  position: relative;
`;

const BadgeBox = styled(Box)`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: red;
`;

const StyledLogout = styled(Button)`
  margin: 5px 10px 10px 0;
  float: right;

  &:hover {
    opacity: 0.7;
  }
`;

const UserAccountPopover = () => {
  const { theme } = useContext(CustomThemeContext);

  const [show, setShow] = useState(false);
  const unReadMsg = 1;

  useEffect(() => {
    setShow(unReadMsg > 0);
  }, []);

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <AlarmBox>
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          {show && <BadgeBox />}
        </AlarmBox>
      </PopoverTrigger>
      <PopoverContent bg={theme.colors.bg}>
        <PopoverHeader border={"none"}>
          <UserAccountHeader />
        </PopoverHeader>
        <PopoverArrow bg={theme.colors.bg} />
        <PopoverBody border={"none"}>
          <ProfileLink unRead={unReadMsg} />
          <Divider />
          <Setting />
        </PopoverBody>
        <PopoverFooter borderTop={"1px solid"}>
          <StyledLogout
            variant={"link"}
            _hover={{ textDecoration: "none" }}
            color={theme.colors.text}
            fontSize={"20px"}
          >
            Logout
          </StyledLogout>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default UserAccountPopover;
