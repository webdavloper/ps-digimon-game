import { StackSimple } from "phosphor-react";
import { Player, ScoreContainer } from "./styles";

export function Score() {
  return (
    <ScoreContainer>
      <Player>
        <span>David</span>
        <StackSimple size={18} />
        <span>2</span>
      </Player>

      <Player>
        <span>Kaio</span>
        <StackSimple size={18} />
        <span>2</span>
      </Player>
    </ScoreContainer>
  );
}
