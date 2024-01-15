import { useId } from "react";

import styled from "styled-components";

import useApp from "_/stores/app";

type FolderPickerProps = {
  webkitdirectory: string;
  directory: string;
};

const EmptyContainer = styled.div`
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  display: flex;
`;

const DirectoryInput = styled.input.withConfig({ shouldForwardProp: () => true })<FolderPickerProps>`
  display: none;
`;

const DirectoryPicker = styled.label`
  flex: 0 0 auto;
  transition: 0.15s ease-in-out;
  transition-property: background-color, color;
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 0%);
  font-weight: 700;
  padding: 2rem;
  &:hover {
    background-color: hsl(0, 0%, 80%);
  }
`;

const FolderPicker = () => {
  const [onSelectFolder, totalFiles] = useApp((s) => [s.onSelectFolder, s.totalFiles]);

  const inputId = useId();

  if (totalFiles) {
    return null;
  }

  return (
    <EmptyContainer>
      <DirectoryInput type="file" multiple webkitdirectory="" directory="" onChange={onSelectFolder} hidden id={inputId} />

      <DirectoryPicker htmlFor={inputId}>Selecione a pasta do cliente</DirectoryPicker>
    </EmptyContainer>
  );
};

export default FolderPicker;
