import { Theme } from "monday-sdk-js/types/theme-config.type";

type WelcomePageProps = {
  onboarded: "show" | "hide" | "none";
  onboard: () => Promise<void>;
  theme: string;
};

export default function WelcomePage({
  onboarded,
  onboard,
  theme,
}: WelcomePageProps) {

  return (
    <div className={`welcome-page ${onboarded} ${theme}-welcome`}>
      <img src={`/${theme}_logo.png`} alt="" />
      <h1>Welcome to Update Templates</h1>
      <button onClick={onboard}>Continue</button>
    </div>
  );
}
