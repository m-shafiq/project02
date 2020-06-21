import React from 'react'

function Dinner(props){

    return  (
        <div>
            <h2> We are serving {props.dishName} Today.</h2>
            <p> Its spicy and tasty</p>
            <h2> with sweet dish: {props.sweetName}</h2>
        </div>
    );
}

export default Dinner;