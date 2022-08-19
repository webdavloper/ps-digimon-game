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

export function Home() {
  const [digimons, setDigimons] = useState<Digimon[]>(data);

  return (
    <Container>
      <Table>
        {digimons.map((digimon, index) => {
          if (index < 44) {
            return (
              <Card key={`${digimon.name}-${new Date().getTime()}`}>
                <CardInner
                  visibility={"hidden"}
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
