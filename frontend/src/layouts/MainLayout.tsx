import Nav from "@/components/Nav";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const Root = styled(Box)`
  min-height: 100vh;
`;

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Root>
      <Nav>{children}</Nav>
    </Root>
  );
};

export default MainLayout;
