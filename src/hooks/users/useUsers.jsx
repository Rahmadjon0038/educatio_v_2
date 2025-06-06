import { instance } from "../api"
import Cookies from "js-cookie";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getNotify } from "../notify";
const notify = getNotify()
// ------------------Login -------------------
const login = async (data) => {
    console.log('logindara', data)
    const response = await instance.post('api/auth/login', data)
    return response.data
}

export const useLogin = () => {
    const mutationLogin = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            console.log(data, 'test')
            Cookies.set('token', data.token)
            notify('ok', data.message)
        },
        onError: (err) => {
            console.log(err, 'xatolik')
            notify('err', err.response.data.error)
        }
    })
    return mutationLogin
}
// ------------------/Login -------------------

// ------------------/Register -------------------
const register = async (data) => {
    console.log('registerdata', data)
    console.log('registerdata', data)
    const response = await instance.post('api/auth/register', data)
    return response.data
}

export const useRegister = () => {
    const mutationRegister = useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            console.log(data, 'test')
            notify('ok', data.message)
        },
        onError: (err) => {
            console.log(err, 'xatolik')
            notify('err', err.response.data.error)
        }
    })
    return mutationRegister
}
// -----