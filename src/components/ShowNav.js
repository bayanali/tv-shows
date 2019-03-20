import React from 'react'
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import {Route} from 'react-router-dom';

export default function ShowNav() {
  return (
    <div>
        
        <Route exact path={'/shows'}  component={ShowList} ></Route>
        <Route path={'/shows/:id'} component={ShowDetails}></Route>
      
    </div>
  )
}
