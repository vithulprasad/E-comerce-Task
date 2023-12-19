import { useEffect } from "react"
import { isLogIn } from "../../apis/connections/user"
import { useNavigate } from "react-router-dom"

function IsLogin() {
    const navigate = useNavigate()
    useEffect(()=>{
    const data = async()=>{
        await isLogIn()
        .then((res)=>{
           if(res.data.success == true){
            navigate('/')
           }
        })

    }
    data()
    },[])
  return (
    <></>
  )
}

export default IsLogin
