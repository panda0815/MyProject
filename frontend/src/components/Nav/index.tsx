import { useStore } from "@/hooks/useStore";
import FullscreenNav from "./FullscreenNav";
import MobileNav from "./MobileNav";

type Props = {
  children?: React.ReactNode;
};

const Nav: React.FC<Props> = ({ children }) => {
  const { store } = useStore();

  return (
    <>
      <FullscreenNav showBar={!store.isMobile}>{children}</FullscreenNav>

      <MobileNav showBar={store.isMobile}>{children}</MobileNav>
    </>
  );
};

export default Nav;
