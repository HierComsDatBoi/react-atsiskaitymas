import { createContext, useReducer, useState, useEffect } from "react";

type ChildrenType = { children: React.ReactElement };
type UserType = {
  id: string,
  name: string,
  birthDate: number,
  userEmail: string,
  userImg: string,
  password: string
};

type UserReducerActionTypes =
  { type: "getUserData", data: UserType[] }

export type UserContextTypes = {
  users: UserType[],
  userLoginData: UserType | undefined,
  login: (userEmail: string, password: string) => string,
  logout: () => void
}

const reducer = (state: UserType[], action: UserReducerActionTypes) => {
  switch (action.type) {
    case "getUserData":
      return action.data;
    default:
      return state;
  }
}

const UserContext = createContext<UserContextTypes | undefined>(undefined);
const UserProvider = ({ children }: ChildrenType) => {

  const [userLoginData, setUserLoginData] = useState<UserType | undefined>(undefined);

  const login = (userEmail: string, password: string): string => {

    const findUser = users.find(user => user.userEmail === userEmail && user.password === password)
    if (findUser) {
      setUserLoginData(findUser);
      console.log(findUser);
      return 'Suckses';
    } else { return 'Wrong email or password'; }
  }
  const logout = () => {
    setUserLoginData(undefined);
  }

  const [users, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    fetch(`http://localhost:8080/users`)
      .then(res => res.json())
      .then(data => dispatch({
        type: 'getUserData',
        data: data
      }))
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        userLoginData,
        login,
        logout
      }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;