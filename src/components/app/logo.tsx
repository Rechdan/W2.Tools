import NextLink from "next/link";

import styled from "styled-components";

const Container = styled.div`
  flex: 0 0 auto;
  flex-flow: column;
  display: flex;
`;

const Link = styled(NextLink)`
  flex: 0 0 auto;
  transition: 0.15s ease-in-out;
  transition-property: background-color;
  background-color: hsl(0, 0%, 100%);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 1rem;
  margin: 1rem;
  color: black;
  &:hover {
    background-color: hsl(0, 0%, 80%);
  }
`;

const Logo = () => (
  <Container>
    <Link href="/">W2.Tools</Link>
  </Container>
);

export default Logo;
