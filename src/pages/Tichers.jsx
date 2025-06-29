import { useParams } from 'react-router-dom'
import { useGetuser } from '../hooks/users/useUsers'
import Cookies from 'js-cookie'
import TichersComponent from '../components/tichers/Tichers'
function Tichers() {
    const { isLoading, data } = useGetuser(Cookies.get('userid'))
    console.log(isLoading)
    console.log(data)
  

    return (
        <TichersComponent/>
    )
}

export default Tichers