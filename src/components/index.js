import React, { Component } from 'react';

class DrawImg extends Component {
    clickMe = (id) =>{
        alert(id)
    }
    render() {
       
        const {name, id, img, trigger, clickHandler} = this.props
        
        const classNames = ["img"]
        if(trigger){
            classNames.push("marked")
        }
        
        return (
        <div className="mainDiv">
            <p>{name}</p>
            <div className="mainDiv" onClick={clickHandler}>
                 <img className={classNames.join(" ")} src={img} alt=""></img>
            </div>
            <button onClick={()=>this.clickMe(id)}>ClickMe</button>
        </div>
        );
    }
}

export default DrawImg;
