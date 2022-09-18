import { Score } from "./components/Score";
import { MemoryGameProvider } from "./contexts/MemoryGameContext";
import { Home } from "./pages/Home";
import { Container } from "./styles";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <Container>
      <GlobalStyles />

      <MemoryGameProvider>
        <Score />
        <Home />
      </MemoryGameProvider>
    </Container>
  );
}
