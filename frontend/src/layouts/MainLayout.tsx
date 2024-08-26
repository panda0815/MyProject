import Nav from "@/components/nav/top";
import { BODY_TOP_MARGIN } from "@/components/Resposive";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Root = styled(Box)`
  min-height: 100vh;
`;

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Root>
      <Nav />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Box mt={BODY_TOP_MARGIN}>{children}</Box>
        </motion.div>
      </AnimatePresence>
    </Root>
  );
};

export default MainLayout;
