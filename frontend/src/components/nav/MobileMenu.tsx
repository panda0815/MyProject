import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { NAV_ITEMS } from "../constants";

const Root = styled(Box)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  background: ${(props) => props.theme.colors.menuBg};
  z-index: 9999;
`;

const ImgBox = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 50px;
  opacity: 50%;
  align-items: center;
  justify-content: center;
`;

const MenuContainer = styled(Box)`
  height: 100%;
`;

const CloseIconBox = styled(Flex)`
  float: right;
`;

const MenuBox = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  color: ${(props) => props.theme.colors.menuText};
`;

const StyledLink = styled(Link)`
  font-size: 24px;

  &:hover {
    color: ${(props) => props.theme.colors.menuActiveText};
    text-decoration: "none";
  }

  &.active {
    color: ${(props) => props.theme.colors.menuActiveText};
  }
`;

type Props = {
  onClose?: () => void;
};

const MobileMenu: React.FC<Props> = ({ onClose }) => {
  const router = useRouter();

  const isActive = useCallback(
    (url: string) => {
      if (!url) return false;
      if (url === "/") {
        if (router.asPath === "/") return true;
        return false;
      }
      return router.asPath.startsWith(url);
    },
    [router.asPath]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Root>
        <ImgBox>
          <Heading size={"sm"} userSelect={"none"}>
            Here is Dota Icon
          </Heading>
        </ImgBox>
        <MenuContainer>
          <CloseIconBox>
            <CloseIcon onClick={onClose} />
          </CloseIconBox>
          <MenuBox>
            {NAV_ITEMS.map((item) => {
              return (
                <StyledLink
                  _hover={{ textDecoration: "none" }}
                  key={item.url}
                  href={item.url}
                  className={isActive(item.url) ? "active" : ""}
                >
                  {item.label}
                </StyledLink>
              );
            })}
          </MenuBox>
        </MenuContainer>
      </Root>
    </motion.div>
  );
};

export default MobileMenu;
