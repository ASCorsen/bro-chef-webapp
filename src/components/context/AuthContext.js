import React, {createContext, useEffect, useState} from 'react';
import jwt_decode from "jwt-decode"
import {useHistory} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({})

const AuthContextProvider = ({children}) => {

    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    })
    const history = useHistory()

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {
            const decode = jwt_decode(token);
            //eslint-disable-next-line
            getUserData(decode.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        } // eslint-disable-next-line
    }, []);

    function login(JWT) {

        localStorage.setItem("token", JWT)
        const decode = jwt_decode(JWT)

        getUserData(decode.sub, JWT)
        history.push("/")
    }

    async function getUserData(id, token) {
        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            })

        } catch (e) {
            console.error(e)
        }
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
            status: 'done',
        })
        history.push("/")
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.isAuth,
        login: login,
        logout: logout,
    }


    return (
        <div>
            <AuthContext.Provider value={data}>
                {isAuth.status === 'done' ? children : <p>Loading...</p>}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthContextProvider;