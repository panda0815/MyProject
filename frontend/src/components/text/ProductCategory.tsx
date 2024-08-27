import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";

const Root = styled(Flex)`
  flex-direction: column;
  margin: 15px;
  width: 100px;
  align-items: center;
  cursor: pointer;
  transition: "transform 0.2s";

  &:hover {
    color: grey;
  }
`;

type Item = {
  label: string;
  img: string;
};

type Props = {
  children?: React.ReactNode;
  id: number;
  item: Item;
  onSelect: (id: number) => void;
  isSelect: Boolean;
};

const ProductCategory: React.FC<Props> = ({
  children,
  id,
  item,
  onSelect,
  isSelect,
}) => {
  return (
    <Root
      onClick={() => onSelect(id)}
      transform={isSelect ? "scale(1.3)" : "scale(1)"}
    >
      <Image
        borderRadius="full"
        boxSize="50px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Text
        textAlign={"center"}
        color={isSelect ? "teal" : ""}
        userSelect={"none"}
      >
        {item.label}
      </Text>
    </Root>
  );
};

export default ProductCategory;
