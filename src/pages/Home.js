import React from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png"

const Home = () => {
    return (
        <div>
            <Slogan
                title="Need Wisdom? Bro'chef got you!"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>Our goal is to give insight on binge habits and healthy lifestyle nutrtion, focusing on simplicity.
                    Please log in to use the recipe, and calculator options.</p>
            </Slogan>

          home stuff
        </div>
    );
};

export default Home;