import { GetStaticProps } from "next";

import { PageProps } from "_/types";

export const getStaticProps: GetStaticProps<PageProps> = async () => ({
  props: {
    page: "initial",
  },
});

export default () => null;
