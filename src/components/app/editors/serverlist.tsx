import { ChangeEvent, useCallback, useId, useState } from "react";

import styled from "styled-components";

import useApp from "_/stores/app";

import { ServerList } from "_/structs/serverlist";

import { Container, EditorBox, EditorFieldBox, EditorFieldInput, EditorFieldLabel, EditorForm, EditorTitle } from "_/components/app/editors/shared";

const ServerSelectorContainer = styled.div`
  flex: 0 0 auto;
  flex-flow: wrap;
  display: flex;
  gap: 1rem;
`;

const ServerSelectorItem = styled.button<{ $selected: boolean }>`
  flex: 1 1 0;
  transition: 0.15s ease-in-out;
  transition-property: background-color, color;
  padding: 0.25rem 0.5rem;
  text-align: center;
  ${(p) =>
    p.$selected
      ? {
          backgroundColor: "hsl(0,0%,100%)",
          color: "hsl(0,0%,0%)",
        }
      : {
          backgroundColor: "hsl(0,0%,0%)",
          color: "hsl(0,0%,100%)",
        }}
`;

const ServerListKeyEditor = ({ index, serverList }: { index: number; serverList: ServerList }) => {
  const id = useId();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      useApp.setState((s) => {
        const value = Number(e.currentTarget.value);
        if (Number.isSafeInteger(value)) s.serverLists![index]!.serverList.key = value;
      });
    },
    [index]
  );

  return (
    <EditorFieldBox>
      <EditorFieldLabel htmlFor={id}>Chave:</EditorFieldLabel>
      <EditorFieldInput id={id} value={serverList.key} onChange={onChange} />
    </EditorFieldBox>
  );
};

const ServerListServerSelector = ({
  selected,
  serverIndex,
  setServerIndex,
}: {
  selected: boolean;
  serverIndex: number;
  setServerIndex: (index: number) => void;
}) => {
  const onClick = useCallback(() => {
    setServerIndex(serverIndex);
  }, [serverIndex, setServerIndex]);

  return (
    <ServerSelectorItem $selected={selected} onClick={onClick}>
      {serverIndex + 1}
    </ServerSelectorItem>
  );
};

const ServerListEditor = ({ index, serverList }: { index: number; serverList: ServerList }) => {
  const [serverIndex, setServerIndex] = useState(0);

  return (
    <EditorForm>
      <ServerListKeyEditor index={index} serverList={serverList} />

      <EditorFieldBox>
        <EditorFieldLabel>Servidor:</EditorFieldLabel>
        <ServerSelectorContainer>
          {serverList.servers.map((_, i) => (
            <ServerListServerSelector key={i} selected={serverIndex === i} serverIndex={i} setServerIndex={setServerIndex} />
          ))}
        </ServerSelectorContainer>
      </EditorFieldBox>
    </EditorForm>
  );
};

const ServerListEditorTitle = () => <EditorTitle>ServerList Editor</EditorTitle>;

const ServerListEditorPage = () => {
  const [serverLists] = useApp((s) => [s.serverLists]);

  const [index, setIndex] = useState(0);

  if (!serverLists || serverLists.length < 1) {
    return null;
  }

  if (serverLists.length > 1) {
    const { serverList } = serverLists[index]!;

    return (
      <Container>
        <EditorBox>
          <ServerListEditorTitle />

          <ul>
            {serverLists.map((_, i) => (
              <li
                key={i}
                // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
                onClick={() => setIndex(i)}
              >
                Selecionado: {i} / {serverList.key}
              </li>
            ))}
          </ul>

          <div>Sel: {index}</div>

          <ServerListEditor index={index} serverList={serverList} />
        </EditorBox>
      </Container>
    );
  }

  const { serverList } = serverLists[0]!;

  return (
    <Container>
      <EditorBox>
        <ServerListEditorTitle />
        <ServerListEditor index={index} serverList={serverList} />
      </EditorBox>
    </Container>
  );
};

export default ServerListEditorPage;
