import React from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";

const SignUp = () => {
    return (
        <div>
            <Slogan
                title="Want to sign up? Bro’chef got you!"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>If you want to use the recipe or calculator you need to sign up!</p>
            </Slogan>
            signup page
        </div>
    );
};

export default SignUp;