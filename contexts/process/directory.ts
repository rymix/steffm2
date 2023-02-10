/* eslint-disable sonarjs/no-duplicate-string */
import type { Processes } from "contexts/process/types";
import dynamic from "next/dynamic";
import { FOLDER_ICON, TASKBAR_HEIGHT } from "utils/constants";

const directory: Processes = {
  FileExplorer: {
    Component: dynamic(() => import("components/apps/FileExplorer")),
    backgroundColor: "#202020",
    icon: FOLDER_ICON,
    title: "File Explorer",
  },
};

export default directory;
