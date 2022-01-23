import React from 'react';
import "../pages/pages.css"
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";
import {Link} from "react-router-dom";

const Recipe = () => {

    return (
        <div>
            <Slogan
                title="Bro’chef recipe information page"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>We gathered some info on how to make your recipe! Want to go back to the home screen? Click <Link to="/">Here</Link> </p>
            </Slogan>

            Hieronder komen API DATA

        </div>
    );
};

export default Recipe;