import React from 'react'
import Footer from '../../../components/Footer/Footer'
import LoginForm from '../../../components/Header/LoginForm/LoginForm'
import Sidebar from '../../../components/Header/Sidebar'
import TopBar from '../../../components/Header/TopBar/TopBar'
import './CreateProduct.css'

const CreateProduct = () => {
  return (
    <div>
      <TopBar />
      <Sidebar />
      <div className='new-product-container'>
        <h1>Ny produkt</h1>
          <form>
            <div class="row mb-3">
              <div class="col">
                <input type="text"name="name" class="form-control" placeholder="Produkt namn"/>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col"><textarea name="description" class="form-control" placeholder="Beskrivning"></textarea>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <select name="brand" class="form-control">
                  <option disabled selected value> -- Välj Kategori -- </option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>"Alla produkter kommer visas i denna lista"</option>
                </select>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <input type="text" name="imageUrl" class="form-control" placeholder="Bild URL"/>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <input type="number" name="price" class="form-control" placeholder="Pris"/>
              </div>
            </div>
            <button class="btn btn-primary">Lägg till</button>
          </form>
      </div>
      <LoginForm />
      <Footer />
    </div>
  )
}

export default CreateProduct