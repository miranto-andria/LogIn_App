import { useState } from "react"
import { useUsers } from "../store/usersManagement"
import { Navigate } from "react-router-dom"
import DashBoard from "./DashBoard"



export default function Form() {
  const users = useUsers(state => state.users)
  const dispatch = useUsers(state => state.dispatch)
  const [match , setMatch] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
  const dataUser = new FormData(e.target)
  
    users.forEach((user) => {
      if(user.name.toLocaleLowerCase() === dataUser.get('name').toLocaleLowerCase() && user.email.toLocaleLowerCase() === dataUser.get('email').toLocaleLowerCase()  ){
        dispatch({type : 'LOG_IN' , payload : user.name })
        setMatch(true)
      }else {
        
      }
    })
  }

  if(match) return <Navigate to='/dashboard'/>
  return (
    <section>
        <div className="flex justify-center items-center  ">
            <form className='flex flex-col gap-4 items-center w-fit bg-gray-200' onSubmit={handleSubmit}>
            <p>Log in</p>
            <small>name</small>
            <input type="text" name='name' />
            <small>email</small>
            <input type="text" name='email' />
            <button type="submit" >Confirm</button>
            </form>
        </div>
    </section>
  )
}
