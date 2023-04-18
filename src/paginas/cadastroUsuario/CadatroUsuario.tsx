import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import "./CadastroUsuario.css"
import React, { ChangeEvent, useEffect,  useState } from 'react'
import { useNavigate, useResolvedPath } from 'react-router-dom'
import { cadastrarUsuario } from '../../service/Service';
import { SpeedDialAction } from '@material-ui/lab';
import Usuario from '/Users/yasmi/Documents/React/blogPessoal/src/models/Usuario'

function CadastroUsuario() {

    const history = useNavigate()

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: ""
    })

    const [usuarioResult, setUsuarioResult] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: ""
    })

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value)
    }

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario ({
            ...usuario,
            [event.target.name]: event.target.value
        })
    }
    

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()

        if(confirmarSenha === usuario.senha) {
            try {
                await cadastrarUsuario("/usuarios/cadastrar", usuario, setUsuarioResult)
                alert("Usuário cadastrado com sucesso!")
            }
            catch(error) {
                alert("Por favor, verifique os campos!")
            }
        }else {
            alert("As senhas não coincidem")
            setConfirmarSenha("")
            setUsuario({
                ...usuario,
                senha: ""
            })
        }
    }

    useEffect(() => {
        if(usuarioResult.id !== 0) {
            history("/login")
        }
    }, [usuarioResult])

    function back() {
        history("/login")
    }

    return (
        <>
            <Grid container alignItems="center">
                <Grid item xs={6} className="imagemCadastro"></Grid>
                <Grid item xs={6} justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <Grid xs={8}>
                            <form onSubmit={onSubmit}>
                                <Typography variant="h3" align="center" gutterBottom>Cadastrar</Typography>
                                <TextField variant="outlined" name="nome" onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} value={usuario.nome} label="Nome completo" margin="normal" fullWidth/>
                                <TextField variant="outlined" name="usuario" onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} value={usuario.usuario} label="Usuário (endereço de e-mail válido)" margin="normal" fullWidth/>
                                <TextField variant="outlined" name="foto" onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} value={usuario.foto} label="URL da Foto" margin="normal" fullWidth/>
                                <TextField type="password" name="senha" onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}  value={usuario.senha} variant="outlined" label="Senha" margin="normal" fullWidth/>
                                <TextField type="password" variant="outlined" name="confirmarSenha" onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} value={confirmarSenha} label="Confirmar Senha" margin="normal" fullWidth/>
                                <Box marginY={2} display="flex" justifyContent={'space-around'} gap={4}>
                                        <Button onClick={back} variant="contained" color="error" fullWidth>Cancelar</Button>
                                        <Button type="submit" variant="contained" color="primary" fullWidth>Cadastrar</Button>
                                </Box>
                            </form>
                            
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default CadastroUsuario