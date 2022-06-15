import React, { Component } from 'react';
import Altitude from './altitude';
import His from './his';
import Adi from './adi';
import Text from './text';

class Main extends Component {
    state = { a:10} 
    style ={
        height: '400px',
        width: '1100px',
        margin: '8%',
        backgroundColor: 'black',
        color:'white',
        alignItem:'rigth',
        justifyContent:'left',
        display: 'flex',
        flexDirection : 'row',
        boxShadow:' 5px 10px 18px #888888',
    }
    styleButten={
        display: 'flex',
        flexDirection : 'column' ,
        width: '100px',   
    }
    styleText={  color:'black'}
    stylrArrow={
      position: 'absolute',
      fontSize: '130px',
      left:'510px',
      top:'90px',
      color:'blue',
  }
    render() { 
      
        return (
            <React.Fragment>
            <div style={this.style} className="btn-group-vertical btn-primary btn-lg " id='cl'>
                <div className=" m-4" style={this.styleButten}>
                   <button className="btn-danger "> visual</button>
                   <button onClick={this.shoot} className="btn-danger"  > t e x t</button>
                   <div style={this.stylrArrow}>&#8593;</div>
                </div>
                <Altitude altitude={this.props.altitude}/>
                <His hsi={this.props.hsi}/>
                <Adi adi={this.props.adi}/>
            </div>
      </React.Fragment>
        );
    }
   
    shoot (){
        let text="altitude =      "+"HIS=        "+"ADI = ";
        alert(text);
      }
}
export default Main;