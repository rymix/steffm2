import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import processDirectory from "contexts/process/directory";
import { useSession } from "contexts/session";
import { basename, join } from "path";
import { useCallback } from "react";
import {
  DESKTOP_PATH,
  FOLDER_BACK_ICON,
  PROCESS_DELIMITER,
} from "utils/constants";

type UseFile = (pid: string, icon?: string) => Promise<void>;

const useFile = (url: string): UseFile => {
  const { setForegroundId } = useSession();
  const { createPath, updateFolder } = useFileSystem();
  const { minimize, open, processes, url: setUrl } = useProcesses();

  return useCallback(
    async (pid: string, icon?: string) => {
      const { singleton, icon: processIcon } = processDirectory[pid] || {};
      const activePid = Object.keys(processes).find((id) =>
        id.startsWith(`${pid}${PROCESS_DELIMITER}`)
      );
      let runUrl = url;

      if (singleton && activePid) {
        setUrl(activePid, runUrl);
        if (processes[activePid].minimized) minimize(activePid);
        setForegroundId(activePid);
      } else {
        open(
          pid,
          { url: runUrl },
          singleton || icon === FOLDER_BACK_ICON ? processIcon : icon
        );
      }
    },
    [
      createPath,
      minimize,
      open,
      processes,
      setForegroundId,
      setUrl,
      updateFolder,
      url,
    ]
  );
};

export default useFile;
