import { GetStaticProps } from "next";

import { PageProps } from "_/types";

export const getStaticProps: GetStaticProps<PageProps> = async () => ({
  props: {
    page: "editors",
    type: "server-name",
  },
});

export default () => null;
