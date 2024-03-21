import { Dispatch, SetStateAction } from "react";
import { Selected } from "../config/types";
import InfoIcon from "./InfoIcon";

type SelectorProps = {
  selected: Selected;
  setSelected: Dispatch<SetStateAction<Selected>>;
};

const boardInfo = "Visible to all members of this board.";
const userInfo = "Visible only to you. Available to post across all boards.";

export default function Selector({ selected, setSelected }: SelectorProps) {
  return (
    <div className="btn-container">
      <button
        className={selected === "BOARD" ? "active" : ""}
        onClick={() => setSelected("BOARD")}
      >
        <span>Board</span>
        <InfoIcon text={boardInfo} />
      </button>
      <button
        className={selected === "USER" ? "active" : ""}
        onClick={() => setSelected("USER")}
      >
        <span>User</span>
        <InfoIcon text={userInfo} />
      </button>
    </div>
  );
}
