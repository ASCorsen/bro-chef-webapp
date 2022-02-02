import React, {useContext, useState} from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";
import Button from "../components/button/Button";
import "../pages/pages.css"
import {Link} from "react-router-dom";
import {AuthContext} from "../components/context/AuthContext";
import axios from "axios";


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
           const result = await axios.post(`http://localhost:3000/login`,{
                email: email,
                password: password,
            })
            // console.log(result.data)
            login(result.data.accessToken)
        }catch (e){
            console.error(e)
        }
    }

    return (
        <div>
            <Slogan
                title="Want to log in? Bro’chef got you!"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>Please log in to use the Bro’chef’s recipe and calculator functions.</p>
            </Slogan>
            <h2 className="content-title">Log in</h2>
            <section className="redirect-styling"><p>Don't have an account </p>
                <p> Click <Link to="/sign-up">Here</Link>
                </p>
            </section>
            <form className="form-styling" onSubmit={handleSubmit}>
                <label htmlFor="email-field">
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="password-field">
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div className="btn-login-styling">
                    <Button
                    >Log in</Button>
                </div>
            </form>





        </div>
    );
};

export default LogIn;