import { Avatar, Badge, Box, Icon, Link, Text } from "@chakra-ui/react";
import { BsChatRightTextFill } from "react-icons/bs";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  padding: 5px;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledBox = styled(Box)`
  width: 35px;
  justify-content: center;
`;

type Props = {
  children?: React.ReactNode;
  unRead: number;
};

const ProfileLink: React.FC<Props> = ({ children, unRead }) => {
  return (
    <>
      <StyledLink gap={2} href="/profile" _hover={{ textDecoration: "none" }}>
        <StyledBox>
          <Avatar size="sm" src="https://bit.ly/broken-link" />
        </StyledBox>
        <Text fontSize={20}>My Profile</Text>
      </StyledLink>
      <StyledLink gap={2} href="/chat" _hover={{ textDecoration: "none" }}>
        <StyledBox>
          <BsChatRightTextFill fontSize={25} />
        </StyledBox>
        <Text fontSize={20}>DM Chat</Text>
        {unRead > 0 && (
          <Badge colorScheme="red" variant={"solid"} borderRadius={15}>
            +{unRead}
          </Badge>
        )}
      </StyledLink>
    </>
  );
};

export default ProfileLink;
