const Root = styled.div`
  background: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.text};
  min-height: 100vh;
`;

import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <Root>
      <Head>
        <title>Dota Amazing Items</title>
      </Head>
      <div>This is Home Page</div>
    </Root>
  );
}
