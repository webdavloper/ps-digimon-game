import { useEffect, useState } from "react";

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

export function Home() {
  const [digimons, setDigimons] = useState<Digimon[]>([]);
  const [choice, setChoice] = useState<boolean>(false);

  useEffect(() => {
    const cards = data.filter((_, index) => index < 22);

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

  return (
    <Container>
      <Table>
        {digimons.map((digimon) => {
          return (
            <Card key={digimon.id}>
              <CardInner
                visibility={choice ? "visible" : "hidden"}
                onClick={() => setChoice(!choice)}
              >
                <CardFront level={digimon.level}>
                  <h2>{digimon.name}</h2>
                  <img src={digimon.img} alt={digimon.name} />
                  <span>{digimon.level}</span>
                </CardFront>

                <CardBack>
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
