import { toast } from "react-toastify"

export const getNotify = () => {
    const notify = (ok, msg) => {
        if (ok == 'ok') {
            return toast.success(msg || 'hamasi yaxshi')
        }
        else if (ok == 'err') {
            return toast.error(msg || 'nomalum xatolik')
        }
    }
    return notify
}