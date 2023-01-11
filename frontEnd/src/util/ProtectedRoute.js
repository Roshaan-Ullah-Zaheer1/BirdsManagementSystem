import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {

    const [loggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (userToken === null) {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
        checkUserToken();
    }, []);

    return (
        <React.Fragment>
            {
                loggedIn ? props.children : null
            }
        </React.Fragment>
    );
}

export default ProtectedRoute;