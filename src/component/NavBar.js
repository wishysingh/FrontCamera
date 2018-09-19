import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

const NavBar = () => {
    return(
        <div>
            <AppBar position='static'>
                <ToolBar>
                    <Typography varient='title' color='inherit'>Sample Project for React.js</Typography>
                </ToolBar>
            </AppBar>
            
        </div>
    )
}
export default NavBar;