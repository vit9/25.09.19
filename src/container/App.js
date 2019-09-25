import React, { Component } from 'react';


import DrawImg from '../components/'

import AddBtn from '../components/addBtn'

import { getCatsAction } from "../actions/cats"

import { connect } from 'react-redux';

import { bindActionCreators } from "redux"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {pictures: null}
  }
  componentDidMount(){
    const { getCatsAction } = this.props
    getCatsAction()
  }
  clickHandler = (id) =>{
    const { cats } = this.props
    const pictures  = cats.concat()
    const mark = pictures.find(el=> el.id === id) 
    mark.trigger = !mark.trigger;
    this.setState({pictures})
  }
  
  render(){
    const { cats } = this.props
  return(
    <div className="App">
       {cats.map((el,key)=> 
        <DrawImg key={key} img={ el.imageUrl } id={ el.id } name={ el.name } clickHandler={()=>this.clickHandler(el.id)} trigger={el.trigger} />
       )}
       <AddBtn/>
    </div>
  );
  }
  
}
 
 


const mapStateToProps = state => ({
 cats: state.getCats.cats
});

const mapDispatchToProps = dispatch => bindActionCreators({ getCatsAction }, dispatch);

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
