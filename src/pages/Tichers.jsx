import { useParams } from 'react-router-dom'
import { useGetuser } from '../hooks/users/useUsers'
import Cookies from 'js-cookie'
function Tichers() {
    const { isLoading, data } = useGetuser(Cookies.get('userid'))
    console.log(isLoading)
    console.log(data)
  

    return (
        <div>
          <h1>Profilega hush kelibsiz</h1>
        </div>
    )
}

export default Tichers