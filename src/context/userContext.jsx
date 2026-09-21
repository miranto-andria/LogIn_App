import { createContext, useContext, useReducer , useEffect } from "react"

const usersContext = createContext()
const getInitialState = () =>{
    const saved = localStorage.getItem('user')
    return {
        user : saved ? JSON.parse(saved) : null ,
        isAuthenticated : !!saved
    }
}

export function useUsers(){
    return useContext(usersContext)
}

const usersReducer = (state , action) =>{
    switch(action.type){
        case 'LOG_IN' : return {
            user : action.payload , isAuthenticated : true
        }
        case 'LOG_OUT' : return  {
            user : null , isAuthenticated : false
        }
    }

}


export default function AuthProvider({children}) {
    const [state , dispatch] = useReducer(usersReducer , undefined , getInitialState)
    const login = ()=>{dispatch({type : 'LOG_IN' , payload : 'Miranto'})}
    const logout = ()=>{dispatch({type : 'LOG_OUT'})}
      
    useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

    const value = {
        user : state.user , 
        login ,
        logout
        
    }
  return (
    <usersContext.Provider value = {value}>
        {children}
    </usersContext.Provider>
  )
}
