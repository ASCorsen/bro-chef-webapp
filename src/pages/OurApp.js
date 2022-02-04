import React from 'react';
import sloganImg from "../assets/sloganimg.png";
import guideImg from "../assets/guidepage.png"
import Slogan from "../components/slogantext/Slogan";

const OurApp = () => {
    return (
        <div>
            <Slogan
                title="What is Bro’chef App?"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>Bro’chef App is simple and self explanatory you search for recipes, while calculating your kcal
                    goal. </p>
            </Slogan>
            <h2 className="content-title">Bro'chef Features!</h2>
            <article className="article-content">
                <p> Bro'chef shows on 1 page which recipes can be made with a simple search request.
                    We will provide information such as calories, protein, fat and simple cooking instructions.
                </p>
                <p>
                    Learning new habits and routines can be challenging for some.
                    The web application can be a tool for insight and routine that contribute to a healthy lifestyle.
                </p>
                <h2>Features explained</h2>
                <div className="guide-img-styling">
                    <img className="guide-size-styling" src={guideImg} alt="instructions"/>
                </div>
            </article>
        </div>
    );
};

export default OurApp;