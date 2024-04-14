import './App.css'
import {Route} from 'react-router-dom'
import CatPage from './pages/CatPage'
function App() {

  return (
      <div className='App'>
        <Route path="/hi" component={CatPage} exact/>
        Hello World
      </div>
  )
}

export default App
