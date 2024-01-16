import React from 'react';

const Box = ({id, handleRemove, width = 20, height = 20, background = "black"}) => {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div style={{background,
                width: `${width}px`, 
                height: `${height}px`
            }}/>
            <button onClick={remove}>X</button>
        </div>
    );
}

export default Box;