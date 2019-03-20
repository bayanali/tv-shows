import React, { Component } from 'react';
import Show from './Show';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Grid  from '@material-ui/core/Grid';

export class ShowList extends Component {
    state = {
        shows: [],
        searchInput: ''
    }

    componentDidMount() {

        axios.get('http://api.tvmaze.com/shows?page=1')
        .then(res => {
            // console.log(res.data);
            this.setState({shows: res.data})
            // console.log(this.state.shows)
        })
        .catch((error) => {
            console.log('Error Occured while Fetching Shows'); 
            console.log(error)
        });

    }


    onSearchInputChange = (e) => { 

    if (e.key === 'Enter'){
    this.setState({searchInput: e.target.value}, () => {
            axios.get(`http://api.tvmaze.com/search/shows?q=${this.state.searchInput}`)
            .then((res) => {  
                
                let showsResults = []
                res.data.forEach(element => {
                    showsResults.push(element.show)
                });

                    if (showsResults.length !== 0)
                        this.setState({shows: showsResults})
                    console.log(showsResults)
            
            })
            .catch((error) => {

            
                console.log('Error Occured while Fetching Shows (Search)'); 
                console.log(error)
                throw error
            }); 

        });
    }  
}

  render() {
    return (
      <div>
          <TextField
            style={{padding:24}}
            placeholder='Search Shows'
            onKeyPress={this.onSearchInputChange}
          >

          </TextField>
          <Grid container spacing={24}>

                {this.state.shows.map( show => (

                    <Grid item xs={12} sm={6} lg={4} xl={3} key={show.id} style={{padding: "40px"}}>
                        <Show show={show}/>
                    </Grid>

                ))}

          </Grid>
        
      </div>
    )
  }
}

export default ShowList
