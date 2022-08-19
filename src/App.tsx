import { Score } from "./components/Score";
import { Home } from "./pages/Home";
import { Container } from "./styles";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <Container>
      <GlobalStyles />
      <Score />
      <Home />
    </Container>
  );
}
