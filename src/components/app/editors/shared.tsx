/* eslint-disable @typescript-eslint/no-explicit-any */

import styled from "styled-components";

export const Container = styled.div`
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  display: flex;
`;

export const EditorBox = styled.div`
  flex: 0 0 auto;
  background-color: hsl(0, 0%, 10%);
  padding: 2rem 1rem;
  flex-flow: column;
  max-width: 40rem;
  display: flex;
  width: 100%;
  gap: 2rem;
`;

export const EditorTitle = styled.div`
  flex: 0 0 auto;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const EditorForm = styled.div`
  flex: 0 0 auto;
  flex-flow: column;
  display: flex;
  gap: 1rem;
`;

export const EditorFieldBox = styled.div`
  flex: 0 0 auto;
  flex-flow: column;
  display: flex;
  gap: 0.25rem;
`;

export const EditorFieldLabel = styled.label`
  flex: 0 0 auto;
  font-weight: 700;
`;

export const EditorFieldInput = styled.input`
  flex: 0 0 auto;
  background-color: hsl(0, 0%, 0%);
  color: hsl(0, 0%, 100%);
  padding: 0.5rem 1rem;
`;
