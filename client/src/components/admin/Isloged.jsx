import { useEffect } from "react"
import { isLogin } from "../../apis/connections/Admin"
import { useNavigate } from "react-router-dom"

function Isloged() {
    const navigate = useNavigate()
    useEffect(()=>{
   const data = async()=>{
      await isLogin()
      .then((value)=>{
        if(value.data.success==true){
            navigate('/admin/')
        }
      })
   }
   data()
    },[])
  return (
    <div>
        
    </div>
  )
}

export default Isloged
