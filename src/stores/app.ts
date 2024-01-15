// @refresh reset

import { ChangeEvent } from "react";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import serverListBuilder, { ServerList } from "_/structs/serverlist";

const onFile: Record<string, (file: File) => Promise<void>> = {
  "serverlist.bin": async (file) => {
    const serverList = serverListBuilder(Buffer.from(await file.arrayBuffer()));
    useApp.setState((s) => {
      if (s.serverLists === null) s.serverLists = [];
      s.serverLists.push({ serverList, path: file.webkitRelativePath });
      console.log("serverList", serverList);
    });
  },

  "sn.bin": async (file) => {
    console.log(file.webkitRelativePath);
  },

  "strdef.bin": async (file) => {
    console.log(file.webkitRelativePath);
  },
};

type AppStore = {
  totalFiles: number | null;
  serverLists: { serverList: ServerList; path: string }[] | null;

  onSelectFolder: (e: ChangeEvent<HTMLInputElement>) => void;
  resetState: () => void;
};

const useApp = create(
  immer<AppStore>((set) => ({
    totalFiles: null,
    serverLists: null,

    onSelectFolder: (e) => {
      const { files } = e.currentTarget;

      if (files) {
        set((s) => {
          s.totalFiles = files.length;
        });

        for (const file of files) {
          onFile[file.name]?.(file);
        }
      }
    },

    resetState: () => {
      set((s) => {
        s.totalFiles = null;
      });
    },
  }))
);

export default useApp;
