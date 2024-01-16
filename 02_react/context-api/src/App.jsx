
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
