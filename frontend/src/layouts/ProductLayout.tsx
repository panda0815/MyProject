import { MEDIA_DEVICE } from "@/utils/device";
import styled from "styled-components";

const Root = styled.div`
  @media ${MEDIA_DEVICE.tablet} {
  }
`;

type Props = {
  children?: React.ReactNode;
};

const ProductLayout: React.FC<Props> = ({ children }) => {
  return <Root>asdas</Root>;
};

export default ProductLayout;
