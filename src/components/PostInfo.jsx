import React from 'react';

const PostInfo = (props) => {

    return (
        <div className="wrapper">
            <div className='content'>
                <h1>Laura Smith</h1>
                <p className='prof'>Frontend Developer</p>
                <p className='site'>laurasmith.website</p>
                <div className="buttons">
                    <a href='#' className="btn-email">Email</a>
                    <a href='#' className="btn-linledin">LinledIn</a>
                </div>
                <div className="resume">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>

            </div>
        </div>
    );
};

export default PostInfo;