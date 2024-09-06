import { useContext } from "react";
import { CardsType } from "../../../contexts/CardsContext";
import CardsContext, { CardsContextType } from "../../../contexts/CardsContext";
import styled from "styled-components";

const StyledDiv = styled.div`
border: 1px solid black;
padding: 20px;
`;

const Card = ({data}: {data: CardsType}) => {

  const {cards} = useContext(CardsContext) as CardsContextType;

  return (
    <StyledDiv>
    <h4>{data.title}</h4>
    <img src={data.image} alt={data.title} />
    <p>{data.description}</p>
    </StyledDiv>
  );
}

export default Card;