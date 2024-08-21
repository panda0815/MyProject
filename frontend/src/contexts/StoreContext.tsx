import { DEVICE_SIZE } from "@/utils/device";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type ViewSize = {
  width: number;
  height: number;
};

type StoreType = {
  isMobile: Boolean;
  viewSize: ViewSize;
};

type StoreContextType = {
  store: StoreType;
  setStore: any;
};

const initState: StoreType = {
  isMobile: false,
  viewSize: { width: 0, height: 0 },
};

type Props = {
  children: React.ReactNode;
};

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined
);

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const [store, setStore] = useState(initState);

  const onResize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width <= DEVICE_SIZE.mobile;
    const viewSize = { width: width, height: height };

    setStore((store) => ({
      ...store,
      isMobile,
      viewSize,
    }));
  }, []);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  const value = useMemo(() => ({ store, setStore }), [store]);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
