import styled from "styled-components";

import { PageProps } from "_/types";

import useApp from "_/stores/app";

import Content from "_/components/app/content";
import FolderPicker from "_/components/app/folder-picker";
import Logo from "_/components/app/logo";
import Navigation from "_/components/app/navigation";

const Container = styled.div`
  flex-flow: row;
  height: 100lvh;
  display: flex;
  width: 100lvw;
`;

const SideBar = styled.div`
  flex: 0 0 auto;
  background-color: hsl(0, 0%, 10%);
  flex-flow: column;
  display: flex;
  width: 15rem;
`;

const App = (props: PageProps) => {
  const [totalFiles] = useApp((s) => [s.totalFiles]);

  if (totalFiles === null) {
    return (
      <Container>
        <FolderPicker />
      </Container>
    );
  }

  return (
    <Container>
      <SideBar>
        <Logo />
        <Navigation {...props} />
      </SideBar>

      <Content {...props} />
    </Container>
  );
};

export default App;
