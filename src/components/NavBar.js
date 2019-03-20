import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function NavBar() {
  return (
    <div>
      <AppBar position="static">
          <ToolBar>
                <Typography variant="headline" color="inherit" align="center">
                    TV-Shows
                </Typography>
               
          </ToolBar>
      </AppBar>
    </div>
  )
}
