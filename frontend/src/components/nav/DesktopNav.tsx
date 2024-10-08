import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import styled from "styled-components";
import Link from "next/link";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { NAV_ITEMS } from "../constants";
import NotificationPopover from "../button/dropButton/NotificationPopover";
import UserAccountPopover from "../button/dropButton/UserAccountPopover";

const Root = styled(Flex)`
  height: 100px;
  padding: 10px 50px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 24px;
  padding: 10px 20px;

  &:after {
    display: block;
    content: "";
    padding-bottom: 1px;
    border-bottom: solid 1px;
    transform: scaleX(0);
    transition: transform 275ms ease-in-out;
    transform-origin: 100% 50%;
    margin-top: -1px;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
    border-bottom: solid 1px;
    transition: transform 275ms ease-in-out;
  }

  &.active:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
    border-bottom: solid 1px;
    transition: transform 275ms ease-in-out;
  }
`;

type Props = {
  showBar?: Boolean;
};

const FullscreenNav: React.FC<Props> = ({ showBar }) => {
  const router = useRouter();

  const isActive = useCallback(
    (url: string) => {
      if (!url) return false;
      if (url === "/") {
        if (router.asPath === "/") return true;
        return false;
      }
      return router.asPath.startsWith(url);
    },
    [router.asPath]
  );

  return (
    <Root display={showBar ? "flex" : "none"} gap={2}>
      <Box>
        <Heading size={"xl"} userSelect={"none"}>
          Dota Amazing Items
        </Heading>
      </Box>
      <Spacer />
      <Flex>
        {NAV_ITEMS.map((item) => {
          return (
            <StyledLink
              key={item.url}
              href={item.url}
              className={isActive(item.url) ? "active" : ""}
            >
              {item.label}
            </StyledLink>
          );
        })}
      </Flex>
      <NotificationPopover />
      <UserAccountPopover />
    </Root>
  );
};

export default FullscreenNav;
