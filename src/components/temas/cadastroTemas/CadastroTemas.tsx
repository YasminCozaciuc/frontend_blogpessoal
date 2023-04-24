import { Button, TextField } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { Tema } from '../../../models/Tema';

function CadastroTemas() {

    const history = useNavigate()
    const [token, setToken] = useLocalStorage('token')

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ""
    })

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if(token === "") {
            alert("Sem token não, né?")
            history("/login")
        }
    }, [token])
    return (
        <>
            <h2>Cadastrar Tema</h2>
            <form>
                <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} value={tema.descricao} label="Descrição do Tema" name="descricao"></TextField>
                <Button type="submit" variant="contained">Cadastrar</Button>
            </form>
        
        </>
    )
}

export default CadastroTemas