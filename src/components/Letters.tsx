import React from 'react'

type Props = {
    isOpen: boolean
}

const Row = (num) => {
    var ret = []
    for (var i = 0; i < num; i++){
        ret.push(
            <div>
            <button className="letter">M</button>
            <button className="letter">A</button>
            <button className="letter">D</button>
            <button className="letter">D</button>
            <button className="letter">Y</button>
            </div>
        )
    }
    return ret
}

const Hello = ({isOpen}:Props) => {
    return(
        <div>
            <button className="letter">M</button>
            <button className="letter">A</button>
            <button className="letter">D</button>
            <button className="letter">D</button>
            <button className="letter">Y</button>
        </div>
    )
}

export default Hello