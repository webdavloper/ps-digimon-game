import { useEffect, useState } from "react";

import { Score } from "../../components/Score";

import {
  Card,
  Table,
  Container,
  CardFront,
  CardBack,
  CardInner,
} from "./styles";

import data from "../../database/digimons.json";

type Digimon = {
  id: number;
  name: string;
  img: string;
  level: any;
};

type ChoicesType = [Digimon | undefined, Digimon | undefined];
type PairsType = [Digimon | undefined, Digimon | undefined];

export function Home() {
  const [digimons, setDigimons] = useState<Digimon[]>([]);
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

    setDigimons(randomCards);
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

  function handleFlipCard(digimon: Digimon) {
    if (delay) return;

    // const isAlreadySelected = Object.values(pairs);

    // console.log(isAlreadySelected);

    // .find((card) => card.id === digimon.id);

    // if (isAlreadySelected) return;

    setChoices(([choice1]) =>
      !choice1 ? [digimon, undefined] : [choice1, digimon]
    );
  }

  function setCardVisibility(id: number) {
    const isInChoices = choices.some((choice) => choice?.id === id);
    const isInPairs = pairs.flat().some((card) => card?.id === id);

    return isInChoices || isInPairs;
  }

  return (
    <Container>
      <Table>
        {digimons.map((digimon) => {
          const isVisible = setCardVisibility(digimon.id);
          return (
            <Card key={digimon.id}>
              <CardInner visible={isVisible}>
                <CardFront level={digimon.level}>
                  <h2>{digimon.name}</h2>
                  <img src={digimon.img} alt={digimon.name} />
                  <span>{digimon.level}</span>
                </CardFront>

                <CardBack onClick={() => handleFlipCard(digimon)}>
                  <div>
                    <span>Digimon Digimon Digimon</span>
                    <span>Digimon Digmon</span>
                    <span>Digimon Digimon Digimon</span>
                    <span>Digimon Digmon</span>
                  </div>
                </CardBack>
              </CardInner>
            </Card>
          );
        })}
      </Table>
    </Container>
  );
}
