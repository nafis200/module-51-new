import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Navigate } from "react-router";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;

