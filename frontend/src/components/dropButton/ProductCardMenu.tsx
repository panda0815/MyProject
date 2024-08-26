import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { GrStatusGood } from "react-icons/gr";
import { HiDotsHorizontal, HiOutlineShoppingCart } from "react-icons/hi";

const ProductCardMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HiDotsHorizontal />}
        variant="outline"
        border={"none"}
      />
      <MenuList>
        <MenuItem icon={<GrStatusGood />}>BUY</MenuItem>
        <MenuItem icon={<HiOutlineShoppingCart />}>ADD CART</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProductCardMenu;
