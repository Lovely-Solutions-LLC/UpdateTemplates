import { useEffect, useState } from "react";
import { Themes } from "../config/types";
import { monday } from "../config/config";

export default function useMonday() {
  const [bid, setBid] = useState<string | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  const [theme, setTheme] = useState<Themes>("black");

  useEffect(() => {
    monday.listen("context", (res) => {
      setTheme(res.data.theme as Themes);
      if (!res.data.user.isViewOnly) {
        const unchecked = res.data as any;
        setBid(unchecked.boardId.toString());
        setUid(res.data.user.id);
      };
    });
  }, []);

  return { bid, uid, theme };
}
