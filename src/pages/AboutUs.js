import React from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";

const AboutUs = () => {
    return (
        <div>
            <Slogan
                title="Want to know more about Bro’chef?"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>Read on! We wanted to get insights on easy recipes, combined with your Kcal intake...so we created Bro’Chef!</p>
            </Slogan>
            about us page
        </div>
    );
};

export default AboutUs;