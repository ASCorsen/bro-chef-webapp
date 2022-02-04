import React from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png"
import Calculator from "../components/calculator/Calculator";
import Recipes from "../components/search-recipes/Recipes";

const Home = () => {
    return (
        <div>
            <Slogan
                title="Need Wisdom? Bro'chef got you!"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>Our goal is to give insight on binge habits and healthy lifestyle nutrition, focusing on simplicity.
                    Please log in to use the recipe, and calculator options.</p>
            </Slogan>

            <h2 className="content-title">Simple recipe search engine</h2>

            <Recipes/>

            <Calculator/>

        </div>
    );
};

export default Home;