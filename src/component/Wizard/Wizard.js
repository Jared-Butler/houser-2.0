import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component{
    constructor(){
        super();
        this.state={
            propName:'',
            address:'',
            city:'',
            state:'',
            zip:'',
            img:''
        }
    }

    handleAddProperty = () => {
        axios.post('/api/add',this.state)
        .then(window.location='http://localhost:3000/')
    };

 
    render(){
        return(
            <div>
                
                
                <input type='text' onChange={(e) => this.setState({propName: e.target.value})} placeholder='Property Name'/>
                <input type='text' onChange={(e) => this.setState({address: e.target.value})} placeholder='Address'/>
                <input onChange={(e) => this.setState({city: e.target.value})} placeholder='City'/>
                <input onChange={(e) => this.setState({state: e.target.value})} placeholder='State'/>
                <input onChange={(e) => this.setState({zip: e.target.value})} placeholder='Zip Code'/>
                <input onChange={(e) => this.setState({img: e.target.value})} placeholder='Image'/>

                <button onClick={this.handleAddProperty}>Add Property</button>

                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard;