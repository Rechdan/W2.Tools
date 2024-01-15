import styled from "styled-components";

import { PageProps } from "_/types";

import ServerListEditorPage from "_/components/app/editors/serverlist";

const Container = styled.div`
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 2rem 1rem;
  flex-flow: column;
  display: flex;
`;

const ContentSwitch = (props: PageProps) => {
  switch (props.page) {
    case "initial": {
      return (
        <div>
          <h1>Inicial</h1>
        </div>
      );
    }

    case "editors": {
      switch (props.type) {
        case "server-list": {
          return <ServerListEditorPage />;
        }

        default: {
          return null;
        }
      }
    }

    default: {
      return null;
    }
  }
};

const Content = (props: PageProps) => (
  <Container>
    <ContentSwitch {...props} />
  </Container>
);

export default Content;
