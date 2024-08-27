import { Box } from "@chakra-ui/react";
import ProductCard from "../card/ProductCard";

const NewProductCards = () => {
  const newProducts = Array(10).fill(0);

  return (
    <>
      {newProducts.map((item, index) => {
        return (
          <Box key={index} m={"10px 20px"}>
            <ProductCard />
          </Box>
        );
      })}
    </>
  );
};

export default NewProductCards;
