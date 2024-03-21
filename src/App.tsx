import useMonday from "./hooks/useMonday";
import useTemplates from "./hooks/useTemplates";
import TextEditor from "./components/TextEditor";
import TemplateList from "./components/TemplateList";
import Selector from "./components/Selector";
import Links from "./components/Links";
import useOnboard from "./hooks/useOnboard";
import WelcomePage from "./components/WelcomePage";
import { VscLoading } from "react-icons/vsc";

export default function App() {
  const { uid, bid, theme } = useMonday();
  const { templates, selected, setSelected, postTemplate, fetchTemplates } =
    useTemplates(bid, uid);
  const { onboarded, onboard } = useOnboard(uid);

  if (onboarded === "loading") {
    return (
      <main className={theme}>
        <VscLoading className="loading-icon" />
      </main>
    );
  }

  return (
    <main className={theme}>
      <Selector selected={selected} setSelected={setSelected} />
      <TextEditor post={postTemplate} />
      <TemplateList templates={templates} refresh={fetchTemplates} />
      <Links />
      <WelcomePage onboarded={onboarded} onboard={onboard} theme={theme} />
    </main>
  );
}
