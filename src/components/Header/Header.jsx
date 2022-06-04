import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from 'core@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar ClassName={Classes.toolbar}>
                <Typography variant="h5" ClassName={Classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" ClassName={Classes.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete>
                        <div className={Classes.search}>
                            <div className={Classes.searchIcon}>
                                <SearchIcon />
                            </div>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;