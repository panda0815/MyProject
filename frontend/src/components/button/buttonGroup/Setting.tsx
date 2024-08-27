import { darkTheme } from "@/components/Theme";
import { CustomThemeContext } from "@/contexts/CustomThemeContext";
import { Flex, Link, Spacer, Switch, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi2";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  padding: 10px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 10px;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }
`;

const Setting = () => {
  const { theme, toggleTheme } = useContext(CustomThemeContext);
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    toggleTheme();
    setIsChecked(!isChecked);
  };
  return (
    <>
      <StyledFlex gap={2}>
        <HiOutlineLightBulb fontSize={24} />
        <Text fontSize={20}>
          Theme: {theme === darkTheme ? "dark" : "light"}
        </Text>
        <Spacer />
        <Switch
          id="select-theme"
          colorScheme="blackAlpha"
          isChecked={isChecked}
          onChange={onChange}
        />
      </StyledFlex>
      <StyledLink gap={2} href="/setting" _hover={{ textDecoration: "none" }}>
        <CiSettings fontSize={24} />
        <Text fontSize={20}>Setting</Text>
      </StyledLink>
    </>
  );
};

export default Setting;
