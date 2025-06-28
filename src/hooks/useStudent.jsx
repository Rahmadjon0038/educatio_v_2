import { useQuery } from "@tanstack/react-query";
import { instance } from "./api";

const getActiveSudents = async () => {
    const response = await instance.get(`/api/students`)
    return response.data
}

export const useActiveSudents = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['student'],
        queryFn:getActiveSudents,
    })
    return { data, isLoading, error}
}
