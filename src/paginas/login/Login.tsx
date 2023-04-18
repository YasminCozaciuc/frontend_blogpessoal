import React, { ChangeEvent } from 'react'
import './Login.css'
import { Grid, TextField, Button } from '@material-ui/core';
import { Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


import { useState } from "react";
import UsuarioLogin from "../../models/UsuarioLogin";
import { login } from '../../service/Service';

function Login() {

    const history = useNavigate()

    const [userLogin, setUserLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''

    })
    function updateModel(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>){
        event.preventDefault()
        try {
            await login('/usuarios/logar', userLogin, setUserLogin)
            alert('Usuário logado com sucesso')
            history('/home')
        } catch(error){
            console.log(error);
            alert('Usuário ou senha inválidos')
        }
    }

    return (
        <>
            <Grid container alignItems="center">
                <Grid item xs={6} justifyContent="center">
                    <Box display="flex" justifyContent="center" >
                        <Grid item xs={8}>
                            <form onSubmit={onSubmit}>
                                <Typography variant="h3" align="center" gutterBottom style={{ color: "#ae7db0", fontWeight: "bold" }}>Entrar</Typography>
                                <TextField 
                                variant="outlined" 
                                name= 'usuario'
                                value={userLogin.usuario}
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => updateModel(event)}
                                label="Usuário" 
                                margin="normal" 
                                fullWidth />
                                <TextField 
                                type="password" 
                                name= "senha"
                                value={userLogin.senha}
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => updateModel(event)}
                                variant="outlined" 
                                label="Senha" 
                                margin="normal" 
                                fullWidth />
                                <Box marginY={2}>
                                    <Link to="/home">
                                        <Button type="submit" variant="contained" color="inherit" fullWidth style={{ borderColor: "white", backgroundColor: "#824e8d", color: "white" }}>Logar</Button>
                                    </Link>
                                </Box>
                            </form>
                            <Typography marginTop={2} align="center" variant="body1">
                                Ainda não tem conta? <Link to="" className="linkLogin">Cadastre-se aqui!</Link>
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Grid xs={6} className="imagemLogin"></Grid>
            </Grid>
        </>
    )
}

export default Login;