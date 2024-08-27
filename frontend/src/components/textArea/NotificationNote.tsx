import { Text } from "@chakra-ui/react";
import styled from "styled-components";

const Root = styled(Text)`
  padding: 8px 5px;
`;

type Props = {
  children?: React.ReactNode;
  key?: number;
};

const NotificationNote: React.FC<Props> = ({ children, key }) => {
  return <Root key={key}>{children}</Root>;
};

export default NotificationNote;
