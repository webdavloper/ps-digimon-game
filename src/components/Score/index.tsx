import { StackSimple } from "phosphor-react";
import { useCards } from "../../hooks/useCards";
import { Player, ScoreContainer } from "./styles";

export function Score() {
  const { pairs } = useCards();

  return (
    <ScoreContainer>
      <Player>
        <span>{"{{name}}"}</span>
        <StackSimple size={18} />
        <span>{pairs.length}</span>
      </Player>

      <Player>
        <span>{"{{name}}"}</span>
        <StackSimple size={18} />
        <span>{0}</span>
      </Player>
    </ScoreContainer>
  );
}
