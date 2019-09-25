import React, { Component, Fragment } from 'react';


import { Link } from "react-router-dom";

import { Icon } from 'antd';

class AddCat extends Component {
    changeName(e){
        const { changeNameValue,   } = this.props;
        changeNameValue(e.target.value)
      }
      changeUrl(e){
        const { changeUrlValue,   } = this.props;
        changeUrlValue(e.target.value)
      }
      clickHandler = ()=>{
        const { inputName, inputUrl, addnewCatAction, showModal } = this.props
            let obj = {
                "imageUrl": inputUrl,
                "name" : inputName
            }
            
           if(obj.imageUrl === "" || obj.name === ""){
               let warning = "Не все поля были заполнены"
                showModal(warning)
           }
           else if(obj.imageUrl.slice(0, 4) !== "http"){
            let warning = "не корректный url картинки"
                showModal(warning)
           }
           else {
            let ok = "Коте успешно добавлен"
            addnewCatAction(obj)
            showModal(ok)
           }
        }
    render() {
    
        
        return (
            <Fragment>
               <div className="div"> 
                <input  onChange={e=>this.changeName(e)} placeholder="Имя Кота"/>
                <input onChange={e=>this.changeUrl(e)} placeholder="Url картинки"/>
                <button className = "button"  onClick={this.clickHandler}>Добавить Кота</button>
                <Link  to = "/" className="linkTopButton">
                    <Icon type="home" style={{ fontSize: '30px' }} />
                </Link>
                </div> 
            </Fragment>
        );
    }
}

export default AddCat;