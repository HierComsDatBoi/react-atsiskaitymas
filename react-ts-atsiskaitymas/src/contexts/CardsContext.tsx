import { createContext, useEffect, useReducer } from "react";

type ChildrenType = { children: React.ReactElement };

export type CardsType = {
  id?: string,
  title: string,
  description: string,
  image?: string
}

export type CardsContextType = {
  cards: CardsType[],
  addNewCard: (NewCardData:CardsType) => void;
}

type CardReducerActionTypes =
  { type: "getCardData", data: CardsType[] } |
  { type: "newCard", newCard:CardsType }

const reducer = (state: CardsType[], action: CardReducerActionTypes) => {

  switch (action.type) {
    case "getCardData":
      return action.data;
    case "newCard":
      return [...state, action.newCard];
    default:
      return state;
  }
}


const CardsContext = createContext<CardsContextType | undefined>(undefined)
const CardsProvider = ({ children }: ChildrenType) => {

  
  const addNewCard = (newCardData: CardsType) => {
      fetch(`http://localhost:8080/cards`, {
          method: "POST",
          headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify(newCardData)
          })
          dispatch({
              type: "newCard",
              newCard: newCardData
            });
          }
          
const [cards, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    fetch(`http://localhost:8080/cards`)
      .then(res => res.json())
      .then(data => 
        dispatch({
        type: 'getCardData',
        data: data
      }))
  }, []);

  console.log(cards);

  return (
    <CardsContext.Provider
      value={{
        cards,
        addNewCard
      }}
    >
      {children}
    </CardsContext.Provider>
  )
}

export { CardsProvider };
export default CardsContext;