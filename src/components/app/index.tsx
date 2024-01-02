import styled from "styled-components";

import { Layout } from "antd";

import { PageProps } from "_/types";

import Navigation from "_/components/app/navigation";

const Container = styled(Layout)`
  height: 100lvh;
  width: 100lvw;
`;

const App = (props: PageProps) => (
  <Container>
    <Layout.Sider>
      <Navigation {...props} />
    </Layout.Sider>

    <Layout.Content>
      <h1>okk</h1>
      {JSON.stringify(props, null, 3)}
    </Layout.Content>
  </Container>
);

export default App;
