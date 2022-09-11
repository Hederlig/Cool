import React from 'react'
import Footer from '../../../components/Footer/Footer'
import LoginForm from '../../../components/Header/LoginForm/LoginForm'
import Sidebar from '../../../components/Header/Sidebar'
import TopBar from '../../../components/Header/TopBar/TopBar'

const CreateCategory = () => {
  return (
    <div>
      <TopBar />
      <Sidebar />
      <div className='new-product-container'>
        <h1>Skapa ny kategori</h1>
          <form>
            <div class="row mb-3">
              <div class="col">
                <input type="text"name="name" class="form-control" placeholder="Kategori namn"/>
              </div>
            </div>
            <button class="btn btn-primary">Skapa</button>
          </form>
      </div>
      <Footer />
      <LoginForm />
    </div>
  )
}

export default CreateCategory