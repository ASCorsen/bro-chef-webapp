import React from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";

const Contacts = () => {
    return (
        <div>
            <Slogan
                title="Want to contact Bro’chef?"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>We love to hear from you, please fill in our contact form and let us know your ideas! </p>
            </Slogan>
            Contacts page
        </div>
    );
};

export default Contacts;