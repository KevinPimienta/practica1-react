import React,{Component} from 'react';
import './Banner.css';

class Banner extends Component{
    render(){
        const {text}=this.props;
        return(
            <div className="Banner">
             {text}
            </div>
        );
    }
}
export default Banner;