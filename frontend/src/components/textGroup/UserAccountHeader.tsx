import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const UserAccountHeader = () => {
  return (
    <Flex gap={5} p={3}>
      <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      <Box>
        <Heading size={"md"} pb={1}>
          Segun Adebayo
        </Heading>
        <Text fontSize={"sm"}>Creator, Chakra UI</Text>
      </Box>
    </Flex>
  );
};

export default UserAccountHeader;
