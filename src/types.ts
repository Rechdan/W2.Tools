export type PageProps =
  | {
      page: "initial";
    }
  | {
      page: "editors";
      type: "server-list" | "server-name" | "strdef";
    };
