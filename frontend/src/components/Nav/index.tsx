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
      <FullscreenNav showBar={!store.isSmall} />
      <MobileNav showBar={store.isSmall} />
    </>
  );
};

export default Nav;
