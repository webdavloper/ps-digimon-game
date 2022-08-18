import { useState } from "react";
import { Container, DigimonCard } from "./styles";

import data from "../../database/digimons.json";

type Digimon = {
  name: string;
  img: string;
  level: string;
};

export function Home() {
  const [digimons, setDigimons] = useState<Digimon[]>(data);

  return (
    <Container>
      <ul>
        {digimons.map((digimon) => (
          <DigimonCard key={`${digimon.name}-${new Date().getTime()}`}>
            <h2>{digimon.name}</h2>
            <img src={digimon.img} alt={digimon.name} />
            <span>{digimon.level}</span>
          </DigimonCard>
        ))}
      </ul>
    </Container>
  );
}
