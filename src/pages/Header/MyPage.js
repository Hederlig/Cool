import React from 'react'
import TopBar from '../../components/Header/TopBar/TopBar'
import Sidebar from '../../components/Header/Sidebar'
import LoginForm from '../../components/Header/LoginForm/LoginForm'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import './MyPage.css'

const MyPage = () => {
  return (
    <div>
    <TopBar />
    <Sidebar />
      <div className='mypage-container'>
        <h1>Ditt konto</h1>
        <Link to="#">Beställningar</Link>
        <Link to="#">Returer</Link>
        <Link to="#">Presentkort</Link>
        <h1>-- Admin --</h1>
        <Link to="/createproduct">Skapa ny produkt</Link>
        <Link to="#">Ändra produkt</Link>
        <Link to="#">Ta bort produkt</Link>
      </div>
    <LoginForm />
    <Footer />
  </div>
  )
}

export default MyPage