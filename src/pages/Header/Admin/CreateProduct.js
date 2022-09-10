import React from 'react'
import Footer from '../../../components/Footer/Footer'
import LoginForm from '../../../components/Header/LoginForm/LoginForm'
import Sidebar from '../../../components/Header/Sidebar'
import TopBar from '../../../components/Header/TopBar/TopBar'

const CreateProduct = () => {
  return (
    <div>
      <TopBar />
      <Sidebar />
      <div>
        <h1>Skapa Produkt</h1>  
      </div>
      <LoginForm />
      <Footer />
    </div>
  )
}

export default CreateProduct