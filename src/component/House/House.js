import React from 'react';

function House(props){
    let {name, address, city, zip, img} = props;
    return(
        <div >

        {/* {console.log(props.address)} */}
            
            <h2>{name}</h2>
            <h4>{address}</h4>
            <h4>{city}</h4>
            <h4>{zip}</h4>
            {/* <img src={img}/> */}
            <button onClick={() => props.delete(props.address)}>Delete</button>


        </div>
    )
}

export default House;