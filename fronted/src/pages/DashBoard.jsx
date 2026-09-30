import { useState } from "react"
import { useUsers } from "../store/usersManagement"
import { Navigate, NavLink } from "react-router-dom"


export default function DashBoard() {
    const users = useUsers(state => state.users)
    const [logOut , setLogOut] = useState(false)
    const dispatch = useUsers(state => state.dispatch)
    const [user] = users.filter(user =>{
        return user.isAuthenticated
    })
    const hanldeLogOut = ()=> {
        dispatch({type : 'LOG_OUT' , payload : user.name})
        setLogOut(true)
    }
 if(logOut) return <Navigate to='/' />
  return (
    <section>
        {
            user ?
             <div>
                <p>Welcome {user.name} </p>
                <button onClick={hanldeLogOut}>Log out</button>
             </div>
             : <NavLink to='/' >Log in</NavLink>
        }
    </section>
  )
}
