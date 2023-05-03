import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/action";


function Navbar() {
    const history = useNavigate();

    const dispatch = useDispatch();

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    function logout() {
        dispatch(addToken(""));
        toast.info("Usuário deslogado.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        history("/login");
    }

    var navbarComponent;


    return (
        <>
            <AppBar position="static" style={{ background: '#824e8d' }}>
                <Toolbar variant="dense">
                    <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                        <Box style={{ cursor: "pointer" }} >
                            <Link to="/home" style={{ color: "white" }}>
                                <Typography variant="h5" color="inherit">
                                    Blog da Yasmin
                                </Typography>
                            </Link>
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
                                <Link to="/cadastrarTema" style={{ color: "white" }}>
                                    <Typography variant="h6" color="inherit">
                                        Cadastrar tema
                                    </Typography>
                                </Link>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Link to='/login' style={{ color: "white" }}>
                                    <Typography variant="h6" color="inherit">
                                        Logout
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;