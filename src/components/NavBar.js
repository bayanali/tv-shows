import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


export default function NavBar() {
  return (
    <div style={{flexGrow:1}}>
      <AppBar position="static">
          <ToolBar>
                <Typography variant="headline" color="inherit"
                style={{flexGrow:1}}
                >
                    TV-Shows
                </Typography>
                
               
                  <Button color="inherit"
                  component={Link}
                  to={'/shows'}
                  
                  > Browse Shows 
                   </Button>

                  <Button color="inherit"
                  component={Link}
                  to={'/'}
                
                  > Home  </Button>
              
               
          </ToolBar>
      </AppBar>
    </div>
  )
}
