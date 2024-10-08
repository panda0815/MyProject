import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  HiOutlineChatAlt2,
  HiOutlineHeart,
  HiOutlineThumbUp,
} from "react-icons/hi";
import styled from "styled-components";
import ProductCardMenu from "../button/dropButton/ProductCardMenu";

const StyledCard = styled(Card)`
  width: 300px;
  cursor: pointer;
`;

const StyledImg = styled(Box)``;

const ProductCard = () => {
  return (
    <StyledCard>
      <CardHeader p={"10px"}>
        <Flex>
          <Flex flex={"1"} gap={"4"} alignItems={"center"} flexWrap={"wrap"}>
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
          <ProductCardMenu />
        </Flex>
      </CardHeader>
      <CardBody p={"5px 10px"}>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
      </CardBody>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />
      <CardFooter p={"10px"}>
        <Button
          variant="ghost"
          leftIcon={<HiOutlineThumbUp />}
          fontSize={"15px"}
        >
          Like
        </Button>
        <Button
          variant="ghost"
          leftIcon={<HiOutlineChatAlt2 />}
          fontSize={"15px"}
        >
          Comment
        </Button>
        <Button variant="ghost" leftIcon={<HiOutlineHeart />} fontSize={"15px"}>
          Save
        </Button>
      </CardFooter>
    </StyledCard>
  );
};

export default ProductCard;
