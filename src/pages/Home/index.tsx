import { useState } from "react";
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
  name: string;
  img: string;
  level: any;
};

const messCards = () => {
  const cards = data.filter((card, index) => index < 44);

  console.log('cards', cards);

  const randomNumbers: number[] = [];

  while (randomNumbers.length < cards.length) {
    const index = Math.floor(Math.random() * cards.length);

    if (!randomNumbers.includes(index)) {
      randomNumbers.push(index);
    }
  }

  const messedCards = randomNumbers.map((num) => cards[num]);

  return messedCards;
}

const randomDigimons = messCards();

export function Home() {
  const [digimons, setDigimons] = useState<Digimon[]>(randomDigimons);
  const [choice, setChoice] = useState<boolean>(false);

  return (
    <Container>
      <Table>
        {digimons.map((digimon, index) => {
          if (index < 44) {
            return (
              <Card key={`${digimon.name}-${new Date().getTime()}`}>
                <CardInner
                  visibility={choice ? 'visible' : 'hidden'}
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
          }
        })}
      </Table>
    </Container>
  );
}
