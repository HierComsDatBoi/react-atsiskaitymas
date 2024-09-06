import { useContext } from "react";
import UserContext, {UserContextTypes} from "../../contexts/UserContext";

const Add = () => {
  
  const {userLoginData} = useContext(UserContext) as UserContextTypes;
  
  return (
    <>
      {!userLoginData ? <div>User not found, please Log In</div> :
        <section>
          <h2>Add</h2>
          <p>Saved Cards</p>
        </section>
      }
    </>
  );
}

export default Add;