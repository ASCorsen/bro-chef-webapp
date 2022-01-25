import React, {useState} from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../assets/sloganimg.png";
import Button from "../components/button/Button";


const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    function handleSubmit (e) {
        e.preventDefault()
        alert("Feature pending...... "+
            "\nYour name: " + name +
            "\nyour Email: "+ email +
            "\nYour Comment: " + comment)
    }
    return (
        <div>
            <Slogan
                title="Want to contact Bro’chef?"
                img={sloganImg} imgDescription="Bro'chef-himself!">
                <p>We love to hear from you, please fill in our contact form and let us know your ideas! </p>
            </Slogan>
            <h2 className="content-title">Contact Us</h2>
            <form className="form-styling" onSubmit={handleSubmit}>
                <label htmlFor="name-field">
                    <input
                        type="name"
                        id="name-field"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="email-field">
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="comment-styling" htmlFor="comment-field">
                    <input
                        type="comment"
                        id="comment-field"
                        name="comment"
                        placeholder="What do you want to share?"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <div className="btn-contact-styling">
                        <Button type="submit"
                                isDisabled={ !name || !email || !comment}
                                clickHandler={handleSubmit}
                        >Submit</Button>
                    </div>
                </label>
            </form>
        </div>
    );
};

export default Contacts;