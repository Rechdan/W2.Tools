import Link from "next/link";

import styled from "styled-components";

import { PageProps } from "_/types";

import useApp from "_/stores/app";

const Container = styled.div`
  flex: 1 1 auto;
  overflow-x: hidden;
  flex-flow: column;
  overflow-y: auto;
  display: flex;
`;

const Content = styled.div`
  flex: 1 1 auto;
  flex-flow: column;
  display: flex;
  gap: 0.25rem;
`;

const Label = styled.div`
  flex: 0 0 auto;
  padding: 0.5rem 1rem;
  font-weight: 700;
  line-height: 1;
`;

type NavigationItemProps = {
  $active: boolean;
};

const NavigationItem = styled(Link)<NavigationItemProps>`
  flex: 0 0 auto;
  transition: 0.15s ease-in-out;
  transition-property: background-color, color;
  padding: 0.5rem 1rem;
  position: relative;
  line-height: 1;

  ${(p) =>
    p.$active
      ? {
          backgroundColor: "hsl(0,0%,100%)",
          color: "hsl(0,0%,0%)",
          fontWeight: 700,
          "&:hover": {
            backgroundColor: "hsl(0,0%,80%)",
          },
        }
      : {
          backgroundColor: "hsl(0,0%,10%)",
          color: "hsl(0,0%,100%)",
          "&:hover": {
            backgroundColor: "hsl(0,0%,30%)",
          },
        }}
`;

const Navigation = (props: PageProps) => {
  const [serverLists] = useApp((s) => [s.serverLists]);

  return (
    <Container>
      <Content>
        <NavigationItem $active={props.page === "initial"} href="/">
          Página Inicial
        </NavigationItem>

        <Label>Editores</Label>

        {serverLists && (
          <NavigationItem $active={props.page === "editors" && props.type === "server-list"} href="/editors/server-list">
            ServerList
          </NavigationItem>
        )}

        {serverLists && (
          <NavigationItem $active={props.page === "editors" && props.type === "server-name"} href="/editors/server-name">
            ServerName
          </NavigationItem>
        )}
      </Content>
    </Container>
  );
};

export default Navigation;
