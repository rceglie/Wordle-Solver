import React from 'react';
import '../index.css';

type Props = {
    row: number
}

const LetterRow = ({row}:Props) => {

    const letters = [0,1,2,3,4]

    return(
        <div className="letter-row">
            {letters.map((letter) => <button 
                className={`letter row-${row} letter-${letter}`}
                data-color="grey"
                disabled
                ></button>)}
        </div>
    )
}

export default LetterRow