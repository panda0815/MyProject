import { StoreContext } from "@/contexts/StoreContext";
import { useContext } from "react";

export const useStore = () => {
  const { store, setStore } = useContext(StoreContext) || {};

  return { store: store || {}, setStore };
};
