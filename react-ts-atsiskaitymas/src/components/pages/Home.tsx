import { useContext } from "react";
import CardsContext, { CardsContextType } from "../../contexts/CardsContext";
import Card from "../UI/organisms/Card";
import styled from "styled-components";

const StyledSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 0 auto;
    width: 400px;
    align-items: center;
    >div > div{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      >img{
        width: 80%;
      }
    }
`;

const Home = () => {
  const { cards } = useContext(CardsContext) as CardsContextType;

  return (
      <StyledSection>
        <h2>Home</h2>
        <h3>All Cards</h3>
        <div>
          {
            cards.map(card =>
              <Card
                key={card.id}
                data={card}
              />
            )
          }
          </div>

      </StyledSection>
  );
}

export default Home;