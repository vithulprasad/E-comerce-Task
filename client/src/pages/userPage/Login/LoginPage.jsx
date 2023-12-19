
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import { login } from "../../../apis/connections/user";
import { useDispatch } from "react-redux";
import { userSet } from "../../../Redux/slices/user";


function Login() {
  const dispatch = useDispatch()
  const emailORpassRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
  
    e.preventDefault()
    const data = {
      emailOrPass : emailORpassRef.current.value,
      password :passwordRef.current.value
    }
    
    if(emailORpassRef.current.value === "" || emailORpassRef.current.value === null ){
      toast.error("email field is empty")
    }else if(passwordRef.current.value === "" || passwordRef.current.value === null ){
      toast.error("password  field is empty")
    }else{
      const submit = async()=>{
    if(data){
      await login(data)
      .then((value)=>{
        if(value.data.success === true ){
            toast.success(`welcome ${value.data.name}`)
            localStorage.setItem('token',value.data.token)
            const data = {
              token:value.data.token,
              role:"user"
            }
            dispatch(userSet(data))
            navigate('/')    
        }else{
          toast.error(`${value.data.message}`)
        }
      })
    }
      }
      submit()
    }
  }
  return (
    
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex  flex-col justify-center px-6 py-12 lg:px-8 shadow-lg h-[400px] border bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email 
              </label>
              <div className="mt-2">
                <input
                ref={emailORpassRef}
                  id="email"
                  name="email"
                  type="string"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

         <div className="w-full  flex justify-between">
         <Link to='/register' className="text-blue-500 underline">Register</Link>
          <Link to='/admin/login' className="text-blue-500 underline">Admin login</Link>
         </div>
       
        </div>
      </div>
    </div>
  );
}

export default Login;
