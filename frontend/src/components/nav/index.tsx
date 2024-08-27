import { useStore } from "@/hooks/useStore";
import FullscreenNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";

const Root = styled(Box)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background: ${(props) => props.theme.colors.bg};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;
const TopNav = () => {
  const { store } = useStore();

  return (
    <Root>
      <FullscreenNav showBar={!store.isSmall} />
      <MobileNav showBar={store.isSmall} />
    </Root>
  );
};

export default TopNav;
