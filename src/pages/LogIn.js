import React from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";

const LogIn = () => {
    return (
        <div>
            <Slogan
                title="Want to log in? Bro’chef got you!"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>Please log in to use the Bro’chef’s recipe and calculator functions.</p>
            </Slogan>
           Log In!
        </div>
    );
};

export default LogIn;