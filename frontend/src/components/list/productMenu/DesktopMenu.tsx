import { PRODUCT_CATEGORY } from "@/components/constants";
import ProductCategory from "@/components/text/ProductCategory";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";

const Root = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

const DesktopMenu = () => {
  const [selectedId, setSelectedId] = useState(0);

  const onSelect = (id: number) => {
    setSelectedId(id);
  };

  return (
    <Root gap={4}>
      <InputGroup size="md" w={"75%"}>
        <Input placeholder="Search..." />
        <InputRightElement>
          <IconButton
            colorScheme="inherit"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
      {PRODUCT_CATEGORY.map((item, index) => {
        return (
          <ProductCategory
            key={index}
            id={index}
            item={item}
            onSelect={onSelect}
            isSelect={selectedId === index}
          />
        );
      })}
    </Root>
  );
};

export default DesktopMenu;
