import React, { Component } from 'react';
import House from './../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }


        this.componentDidMount = () => {axios.get('/api/properties')
        .then( res => {this.setState({ houses: res.data })} )}
        
        
         
    }

    
    
    
    
      handleDelete = (address) => {
        //  console.log(address);
         axios.delete(`/api/delete/${address}`)
         .then( this.componentDidMount())
     };
    
    
    render() {


        
        let displayHouses = this.state.houses.map((house, i) => {
            return (
                <div key={i}>
                    <House 
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    zip={house.zip}
                    img={house.img}
                    key={i}
                    delete={this.handleDelete}

                    />
    
                </div>
            )
        }
        )

        

        
        return (
            <div>
                Dashboard Component
                
                <Link to='/wizard'><button>Add New Property</button></Link>

                {displayHouses}

            </div>
        )
    }
}

export default Dashboard;