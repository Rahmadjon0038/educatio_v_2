import { useParams } from 'react-router-dom'
import { useGetuser } from '../hooks/users/useUsers'
import Cookies from 'js-cookie'
import TeachersComponent from '../components/tichers/Tichers'
function Teacher() {
    const { isLoading, data } = useGetuser(Cookies.get('userid'))
    console.log(isLoading)
    console.log(data)
  

    return (
        <TeachersComponent/>
    )
}

export default Teacher