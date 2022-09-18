import { useCards } from "../../hooks/useCards";

import {
  Card,
  Table,
  Container,
  CardFront,
  CardBack,
  CardInner,
} from "./styles";


export function Home() {
  const { cards, getCardVisibility, handleFlipCard } = useCards();

  return (
    <Container>
      <Table>
        {cards.map((card) => {
          const isVisible = getCardVisibility(card.id);
          return (
            <Card key={card.id}>
              <CardInner visible={isVisible}>
                <CardFront level={card.level}>
                  <h2>{card.name}</h2>
                  <img src={card.img} alt={card.name} />
                  <span>{card.level}</span>
                </CardFront>

                <CardBack onClick={() => handleFlipCard(card)}>
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
