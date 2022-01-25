import React from 'react';
import noob from "./Login.module.css"
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";
import Button from "../components/button/Button";
import "../pages/pages.css"


const LogIn = () => {
    return (
        <div>
            <Slogan
                title="Want to log in? Bro’chef got you!"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>Please log in to use the Bro’chef’s recipe and calculator functions.</p>
            </Slogan>
           Log In!

            test css button
            <div id="div-flex">
                <Button styleCompId={"test-login"}

                >log in</Button>
            </div>

            <button className={noob.btn}> test</button>


        </div>
    );
};

export default LogIn;