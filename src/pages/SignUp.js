import React, {useState} from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";
import Button from "../components/button/Button";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault()

    }

    return (
        <div>
            <Slogan
                title="Want to sign up? Bro’chef got you!"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>If you want to use the recipe or calculator you need to sign up!</p>
            </Slogan>
            <h2 className="content-title">Create an account</h2>
            <section className="redirect-styling"> <p>Create an account to enjoy all the</p>
                <p>Bro'chef functions!</p>
            </section>
            <form className="form-styling" onSubmit={handleSubmit}>
                <label htmlFor="name-field">
                    <input
                        type="name"
                        id="name-field"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
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
                <div className="btn-signup-styling">
                    <Button
                    >Sign Up</Button>
                </div>
            </form>
            <section className="redirect-styling-2"><p>Already have an account </p>
                <p> Click <Link to="/log-in">Here</Link>
                </p>
            </section>
            signup page
        </div>
    );
};

export default SignUp;