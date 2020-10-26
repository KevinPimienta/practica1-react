import React, {Component} from 'react';
import './Body.css';
//import { Button } from 'react-bootstrap';

class Body extends Component{
    miHola=()=>{
        alert("Hola desde Rosarito")
    }
    render(){
        const {text}=this.props;
        return(
            <div className="Body">
            <h1>{this.props.text}</h1>
            {
                this.props.tema.map((t,index)=>
                <p key={index}>{t}</p>
                )
            }
            
            <button onClick={()=>this.miHola()}>Boton</button>
            </div>
            
        );
    };
    
}
export default Body;