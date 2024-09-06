import { useContext } from "react";
import UserContext, {UserContextTypes} from "../../contexts/UserContext";

const User = () => {

  const {userLoginData} = useContext(UserContext) as UserContextTypes;

  return ( 
    <>
    {!userLoginData ? <div>User not found, please Log In</div> : 
    <section>
    <h2>User</h2>
    <p>No Saved Cards</p>
    </section>
    }

    </>
   );
}
 
export default User;
