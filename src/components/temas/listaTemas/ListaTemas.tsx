import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Tema } from '../../../models/Tema';
import { getAll } from '../../../service/Service';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';

function ListaTemas() {

    const history = useNavigate()

    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token')

    async function getAllTemas() {
        await getAll("/temas", setTemas, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        getAllTemas()
    }, [temas.length])

    useEffect(() => {
        if (token === "") {
            alert("Sem token não, né?")
            history("/login")
        }
    }, [token])

    return (
        <>
            {temas.map((tema) => (
                <Box m={4}>
                    <Card>
                        <CardContent>

                            <Typography color="text.secondary" gutterBottom>
                                Tema:
                            </Typography>
                            <Typography variant="h5" component="div">
                                {tema.descricao}
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

export default ListaTemas
