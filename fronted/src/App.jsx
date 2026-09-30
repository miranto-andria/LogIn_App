
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Form from './pages/Form'
import DashBoard from './pages/DashBoard'





function App() {
    
    return <Routes>
                <Route path='/' element={<Form/>} />
                <Route path='/dashboard' element={<DashBoard/>} />
            </Routes> 
}



export default App
  



