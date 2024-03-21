import { Template } from "../config/types";
import TemplateView from "./TemplateView";

type TemplateListProps = {
  templates: Template[];
  refresh: () => Promise<void>;
};

export default function TemplateList({
  templates,
  refresh,
}: TemplateListProps) {
  return (
    <div className="template-container">
      {templates.map((t) => (
        <TemplateView key={t.tid} tmp={t} refresh={refresh} />
      ))}
    </div>
  );
}
