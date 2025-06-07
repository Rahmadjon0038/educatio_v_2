import { instance } from "../api"
import Cookies from "js-cookie";
import { useMutation, useQuery } from "@tanstack/react-query"
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
        onSuccess: (data, vars) => {
            Cookies.set('token', data.token)
            Cookies.set('userid', data.id)
            Cookies.set('role', data.role)
            notify('ok', data.message)
            if (vars.onSuccess) {
                vars.onSuccess(data)
            }
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
            notify('ok', data.message)
        },
        onError: (err) => {
            console.log(err, 'xatolik')
            notify('err', err.response.data.error)
        }
    })
    return mutationRegister
}
// -----   GET USER ----------------------

const getUser = async (id) => {
    const response = await instance.get(`/api/users/${id}`)
    return response.data
}

export const useGetuser = (id) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['user', id],
        queryFn: () => getUser(id)
    })
    return { data, isLoading, error }
}

// ------------------ UPDATE USERS ----------------------

const updateUser = async (data) => {
    let { id, userUpdate } = data
    console.log(id)
    console.log(userUpdate)
    const response = await instance.patch(`/api/users/${id}`, userUpdate)
    return response.data
}

export const useUpdateUser = () => {
    const updateMuattion = useMutation({
        mutationFn: updateUser,
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return updateMuattion
}