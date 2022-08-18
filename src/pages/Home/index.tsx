import { useState } from "react";
import { Card, Container } from "./styles";

import data from "../../database/digimons.json";
import { Table } from "phosphor-react";

type Digimon = {
  name: string;
  img: string;
  level: string;
};

export function Home() {
  const [digimons, setDigimons] = useState<Digimon[]>(data);

  return (
    <Container>
      <Table>
        {digimons.map((digimon) => (
          <Card key={`${digimon.name}-${new Date().getTime()}`}>
            <h2>{digimon.name}</h2>
            <img src={digimon.img} alt={digimon.name} />
            <span>{digimon.level}</span>
          </Card>
        ))}
      </Table>
    </Container>
  );
}
