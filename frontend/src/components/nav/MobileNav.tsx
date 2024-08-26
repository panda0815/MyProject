import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import MenuList from "./MobileMenu";

const Root = styled(Box)`
  width: 100%;
  height: 50px;
  padding: 10px 30px;
`;

const MenuIconContainer = styled(Flex)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

type Props = {
  children?: React.ReactNode;
  showBar: Boolean;
};

const MobileNav: React.FC<Props> = ({ children, showBar }) => {
  const [showMenuList, setShowMenuList] = useState<Boolean>(false);

  const isShow = (status: Boolean) => {
    console.log(status);
    setShowMenuList(status);
  };

  return (
    <Root display={showBar ? "block" : "none"}>
      <Flex alignItems={"center"}>
        <Box>
          <Heading size={"md"} userSelect={"none"}>
            icon place
          </Heading>
        </Box>
        <Spacer />
        <MenuIconContainer onClick={() => isShow(true)}>
          <HamburgerIcon boxSize={5} />
        </MenuIconContainer>
      </Flex>
      {showMenuList && <MenuList onClose={() => isShow(false)} />}
    </Root>
  );
};

export default MobileNav;
