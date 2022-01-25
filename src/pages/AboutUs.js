import React from 'react';
import "../pages/pages.css"
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";


const AboutUs = () => {
    return (
        <div>
            <Slogan
                title="Want to know more about Bro’chef?"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>Read on! We wanted to get insights on easy recipes, combined with your Kcal intake...so we created
                    Bro’Chef!</p>
            </Slogan>
            <h2 className="content-title">About Us </h2>
            <article className="article-content">
                <p>For many, a healthy lifestyle is a challenge. With on-demand services for obtaining (unhealthy)
                    food and abundant availability of snacks and sweets, the habit of an unhealthy lifestyle creeps in,
                    along with ignorance of making new (healthy) habits.
                </p>
                <p>Almost 60% of the Dutch population lives an unhealthy lifestyle and therefore runs an increased risk
                    of diabetes,
                    cardiovascular disease or kidney failure. Cardiovascular diseases and diabetes are examples of
                    chronic diseases
                    that can be traced back to an unhealthy lifestyle, which is why an unhealthy lifestyle is the
                    primary cause of previous deaths.
                </p>
                <p>
                    Fortunately, you can do a lot yourself to maintain a healthy lifestyle. Healthy living starts with
                    following a healthy lifestyle.
                    A healthy lifestyle is important to prevent you from getting sick.
                </p>
                <p>
                    What aids in a healthy lifestyle is learning new habits with ease and routines, so that new eating
                    habits creep in and ensure a fit,
                    healthy individual.
                </p>
                <h3>Here is where Bro'chef web application comes to play!</h3>
                <p>We take care of the question on what you are consuming, how much calories you should intake and
                    provide you with recipes!</p>
            </article>
        </div>
    );
};

export default AboutUs;