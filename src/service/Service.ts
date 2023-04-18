import axios from "axios";

    export const api = axios.create({
        baseURL: 'http://localhost:5173/'
    })

    export const login = async(url: string, dados: Object, setDados: Function) => {
        const resposta = await api.post(url,dados)
        setDados(resposta.data)
    }

    export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
        const resposta = await api.post(url, dados)
        setDados(resposta.data)
    }
