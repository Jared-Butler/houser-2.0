import React from 'react';

function House(props){
    return(
        <div >
        {/* {console.log(props.address)} */}
            
            <h2>{props.name}</h2>
            <h4>{props.address}</h4>
            <h4>{props.city}</h4>
            <h4>{props.zip}</h4>
            {/* <img src={props.img}/> */}
            <button onClick={() => props.delete(props.address)}>Delete</button>


        </div>
    )
}

export default House;