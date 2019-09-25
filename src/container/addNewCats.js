import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import AddCat from '../components/addCat'

import { getCatsAction } from '../actions/cats'
import {addnewCatAction, changeNameValue, changeUrlValue} from '../actions/addCat'

import { bindActionCreators } from "redux";


import EditModal from "../components/modal";

class AddNewStaff extends Component {
    constructor(props){
        super(props)
        this.state = {modal: false}
        this.message = ""
    }
     
    showModal = (msg) =>{
        this.setState({modal : true})
        this.message = msg
    }
    closeEditModal = () => {
        this.setState({modal : false})
    }
    render() {
     const { addnewCatAction, changeNameValue, inputName, inputUrl, changeUrlValue } = this.props
        return (
            <Fragment>
                <AddCat   showModal = {this.showModal}  addnewCatAction = { addnewCatAction } changeUrlValue = { changeUrlValue } changeNameValue = { changeNameValue } inputName = { inputName } inputUrl = { inputUrl } /> 
                    <EditModal visible={this.state.modal}
                        onOk={this.closeEditModal}
                        onCancel={this.closeEditModal}
                        msg = {this.message}
                    />
            </Fragment>

        );
    }
}


const mapStateToProps = state => ({
    inputName: state.addCat.inputName,
    inputUrl: state.addCat.inputUrl
});

const mapDispatchToProps = dispatch => bindActionCreators({ addnewCatAction, changeNameValue, changeUrlValue, getCatsAction }, dispatch);

export default AddNewStaff = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewStaff);