import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ background: '#824e8d' }}>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Blog da Yasmin
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to='/home' style={{ color: "white" }}>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to='/postagens' style={{ color: "white" }}>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                                </Link>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to='/temas' style={{ color: "white" }}>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to='/login' style={{ color: "white" }}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Link>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;