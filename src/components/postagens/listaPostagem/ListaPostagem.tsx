import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Postagem } from '../../../models/Postagem'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { getAll } from '/Users/yasmi/Documents/React/blogPessoal/src/service/Service'

function ListaPostagem() {

    const history = useNavigate()

    const [postagens, setPostagens] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage("token")

    async function getAllPostagens() {
        await getAll("/postagens", setPostagens, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        getAllPostagens()
    }, [postagens.length])

    useEffect(() => {
        if (token === "") {
            alert("Sem token, não, né?")
            history("/login")
        }
    })

    return (
        <>
            {postagens.map((postagem) => (
                <Box m={4}>
                    <Card>
                        <CardContent>

                            <Typography color="text.secondary" gutterBottom>
                                {postagem.titulo}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {postagem.texto}
                            </Typography>
                            <Typography variant="body1" component="p">
                                {postagem.tema.descricao}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Data da Postagem: {postagem.data}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary" size="small">Editar</Button>
                            <Button variant="contained" color="secondary" size="small">Deletar</Button>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    )
}

export default ListaPostagem