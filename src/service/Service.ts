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

    export const getAll = async(url: any, setDados: any, headers: any) => {
        const resposta = await api.get(url, headers)
        setDados(resposta.data)
        console.log(resposta.data)
    }
    
    export const post = async(url: string, dados: Object, setDados: Function, headers: Object) => {
        const resposta = await api.post(url, dados, headers)
        setDados(resposta.data)
    }
    
    export const put = async(url: string, dados: Object, setDados: Function, headers: Object) => {
        const resposta = await api.put(url, dados, headers)
        setDados(resposta.data)
    }
    
