import MainLayout from "@/layouts/MainLayout";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import styled from "styled-components";

const Root = styled(Box)`
  background: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.text};
`;

const Products = () => {
  return (
    <Root>
      <Head>
        <title>Dota Amazing Items | Products</title>
      </Head>
      <MainLayout></MainLayout>
    </Root>
  );
};

export default Products;
