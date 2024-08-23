import Nav from "@/components/Nav";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
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
      <Nav />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Root>
  );
};

export default MainLayout;
