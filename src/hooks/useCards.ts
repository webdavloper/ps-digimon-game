import { useContext } from "react";
import { MemoryGameContext } from "../contexts/MemoryGameContext";

export function useCards() {
  const { cards, choices, pairs, delay, handleFlipCard } =
    useContext(MemoryGameContext);

  function getCardVisibility(id: number) {
    const isInChoices = choices.some((choice) => choice?.id === id);
    const isInPairs = pairs.flat().some((card) => card?.id === id);

    return isInChoices || isInPairs;
  }

  return { cards, pairs, getCardVisibility, delay, handleFlipCard };
}
