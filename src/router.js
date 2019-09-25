import React, { Component, Fragment } from "react";
import { Switch, Route, } from "react-router-dom";


import App from './container/App.js'

import AddNewCat from './container/addNewCats'

class Router extends Component {

   render() {
        
      return (
    <Fragment>
	    <Switch>
         <Route path="/" exact component={App} />
         <Route path="/newCat" exact component={AddNewCat} />
	    </Switch>
    </Fragment>
       )
   }

}

export default Router;

