import { useState } from 'react'
import TaskTable from './components/TaskTable'
import Login from './auth/Login'
import { LangProvider } from './context/languageContext'


function App() {


  return (
    <>
   <div className="container">
   <TaskTable/>
   </div>
   
   {/* <LangProvider>
   <Login/>
   </LangProvider> */}
    </>
  )
}

export default App
