import React from 'react';
import '../slogantext/Slogan.css'

const Slogan = ({img, imgDescription, title, children}) => {
    return (
        <div className="slogan-styling">
            <section className="slogan-text-styling">
                <h1>{title}</h1>
                {children}
            </section>
            <section className="slogan-img-styling">
                <img src={img} alt={imgDescription}/>
            </section>
        </div>

        // <div className="slogan-styling">
        //     <ul>
        //         <li>
        //             <img src={img} alt={imgDescription}/>
        //         </li>
        //         <li>
        //             <h2>{title}</h2>
        //             {children}
        //         </li>
        //     </ul>
        //
        // </div>

    // <div className="slogan-styling">
    //     <section className="section-styling">
    //         <img src={img} alt={imgDescription}/>
    //         <h2>{title}</h2>
    //         {children}
    //     </section>
    // </div>

    );
};

export default Slogan;