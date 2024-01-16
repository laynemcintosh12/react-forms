import React , { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = newBox => {
        setBoxes(boxes => [...boxes, newBox]);
    }
    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const boxComponents = boxes.map(box => (
        <Box
            key={box.id}
            id={box.id}
            background={box.background}
            width={box.width}
            height={box.height}
            handleRemove={removeBox}
        />
    ));

    return (
        <div>
            <h1>Make some Boxes!</h1>
            <NewBoxForm addBox={addBox}/>
            {boxComponents}
        </div>
    )
}

export default BoxList;