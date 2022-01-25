import React, {useState} from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";
import Button from "../components/button/Button";
import "../pages/pages.css"
import {Link} from "react-router-dom";


const LogIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    function handleSubmit(e) {
        e.preventDefault()

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
            </form>

            <div className="btn-login-styling">
                <Button
                >Log in</Button>
            </div>



        </div>
    );
};

export default LogIn;