import { useEffect, useState } from "react";
import { Selected, Template } from "../config/types";
import client, { monday } from "../config/config";

export default function useTemplates(bid: string | null, uid: string | null) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selected, setSelected] = useState<Selected>("BOARD");

  useEffect(() => {
    fetchTemplates();
  }, [selected, bid, uid]);

  async function fetchTemplates() {
    if (!uid || !bid) return;
    try {
      if (selected === "BOARD") {
        const rs = await client.execute({
          sql: "select * from templates where bid = ?",
          args: [bid],
        });
        setTemplates(rs.rows as any);
      } else if (selected === "USER") {
        const rs = await client.execute({
          sql: "select * from templates where uid = ?",
          args: [uid],
        });
        setTemplates(rs.rows as any);
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  }

  async function postTemplate(input: string | undefined) {
    if (!bid || !uid) {
      alert("Viewers are not allowed to post templates.");
      return;
    }
    if (!input) return;
    if (input === "<p></p>") {
      alert("Text is required to post a template.");
      return;
    }

    if (input === "<p>Type something...</p>") {
      alert("Text is required to post a template.");
      return;
    }

    try {
      const userId = selected === "BOARD" ? "" : uid;
      const boardId = selected === "USER" ? "" : bid;
      await client.execute({
        sql: "insert into templates (uid, bid, template) values (?, ?, ?)",
        args: [userId, boardId, input],
      });
      monday.execute("valueCreatedForUser");
      await fetchTemplates();
    } catch (err: any) {
      console.error(err?.message);
    }
  }

  return { templates, selected, setSelected, postTemplate, fetchTemplates };
}
