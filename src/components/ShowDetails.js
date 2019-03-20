import React, { Component } from 'react';
import axios from 'axios';
import Grid  from '@material-ui/core/Grid';
import {get, split} from 'lodash';
import { Paper } from '@material-ui/core';
import ReactHtmlParser from "react-html-parser";




export class ShowDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showInformation: {}
    }
  }

  componentWillMount() {

    axios.get(`http://api.tvmaze.com/shows/${this.props.match.params.id}`)
    .then(res => {
        this.setState({showInformation: res.data})
    })
    .catch((error) => {
        console.log('Error Occured while Fetching Show'); 
        console.log(error)
    });

}

render() {

    console.log(this.state.showInformation)

    return (
      <div>
         <Grid container spacing={24} style={{padding:50}}>
         <Grid item sm>
            
              <img src={get(this.state.showInformation,'image.original','')}
              style={{maxWidth:"60%",
                    height:"auto",
                    display:"block",
                    paddingLeft:"15%",
                    }}
              />
                
         </Grid>

         <Grid item sm>
                <Paper style={{padding:"10%"}}>
                  <h1> {this.state.showInformation.name} {' '}
                    ({ split(this.state.showInformation.premiered, '-', 1)})
                    
                  </h1>
                  <h3> 
                       {get(this.state.showInformation,'rating.average','')} {'/10'}
                   </h3>

                   <h3> {this.state.showInformation.type} </h3>
                   
                  {ReactHtmlParser(this.state.showInformation.summary)}

                </Paper>        
         </Grid>
            
      
         </Grid>
        
      </div>
    )
  }
}

export default ShowDetails
