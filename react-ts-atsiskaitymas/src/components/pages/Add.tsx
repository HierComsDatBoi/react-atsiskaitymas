import { useContext, useState } from "react";
import UserContext, {UserContextTypes} from "../../contexts/UserContext";
import CardsContext, {CardsContextType} from "../../contexts/CardsContext";
import styled from "styled-components";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px auto;
    width: 400px;;
    border: 1px solid black;
    border-radius: 20px
`;

const Add = () => {
  
  const {userLoginData} = useContext(UserContext) as UserContextTypes;
  const {addNewCard} = useContext(CardsContext) as CardsContextType;

  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    image: ''
  });

  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  };

  const HandleSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addNewCard({
      title: inputValues.title,
      description: inputValues.description,
      image: inputValues.image
    });
    
    setInputValues({    
      title: '',
      description: '',
      image: ''
    });

  }
  
  return (
    <>
      {!userLoginData ? <div>User not found, please Log In</div> :
        <StyledSection>
          <h2>Add</h2>
          
          <form onSubmit={HandleSubmitEvent}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={inputValues.title}
            onChange={HandleInputChange}
          />
        </div>

        <div>
          <label htmlFor="description">description: </label>
          <input
            type="textarea"
            name="description"
            id="description"
            value={inputValues.description}
            onChange={HandleInputChange}
          />
        </div>

        <div>
          <label htmlFor="image">Image: </label>
          <input
            type="url"
            name="image"
            id="image"
            value={inputValues.image}
            onChange={HandleInputChange}
          />
        </div>

        <input type="submit" value="Create" />
      </form>

        </StyledSection>
      }
    </>
  );
}

export default Add;