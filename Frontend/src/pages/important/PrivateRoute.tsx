import * as  React from 'react';
import { AuthenticatedContext } from '../../Context/AuthenticatedContext';
import Login from "../Login/Login";

export default function PrivateRoute({ Component } : any) { //component here is in destructuring form

    const { isAuthenticated } = React.useContext<any>(AuthenticatedContext)
    // console.log(props)
    console.log(isAuthenticated)

    if (!isAuthenticated)
        return <Login />

    return (
        <Component />
    )
}