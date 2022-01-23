import React from 'react';
import sloganImg from "../assets/sloganimg.png";
import Slogan from "../components/slogantext/Slogan";

const OurApp = () => {
    return (
        <div>
            <Slogan
                title="What is Bro’chef App?"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>Bro’chef App  is simple and self explanatory you search for recipes, while calculating your kcal goal. </p>
            </Slogan>
            our app page
            Guide on how to use the app.
        </div>
    );
};

export default OurApp;