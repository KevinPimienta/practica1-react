import React,{Component} from 'react';
import logotec from './logotec.jpg'; 
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className="Header">
             <img src={logotec}></img>
            </div>
        );
    }
}
export default Header;