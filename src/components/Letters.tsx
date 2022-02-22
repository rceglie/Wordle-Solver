import React from 'react';
import '../index.css';

type Props = {
    isOpen: boolean
}

const Hello = ({isOpen}:Props) => {
    return(
        <div className="letter-row">
            <button className="letter">M</button>
            <button className="letter">A</button>
            <button className="letter">D</button>
            <button className="letter">D</button>
            <button className="letter">Y</button>
        </div>
    )
}

export default Hello