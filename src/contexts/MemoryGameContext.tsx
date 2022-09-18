import { createContext, ReactNode, useEffect, useState } from "react";

import data from "../database/digimons.json";

export type Card = {
  id: number;
  name: string;
  img: string;
  level: any;
};

type ChoicesType = [Card | undefined, Card | undefined];
type PairsType = [Card | undefined, Card | undefined];

interface MemoryGameContextType {
  cards: Card[];
  pairs: PairsType[];
  choices: ChoicesType;
  delay: boolean;
  handleFlipCard: (card: Card) => void
}

export const MemoryGameContext = createContext<MemoryGameContextType>(
  {} as MemoryGameContextType
);

interface MemoryGameProviderProps {
  children: ReactNode;
}

export function MemoryGameProvider({ children }: MemoryGameProviderProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [pairs, setPairs] = useState<PairsType[]>([]);
  const [choices, setChoices] = useState<ChoicesType>([undefined, undefined]);
  const [delay, setDelay] = useState<boolean>(false);

  useEffect(() => {
    const cards = data.filter((_, index) => index < 12);

    const pairs = cards.map((card) => {
      const obj = structuredClone(card);

      Object.assign(obj, {
        id: obj.id + cards.length,
      });

      return obj;
    });

    const allCards = [...cards, ...pairs];

    const randomCards = allCards.sort(() => 0.5 - Math.random());

    setCards(randomCards);
  }, []);

  useEffect(() => {
    const [choice1, choice2] = choices;

    console.log(pairs);

    if (choice1 && choice2) {
      if (choice1.img === choice2.img) {
        setPairs((state) => [...state, [choice1, choice2]]);
      }

      setDelay(true);

      setTimeout(() => {
        setChoices(() => [undefined, undefined]);
        setDelay(false);
      }, 1000);
    }
  }, [choices]);

  function handleFlipCard(digimon: Card) {
    if (delay) return;

    setChoices(([choice1]) =>
      !choice1 ? [digimon, undefined] : [choice1, digimon]
    );
  }

  return (
    <MemoryGameContext.Provider
      value={{
        cards,
        choices,
        delay,
        pairs,
        handleFlipCard
      }}
    >
      {children}
    </MemoryGameContext.Provider>
  );
}
