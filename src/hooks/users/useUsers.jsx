import { instance } from "../api"
import Cookies from "js-cookie";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getNotify } from "../notify";
const notify = getNotify()
// ------------------Login -------------------
const login = async (data) => {
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
        onSuccess: (data, vars) => {
            notify('ok', data.message)
            console.log('test')
            if (vars.onSuccess) {
                vars.onSuccess(data)
            }
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
    const response = await instance.get(`/api/users/me/${id}`)
    return response.data
}

export const useGetuser = (id) => {
    const enabled = !!id; // faqat id mavjud bo‘lsa query ishlaydi
    const { data, isLoading, error } = useQuery({
        queryKey: ['user', id],
        queryFn: () => getUser(id),
        enabled,
    })
    return { data, isLoading, error }
}

// ------------------ UPDATE USERS ----------------------

const updateUser = async (data) => {
    let { id, userUpdate } = data
    console.log(id)
    console.log(userUpdate)
    const response = await instance.patch(`/api/users/upadteuser/${id}`, userUpdate)
    return response.data
}

export const useUpdateUser = (id) => {
    const queryclinet = useQueryClient();
    const updateMuattion = useMutation({
        mutationFn: updateUser,
        onSuccess: (data) => {
            console.log(data)
            notify('ok', data.message)
            queryclinet.invalidateQueries(['user', id]);
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return updateMuattion
}
const updateUserAvatar = async (data) => {
    let { id, formdata } = data;

    const response = await instance.patch(`/api/users/upadteuser/${id}`, formdata, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });

    return response.data;
}


export const useUpdateUserAvatar = (id) => {
    const queryclinet = useQueryClient();
    const updateMuattionAvatar = useMutation({
        mutationFn: updateUserAvatar,
        onSuccess: (data, vars) => {
            notify('ok', data.message)
            if (vars.onSuccess) {
                vars.onSuccess(data)
            }
            queryclinet.invalidateQueries(['user', id]);
        },
        onError: (err, vars) => {
            vars.onError(err)
            // console.log(err)
        }
    })

    return updateMuattionAvatar
}

// -------------------------- GET ALL USERS -----------------------

const getallusers = async () => {
    const result = await instance.get('/api/users/allusers')
    return result.data
}

export const useGetAllUsers = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: getallusers
    })
    return { data, isLoading, error }
}

// -------------------------------   admin role update --------------------------

const updateRole = async (data) => {
    let { id, role } = data
    const response = await instance.patch(`/api/users/role/${id}`, { role})
    return response.data
}

export const useupdateRole = (id) => {
    const queryclinet = useQueryClient();
    const updateRoleMuattion = useMutation({
        mutationFn: updateRole,
        onSuccess: (data) => {
            console.log(data)
            notify('ok', data.message)
            queryclinet.invalidateQueries(['user', id]);
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return updateRoleMuattion
}

// -------------------------------   admin delete user --------------------------

const deleteUser = async (id) => {
    const response = await instance.delete(`/api/users/delete/${id}`)
    return response.data
}

export const usedeleteUser = (id) => {
    const queryclinet = useQueryClient();
    const deleteUserMuattion = useMutation({
        mutationFn: deleteUser,
        onSuccess: (data) => {
            console.log(data)
            notify('ok', data.message)
            queryclinet.invalidateQueries(['user', id]);
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return deleteUserMuattion
}