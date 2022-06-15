import React, { Component } from 'react';


class Altitude extends Component {
    state = {    a:300,} 
    //a= a-(b/100)
    style ={
        height: '312px',
        width: '10%',
        marginLeft: '55px',
        marginTop:'40px',
        boxShadow:' 5px 10px 18px #888888',
        color:'white',
        marginBottom:'60px',
        textAlign:'center',
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: '10px',
        
    }
    styleLin={
        position: 'absolute',
        top: (this.props.altitude),
        width: '101px',
        height:'0px',
        border: '4px solid red',
    }    
 
 styleP={  marginTop:'63px'}
 
    render() { 
        console.log(this.props.altitude);
        return (
<div style={this.style}>
   <div style={this.styleLin}></div>
              3000 
    <p  style={this.styleP}>2000</p>
    <p  style={this.styleP}>1000</p>
    <p  style={this.styleP}>0</p>
</div>
        );
    }
}
 
export default Altitude;
