import MainLayout from "@/layouts/MainLayout";
import News from "@/modules/products/News";
import HomeSlider from "@/modules/sliders/HomeSlider";
import Head from "next/head";
import styled from "styled-components";

const Root = styled.div`
  background: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.text};
  min-height: 100vh;
`;

export default function Home() {
  return (
    <Root>
      <Head>
        <title>Dota Amazing Items</title>
      </Head>
      <MainLayout>
        <HomeSlider />
      </MainLayout>
    </Root>
  );
}
