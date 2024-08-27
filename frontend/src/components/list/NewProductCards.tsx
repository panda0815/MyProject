import { Box } from "@chakra-ui/react";
import ProductCard from "../cards/ProductCard";

const NewProductCards = () => {
  const newProducts = Array(10).fill(0);

  return (
    <>
      {newProducts.map((item, index) => {
        return (
          <Box key={index}>
            <ProductCard />
          </Box>
        );
      })}
    </>
  );
};

export default NewProductCards;
