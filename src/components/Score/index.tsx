import { StackSimple } from "phosphor-react";
import { Player, ScoreContainer } from "./styles";

interface ScoreProps {
  player1: number;
  player2?: number;
}

export function Score({player1, player2}: ScoreProps) {
  return (
    <ScoreContainer>
      <Player>
        <span>{'{{name}}'}</span>
        <StackSimple size={18} />
        <span>{player1}</span>
      </Player>

      <Player>
        <span>{'{{name}}'}</span>
        <StackSimple size={18} />
        <span>{player2 ?? 0}</span>
      </Player>
    </ScoreContainer> 
  
  );
}
