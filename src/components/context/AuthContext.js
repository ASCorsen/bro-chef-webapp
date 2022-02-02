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
            getUserData(decode.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {

        localStorage.setItem("token", JWT)
        const decode = jwt_decode(JWT)
        // console.log(decode)
        // console.log("Ik ben nu ingelogd")

        getUserData(decode.sub, JWT)
        history.push("/")
    }

    async function getUserData(id, token) {
        try {
            const result = await axios.get(`http://localhost:3000/600/users/${id}`, {
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

            // console.log(result)

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