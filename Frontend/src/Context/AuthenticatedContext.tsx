import * as React from 'react';      //diff b/w createContext and UseContext?

export const AuthenticatedContext = React.createContext<any | null>({});
interface user {
  email: string,
  password: string
}
const initialState = {
  email: '',
  password: ''
}
function AuthenticatedContextProvider(props:any) {

  const [isAuthenticated, setIsAuthenticated] = React.useState<any>(false)
  const [user, setUser] = React.useState<user>(initialState)
  React.useEffect(() => {
    console.log("user in useEffect in context",user);
    
    // if (user) {
    //   setIsAuthenticated(true);
    // } else {
    //   setIsAuthenticated(false);
    // }
    
  
    // return () => {
    //   // setIsAuthenticated(isAuthenticated);
    // }
  }, [])
  

  return (
    <AuthenticatedContext.Provider value={{ isAuthenticated, setIsAuthenticated,user, setUser}}>
      {props.children}
    </AuthenticatedContext.Provider>
  )
}
export default AuthenticatedContextProvider