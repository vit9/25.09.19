import React, { Component, Fragment } from 'react';

import { Icon } from 'antd';
import { Link } from "react-router-dom";


class BtnAddNewCat extends Component {
    render() {
       

        
        return (
            <Fragment>
            <div> <Link to="/newCat" className="topbutton"><Icon type="plus" style={{ fontSize: '30px' }} /></Link></div>
            </Fragment>
        );
    }
}

export default BtnAddNewCat;