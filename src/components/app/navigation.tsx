import Link from "next/link";

import { useMemo } from "react";

import styled from "styled-components";

import { Menu, MenuProps } from "antd";

import { PageProps } from "_/types";

const ITEMS: Required<MenuProps>["items"] = [
  { key: "initial", label: <Link href="/">inicial</Link> },
  { type: "divider" },
  {
    key: "editors",
    type: "group",
    label: "Editores",
    children: [
      { key: "server-list", label: <Link href="/editors/server-list">Server List</Link> },
      { key: "server-name", label: <Link href="/editors/server-name">Server Name</Link> },
      { key: "strdef", label: <Link href="/editors/strdef">Strdef</Link> },
    ],
  },
];

const Container = styled(Menu)`
  min-height: 100lvh;
`;

const Navigation = (props: PageProps) => {
  const selectedKeys = useMemo(() => {
    switch (props.page) {
      case "editors":
        return [props.page, props.type];
      default:
        return [props.page];
    }
  }, [props]);

  return <Container selectedKeys={selectedKeys} items={ITEMS} />;
};

export default Navigation;
