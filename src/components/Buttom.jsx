import React from 'react';
import '../styles/buttom.css'


const ButtomInfo = () => {

    return (
        <>
            <div className="buttum">
                <p>©️ All rights reserved.</p>
                <p>
                    images in this site are taken from
                    <a target='blank' className='bt-link' href='https://unsplash.com'> unsplash</a>, 
                    icons are from <a target='blank' className='bt-link' href='https://fontawesome.com'>font awesome</a>.
                </p>
                <p>to check this gitHub repo click <a className='bt-link' href='https://github.com/meniviner'>here</a>.</p>
            </div>
        </>
    );
};

export default ButtomInfo;

