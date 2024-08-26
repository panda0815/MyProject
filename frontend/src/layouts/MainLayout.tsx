import TopNav from "@/components/nav/top";
import { BODY_TOP_MARGIN } from "@/components/Resposive";
import { MEDIA_DEVICE } from "@/utils/device";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Root = styled(Box)`
  min-height: calc(100vh - 100px);

  @media ${MEDIA_DEVICE.tablet} {
    min-height: calc(100vh - 50px);
  }
`;

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Root mt={BODY_TOP_MARGIN}>
      <TopNav />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Root>
  );
};

export default MainLayout;
