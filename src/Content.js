import React from 'react';
import './content.css';

class Content extends React.Component{
    
    constructor(props){
        super(props)
        console.log(props);
    }
    

    render() {
        return(
            <div>
                <h2 className="mt-5 text-success">{this.props.title}</h2>
                <img className="img-fluid rounded" src={this.props.image}></img>
                <p className="text-primary">Author: {this.props.copyright}</p>
                <div>
                    <p className="explanation">Description: {this.props.explanation}</p>
                </div>
            </div>
        )
    }
}

export default Content;