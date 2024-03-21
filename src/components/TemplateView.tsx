import client from "../config/config";
import { VscCopy, VscTrash } from "react-icons/vsc";
import { Template } from "../config/types";

type TemplateViewProps = {
  tmp: Template;
  refresh: () => Promise<void>;
};

export default function TemplateView({ tmp, refresh }: TemplateViewProps) {
  async function deleteTemplate() {
    console.log(tmp.tid)
    try {
      await client.execute({
        sql: "delete from templates where tid = ?",
        args: [tmp.tid],
      });
      refresh();
    } catch (err: any) {
      console.error(err?.message);
    }
  }

  function copyToClipboard() {
    var tempElement = document.createElement("div");
    tempElement.innerHTML = tmp.template;
    tempElement.contentEditable = "true";
    document.body.appendChild(tempElement);
    tempElement.focus();
    document.execCommand("selectAll", false, undefined);
    document.execCommand("copy");
    document.body.removeChild(tempElement);
  }

  return (
    <div className="template">
      <p
        onClick={copyToClipboard}
        dangerouslySetInnerHTML={{ __html: tmp.template }}
      />
      <div className="icon-container">
        <VscCopy className="icon copy" onClick={copyToClipboard} />
        <VscTrash className="icon delete" onClick={deleteTemplate} />
      </div>
    </div>
  );
}
