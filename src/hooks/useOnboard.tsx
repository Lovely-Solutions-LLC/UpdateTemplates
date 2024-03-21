import { useEffect, useState } from "react";
import client from "../config/config";

export default function useOnboard(uid: string | null) {
  const [onboarded, setOnboarded] = useState<"loading" | "show" | "hide" | "none">("loading");

  useEffect(() => {
    async function checkOnboard() {
      if (!uid) return;
      try {
        const rs = await client.execute({
          sql: "select * from onboarding where uid = ?",
          args: [uid],
        });
        setOnboarded(rs.rows.length > 0 ? "none" : "show");
      } catch (err: any) {
        console.error(err?.message);
      }
    }

    checkOnboard();
  }, [uid]);

  async function onboard() {
    if (!uid) return;
    try {
      await client.execute({
        sql: "insert into onboarding (uid) values (?)",
        args: [uid],
      });
      setOnboarded("hide");
    } catch (err: any) {
      console.error(err?.message);
    }
  }

  return { onboarded, onboard };
}
