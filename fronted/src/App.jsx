
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Form from './pages/form'





function App() {
    
    return <Routes>
                <Route path='/' element={<Form/>} />
            </Routes> 
}



export default App
  



