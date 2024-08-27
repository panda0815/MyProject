import { CustomThemeContext } from "@/contexts/CustomThemeContext";
import {
  Avatar,
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
        <PopoverBody border={"none"}></PopoverBody>
        <PopoverFooter border={"none"}>nmbnmnmnb</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default UserAccountPopover;
