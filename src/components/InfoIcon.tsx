import { VscInfo } from "react-icons/vsc";

type InfoIconProps = {
  text: string;
};

export default function InfoIcon({ text }: InfoIconProps) {
  return (
    <div className="info-container">
      <VscInfo className="info-icon" />
      <div className="info-text-container">
        <p className="info-text">{text}</p>
      </div>
    </div>
  );
}
