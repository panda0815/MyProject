import { CustomThemeContext } from "@/contexts/CustomThemeContext";
import {
  Avatar,
  Button,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useContext } from "react";
import UserAccountHeader from "../../textGroup/UserAccountHeader";
import ProfileLink from "../buttonGroup/ProfileLink";
import Setting from "../buttonGroup/Setting";
import styled from "styled-components";

const StyledLogout = styled(Button)`
  margin: 5px 10px 10px 0;
  float: right;

  &:hover {
    opacity: 0.7;
  }
`;

const UserAccountPopover = () => {
  const { theme } = useContext(CustomThemeContext);

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      </PopoverTrigger>
      <PopoverContent bg={theme.colors.bg}>
        <PopoverHeader border={"none"}>
          <UserAccountHeader />
        </PopoverHeader>
        <PopoverArrow bg={theme.colors.bg} />
        <PopoverCloseButton />
        <PopoverBody border={"none"}>
          <ProfileLink />
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
