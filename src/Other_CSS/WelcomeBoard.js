import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import WBStyling from './WB.module.css'

function WelcomeBoard() {
    const [text] = useTypewriter
        ({
            words: ['Hello', 'Welcome to VikiVerse'],
            loop: {},
            typeSpeed: 200,
            deleteSpeed: 100,
        });

    return (
        <div className={WBStyling.typewriting} id='wb'>
            <h1 className={WBStyling.content}>
                <span className={WBStyling.words}>
                    ‎{text}
                    {/* invisible character */}
                </span>
                {/* <Cursor /> */}
            </h1>
            <div className={WBStyling.arrow}>
                <a href="#home" className={WBStyling.to_down}></a>
            </div>
        </div>

    );
}

export default WelcomeBoard
